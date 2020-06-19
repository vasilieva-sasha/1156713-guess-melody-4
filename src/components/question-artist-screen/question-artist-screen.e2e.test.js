import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import QuestionArtistScreen from "./question-artist-screen";

Enzyme.configure({
  adapter: new Adapter()
});

const mock = {
  type: `artist`,
  song: {
    artist: `Jim Beam`,
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
  },
  answers: [{
    picture: `one`,
    artist: `one`,
  }, {
    picture: `two`,
    artist: `two`,
  }, {
    picture: `three`,
    artist: `three`,
  }],
};

const mockEvent = {
  preventDefault() {}
};

describe(`QuestionArtistScreenComponent`, () => {
  it(`Click on answer`, () => {
    const onAnswer = jest.fn();
    const userAnswer = {
      picture: `two`,
      artist: `two`,
    };

    const questionArtist = shallow(
        <QuestionArtistScreen onAnswer={onAnswer} question={mock} />
    );

    const answerInputs = questionArtist.find(`input`);
    const answerTwo = answerInputs.at(1);

    answerTwo.simulate(`change`, mockEvent);

    expect(onAnswer.mock.calls.length).toBe(1);

    expect(onAnswer.mock.calls[0][0]).toMatchObject(mock);
    expect(onAnswer.mock.calls[0][1]).toMatchObject(userAnswer);
  });
});

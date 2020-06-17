import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import QuestionGenreScreen from "./question-genre-screen";

Enzyme.configure({
  adapter: new Adapter()
});

const mock = {
  question: {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `path`,
        genre: `rock`,
      },
      {
        src: `path`,
        genre: `jazz`,
      },
      {
        src: `path`,
        genre: `jazz`,
      },
      {
        src: `path`,
        genre: `blues`,
      },
    ],
  },
};

describe(`QuestionGenreScreenComponent`, () => {
  it(`When user answers genre question form is not sent`, () => {
    const onAnswer = jest.fn();
    const {question} = mock;

    const questionGenre = shallow(
        <QuestionGenreScreen onAnswer={onAnswer} question={question} />
    );

    const form = questionGenre.find(`form`);
    const formSendPrevention = jest.fn();
    form.simulate(`submit`, {
      preventDefault: formSendPrevention,
    });

    expect(onAnswer.mock.calls.length).toBe(1);
    expect(formSendPrevention.mock.calls.length).toBe(1);
  });
});

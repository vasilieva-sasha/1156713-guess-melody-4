import React from "react";
import renderer from "react-test-renderer";
import QuestionArtistScreen from "./question-artist-screen";

const question = {
  type: `artist`,
  song: {
    artist: `Jim Beam`,
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
  },
  answers: [{
    picture: `https://api.adorable.io/avatars/128/0.6174712697143883`,
    artist: `John Snow`,
  }, {
    picture: `https://api.adorable.io/avatars/128/0.6174712697143883`,
    artist: `John Snow`,
  }, {
    picture: `https://api.adorable.io/avatars/128/0.6174712697143883`,
    artist: `John Snow`,
  }],
};

describe(`QuestionArtistScreenComponent`, () => {
  it(`Render QuestionArtistScreen`, () => {
    const tree = renderer
      .create(
          <QuestionArtistScreen onAnswer={() => {}} question={question} />
      )
      .toJSON;

    expect(tree).toMatchSnapshot();
  });
});

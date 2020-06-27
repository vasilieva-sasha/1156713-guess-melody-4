import React from "react";
import renderer from "react-test-renderer";
import QuestionGenreScreen from "./question-genre-screen";

const question = {
  type: `genre`,
  genre: `rock`,
  answers: [{
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `rock`,
  }, {
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `blues`,
  }, {
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `jazz`,
  }, {
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `rock`,
  }],
};

describe(`QuestionGenreScreenComponent`, () => {
  it(`Render QuestionGenreScreen`, () => {
    const tree = renderer
      .create((
        <QuestionGenreScreen onAnswer={() => {}} question={question} renderPlayer={() => {}}/>
      ), {
        createNodeMock: () => {
          return {};
        }
      }
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

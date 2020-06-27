import React from "react";
import renderer from "react-test-renderer";
import GameScreen from "./game-screen";
import {GameType} from "../../common/consts";

const children = <div/>;

describe(`Game Screen`, () => {
  it(`Screen Artist`, () => {
    const tree = renderer.create(
        <GameScreen type={GameType.ARTIST}>
          {children}
        </GameScreen>
    );
    expect(tree).toMatchSnapshot();
  });

  it(`Screen Genre`, () => {
    const tree = renderer.create(
        <GameScreen type={GameType.GENRE}>
          {children}
        </GameScreen>
    );
    expect(tree).toMatchSnapshot();
  });
});

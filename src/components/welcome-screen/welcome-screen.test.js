import React from "react";
import renderer from "react-test-renderer";
import {WelcomeScreen} from "./welcome-screen";
import {ERRORS_COUNT} from "../../common/mock-test/consts";

describe(`WelcomeScreenComponent`, () => {
  it(`Render WelcomeScreen`, () => {
    const tree = renderer
      .create(
          <WelcomeScreen
            errorsCount={ERRORS_COUNT}
            onWelcomeButtonClick={() => {}}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});


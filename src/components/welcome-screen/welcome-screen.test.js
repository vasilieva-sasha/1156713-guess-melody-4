import React from "react";
import renderer from "react-test-renderer";
import {WelcomeScreen} from "./welcome-screen";
import {ERRORS_COUNT} from "../../common/mock-test/consts";

it(`Render WelcomeScreen`, () => {
  const tree = renderer
    .create(<WelcomeScreen
      errorsCount={ERRORS_COUNT}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

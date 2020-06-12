import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app";
import {ERRORS_COUNT} from "../../common/mock-test/consts";

it(`Render App`, () => {
  const tree = renderer
    .create(
        <App errorsCount={ERRORS_COUNT}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

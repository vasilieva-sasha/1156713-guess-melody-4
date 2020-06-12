import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {WelcomeScreen} from "./welcome-screen";
import {ERRORS_COUNT} from "../../common/mock-test/consts";

Enzyme.configure({
  adapter: new Adapter()
});

describe(`WelcomeScreenComponent`, () => {
  it(`WelcomeButton must be pressed`, () => {
    const onWelcomeButtonClick = jest.fn();

    const welcomeScreen = shallow(
        <WelcomeScreen
          errorsCount={ERRORS_COUNT}
          onWelcomeButtonClick={onWelcomeButtonClick}
        />
    );

    const welcomeButton = welcomeScreen.find(`button.welcome__button`);
    welcomeButton.simulate(`click`);

    expect(onWelcomeButtonClick.mock.calls.length).toBe(1);
  });
});

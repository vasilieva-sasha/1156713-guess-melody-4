import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AudioPlayer from "./audio-player";

Enzyme.configure({
  adapter: new Adapter()
});

const song = `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`;

const createAudioElement = () => {
  Object.defineProperty(global.window.HTMLMediaElement.prototype, `play`, {
    configurable: true,

    get() {
      setTimeout(() => (this.onloadeddata && this.onloadeddata()));
      return () => {
      };
    },
  });
};

describe(`Audio Player`, () => {
  it(`Play and pause work correctly`, () => {
    const onPlayButtonClick = jest.fn();
    const isPlaying = true;

    createAudioElement();

    const audioPlayer = mount(
        <AudioPlayer isPlaying={isPlaying} onPlayButtonClick={onPlayButtonClick} src={song} />
    );

    const button = audioPlayer.find(`button.track__button`);

    button.props().onClick();

    expect(onPlayButtonClick).toHaveBeenCalledTimes(1);
    expect(audioPlayer.state().isPlaying).toBe(false);
  });
});

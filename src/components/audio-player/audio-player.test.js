import React from "react";
import renderer from "react-test-renderer";
import AudioPlayer from "./audio-player";

const song = `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`;

describe(`Audio Player`, () => {
  it(`Audio Player renders correctly`, () => {
    const tree = renderer.create(
        <AudioPlayer isPlaying={false} onPlayButtonClick={() => {}} src={song} />, {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import React, { useState } from "react";
import Sound from "react-sound";
import Music from "../videos/sound.mp3";
import styled from "styled-components";

const PlaySound = () => {
  const [SoundStatus, setSoundStatus] = useState(0);
  const [Condition, setCondition] = useState(true);
  const [OnOff, setOnOff] = useState("Off");

  //border: 2px solid white; for button
  const Button = styled.a`
    display: block;
    top: 14%;
    right: 0%;
    border-radius: 17px 0 0 17px;
    padding: 0.5rem;
    position: absolute;
    color: gray;
    font-size: 1rem;
    z-index: 100;
    cursor: pointer;
    background-color: black;
  `;

  const handleSoundPlay = () => {
    setCondition(!Condition);
    //console.log(Condition);
    if (Condition) {
      setSoundStatus(Sound.status.PLAYING);
      setOnOff("On");
    } else {
      setSoundStatus(Sound.status.PAUSED);
      setOnOff("Off");
    }
  };

  return (
    <>
      <Button onClick={handleSoundPlay}>Sound {OnOff}</Button>
      <Sound
        url={Music}
        // autoLoad="true"
        playStatus={SoundStatus}
        playFromPosition={0}
      />
    </>
  );
};

export default PlaySound;
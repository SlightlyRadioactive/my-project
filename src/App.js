import { useState } from "react";
import TitleScreen from "./components/TitleScreen";
import SettingsScreen from "./components/SettingsScreen";
import CreditsScreen from "./components/CreditsScreen";
import "./animations.css";
import Background from "./components/Background";
import Song from "./music/track.mp3";

function App() {
  const jsons = require.context('./json', true);
  const [gameLanguage, setGameLanguage] = useState(navigator.language || navigator.userLanguage);
  if (require(`./json/title_${gameLanguage}.json`) === undefined) {}
  let titleJson = jsons(`./title_${gameLanguage}.json`);
  let creditsJson = jsons(`./credits.json`);

  const [brightness, setBrightness] = useState(1);

  var audio = document.getElementById("myAudio");
  const [musicVolume, setMusicVolume] = useState(1);

  const [messageShown, setMessageShown] = useState(false);
  const [currentScreen, setCurrentScreen] = useState('title');
  const [currentBackground, setBackground] = useState('title');

  let AcceptMessage = () => {
    document.getElementById('screen').classList.remove('fadeIn');
    document.getElementById('screen').classList.add('fadeOut');
    setTimeout(function(){      
      setMessageShown(true);
    }, 1000);
  }

  let onClickFunction = (arg) => {
    document.getElementById('screen').classList.remove('fadeIn');
    document.getElementById('background').classList.remove('fadeIn-50');
    document.getElementById('screen').classList.add('fadeOut');
    document.getElementById('background').classList.add('fadeOut-50');
    setTimeout(function () {
      document.getElementById('screen').classList.remove('fadeOut');
      document.getElementById('background').classList.remove('fadeOut-50');
      setBackground(arg);
      setCurrentScreen(arg);
      document.getElementById('screen').classList.add('fadeIn');
      document.getElementById('background').classList.add('fadeIn-50');
    }, 1000);
  };

  let onChangeLanguage = (value) => {
    setGameLanguage(value);
  }

  let onChangeBrightness = (value) => {
    console.log(value)
    setBrightness(value);
  }

  let onChangeMusicVolume = (value) => {
    audio.volume = parseFloat(value);
    setMusicVolume(parseFloat(value));
  }

  if (!messageShown) {
    return (
      <div className="App relative bg-black" onClick={AcceptMessage}>
        <div className="h-screen w-screen bg-black absolute top-0 flex justify-center fadeIn" id="screen">
          <div className="bg-black h-full w-1/3 text-center text-white font-mono text-lg">
            <h2 className="pt-40">{titleJson['info']}</h2>
            <hr />
            <p className="pt-5 pb-40">{titleJson['infoDescription']}</p>
            <p>{titleJson['continue']}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="App relative bg-black" style={{filter: `brightness(${brightness})`}}>
        <audio autoPlay loop id="myAudio">
          <source src={Song} type="audio/mpeg"/>
        </audio>
        <Background text={currentBackground} />
        <div className="h-screen w-screen absolute top-0 flex justify-center fadeIn" id="screen">
          {currentScreen === 'title' ? <TitleScreen text={titleJson} selectedOption={onClickFunction} /> : ""}
          {currentScreen === 'settings' ? <SettingsScreen text={titleJson['settingsOptions']} selectedOption={onClickFunction} language={onChangeLanguage} curLang={gameLanguage} musicVol={onChangeMusicVolume} curMusicVol={musicVolume} brightness={onChangeBrightness} curBrightness={brightness}/> : ""}
          {currentScreen === 'credits' ? <CreditsScreen text={titleJson} credits={creditsJson['credits']} selectedOption={onClickFunction}/> : ""}
        </div>
      </div>
    );
  }
}

export default App;
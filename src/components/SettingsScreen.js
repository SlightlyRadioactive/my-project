import { useState } from "react";

function SettingsScreen({text, selectedOption, language, curLang, musicVol, curMusicVol, brightness, curBrightness}) {
    const [description, setDescription] = useState('');
    const [currentBrightness, setCurrentBrightness] = useState(curBrightness);
    const [selectedLanguage, setSelectedLanguage] = useState(curLang);
    const [currentMusicVol, setMusicVol] = useState(curMusicVol);

    const changeVal = (value) => {
        setSelectedLanguage(value);
        language(value);
    }

    const changeMusicVol = (value) => {
        setMusicVol(value);
        musicVol(value);
    }

    const changeBrightness = (value) => {
        setCurrentBrightness(value);
        brightness(value);
    }

    return (
        <div className="bg-black h-full w-1/3 text-center text-white font-mono text-lg border-4 rounded-lg border-white opacity-95">
            <p className="text-5xl mt-16 mb-24">Projeto</p>
            <div>
                <button className="titleBtn" onMouseOver={() => setDescription(text['descriptions']['language'])}>{text['language']}</button>
                <select className="bg-black border-white border-2" onChange={(event) => changeVal(event.target.value)} value={selectedLanguage}>
                    <option value='pt-BR'>Português</option>
                    <option value='en-US'>English</option>
                </select>
            </div>
            <div>
                <button className="titleBtn" onMouseOver={() => setDescription(text['descriptions']['brightness'])}>{text['brightness']}</button>
                <input type="range" min={0.2} max={2} step={0.02} value={currentBrightness} onChange={(event) => changeBrightness(event.target.value)}/>
            </div>
            <button className="titleBtn" onMouseOver={() => setDescription(text['descriptions']['volumeSFX'])}>{text['volumeSFX']}</button>
            <div>
                <button className="titleBtn" onMouseOver={() => setDescription(text['descriptions']['volumeMusic'])}>{text['volumeMusic']}</button>
                <input type="range" min={0} max={1} step={0.01} value={currentMusicVol} onChange={(event) => changeMusicVol(event.target.value)}/>
            </div>
            <button className="titleBtn" onMouseOver={() => setDescription(text['descriptions']['fontSize'])}>{text['fontSize']}</button>
            <button className="titleBtn" onClick={() => selectedOption('title')} onMouseOver={() => setDescription(text['descriptions']['return'])}>{text['return']}</button>
            <div className="flex justify-center mt-20">
                <div className="w-5/6">
                    <hr />
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default SettingsScreen
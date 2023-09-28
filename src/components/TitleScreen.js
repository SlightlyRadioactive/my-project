import { useState } from "react";

function TitleScreen({text, selectedOption}) {
    const [description, setDescription] = useState('');

    return (
        <div className="bg-black h-full w-1/3 text-center text-white font-mono text-lg border-4 rounded-lg border-white opacity-95">
            <p className="text-5xl mt-16 mb-24">Projeto</p>
            <button className="titleBtn" onClick={() => selectedOption('new')} onMouseOver={() => setDescription(text['descriptions']['new'])}>{text['new']}</button>
            <button className="titleBtn" onClick={() => selectedOption('load')} onMouseOver={() => setDescription(text['descriptions']['load'])}>{text['load']}</button>
            <button className="titleBtn" onClick={() => selectedOption('settings')} onMouseOver={() => setDescription(text['descriptions']['settings'])}>{text['settings']}</button>
            <button className="titleBtn" onClick={() => selectedOption('credits')} onMouseOver={() => setDescription(text['descriptions']['credits'])}>{text['credits']}</button>
            <button className="titleBtn invisible" onClick={() => selectedOption('quit')} onMouseOver={() => setDescription(text['descriptions']['quit'])}>{text['quit']}</button>
            <div className="flex justify-center mt-20">
                <div className="w-5/6">
                    <hr />
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default TitleScreen
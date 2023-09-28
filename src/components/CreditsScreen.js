import { useState } from "react";

function CreditsScreen({ text, credits, selectedOption }) {
    const [description, setDescription] = useState('');

    const listByGroup = (role) => {
        let html = [];
        credits.forEach(value => {
            value[role].forEach(person => {
                if (person['nick'] === "" && person['link'] === ""){
                    html.push(<p>{person['name']}</p>);
                } else if (person['nick'] === "" && person['link'] !== ""){
                    html.push(<p><a target="_blank" rel="noreferrer" href={person['link']}>{person['name']}</a></p>)
                } else if (person['nick'] !== "" && person['link'] === ""){
                    html.push(<p>{person['name']} - @{person['nick']}</p>);
                } else if (person['nick'] !== "" && person['link'] !== ""){
                    html.push(<p>{person['name']} - <a target="_blank" rel="noreferrer" href={person['link']}>@{person['nick']}</a></p>);
                }
            });
        });

        return html;
    }

    return (
        <div className="bg-black h-full w-1/3 text-center text-white font-mono text-lg border-4 rounded-lg border-white opacity-95">
            <p className="text-5xl mt-16 mb-24">Projeto</p>
            <div className="mb-24">
                {
                    text['creditsRoles'].map(value => {
                        return (
                            <div key={value['id']}>
                                <p>{value['title']}</p>
                                <hr />
                                <div>{listByGroup(value['id'])}</div>
                            </div>
                        )
                    })
                }
            </div>
            <button className="titleBtn" onClick={() => selectedOption('title')} onMouseOver={() => setDescription(text['settingsOptions']['descriptions']['return'])}>{text['settingsOptions']['return']}</button>
            <div className="flex justify-center mt-20">
                <div className="w-5/6">
                    <hr />
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default CreditsScreen
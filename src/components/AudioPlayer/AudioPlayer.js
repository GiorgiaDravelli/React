import { useState} from "react";
import {sounds} from '../../SoundData';
import {Controls} from '../Controls/Controls';
import './AudioPlayer.css';

export const AudioPlayer = () => {

    const [soundtrack, setSoundtrack] = useState("");
    const [isPlaying, setIsPlaying] = useState(false);

    const soundItems = sounds.map((sound) => {
        return (
            <div className="container sound-items" key={sound.id}>
                <button className={"sound-icons"} onClick={() => playSound(sound.src)}>
                    {sound.icon}
                </button>
                <p className="sound-names"> {sound.name} </p>
            </div>
        )
    });

    const playSound = (sound) => {
        setSoundtrack(sound);
        if (soundtrack === sound || !isPlaying) {
            setIsPlaying((prev) => !prev);
        }
    };

    return (
        <div className="sounds-container">
                {soundItems}
            <Controls audio={soundtrack} isPlaying={isPlaying}/>
        </div>
    )
}
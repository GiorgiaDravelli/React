import { BsVolumeDown, BsVolumeMute, BsVolumeUp  } from 'react-icons/bs';
import { useState, useEffect, useRef } from 'react';
import './Controls.css'


export const Controls = ({audio, isPlaying}) => {

  const audioRef = useRef();
  const [volume, setVolume] = useState(60);
  const [muteVolume, setMuteVolume] = useState(false);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (isPlaying) {
      audioElement.play();
      audioRef.current.volume = volume / 100;
      audioRef.current.muted = muteVolume;
    } else if (!isPlaying) {
      audioElement.pause();
    }
  }, [audio, isPlaying, volume, audioRef, muteVolume]);

  return (
    <div>
      <audio ref={audioRef} src={audio}/>
      <div className="volume">
        <button onClick={() => setMuteVolume((prev) => !prev)}>
            {muteVolume || volume < 5 ? (
                <BsVolumeMute />
            ) : volume < 40 ? (
                <BsVolumeDown />
            ) : (
                <BsVolumeUp />
            )}
        </button>
        <input type="range" 
        min={0} 
        max={100} 
        value={volume} 
        onChange={(e) => setVolume(e.target.value)} 
        />
      </div>
    </div>
  )
}


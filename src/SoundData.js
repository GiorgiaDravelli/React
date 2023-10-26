import ambient from './assets/sounds/ambient.mp3'
import bird from './assets/sounds/bird-song.mp3'
import healing from './assets/sounds/healing-sounds.mp3'
import lullaby from './assets/sounds/lullaby.mp3'
import rain from './assets/sounds/meditative-rain.mp3'
import piano from './assets/sounds/piano.mp3'
import yoga from './assets/sounds/yoga.mp3'

import {BiHomeAlt2} from 'react-icons/bi'
import {GiHummingbird, GiHealing, GiNightSleep, GiRaining, GiGrandPiano, GiMeditation} from 'react-icons/gi'

export const sounds = [
    {   
        id: 1,
        name: 'Ambient',
        icon: <BiHomeAlt2/>,
        src: ambient
    },
    {   
        id: 2,
        name: 'Birds',
        icon: <GiHummingbird/>,
        src: bird
    },
    {
        id: 3,
        name: 'Healing',
        icon: <GiHealing/>,
        src: healing
    },
    {
        id: 4,
        name: 'Lullaby',
        icon: <GiNightSleep/>,
        src: lullaby
    },
    {
        id: 5,
        name: 'Rain',
        icon: <GiRaining/>,
        src: rain
    },
    {
        id: 6,
        name: 'Piano',
        icon: <GiGrandPiano/>,
        src: piano
    },
    {
        id: 7,
        name: 'Yoga',
        icon: <GiMeditation/>,
        src: yoga
    }
];
import { useState } from 'react';
import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';
import horse from './svg/horse.svg';
import './AnimalShow.css'


const svgMap={
bird,
cat,
cow,
gator,
horse
};


function AnimalShow({ramsaType}){
   const [clicks, setClicks] = useState(0); 
   const handleClick =() =>{
    setClicks(clicks + 1);
   };

    return ( <div className='animal-show' onClick={handleClick}>
        <img className='animal' alt="animals" src={svgMap[ramsaType]} />
        <img className='heart'
                alt="heart" 
                src={heart}
                style={{width: 10+10*clicks+'px'}} />
    </div>);
}

export default AnimalShow;
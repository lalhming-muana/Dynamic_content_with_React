import {useState} from 'react';
import AnimalShow from './AnimalShow';

function getRandomAnimal(){
    const animals =['cat','dog','bird','horse','cow','gator'];

    return animals[Math.floor(Math.random()*animals.length)];
}

function App(){

    const [animals,setAnimals] = useState([]); 
    
    const handleClick =()=>{
           setAnimals([...animals, getRandomAnimal()]);}

    const renderedAnimals = animals.map((animal, index)=>{
           return <AnimalShow ramsaType={animal} key={index} />
        });

return (<div>
    <button onClick={handleClick}> Add animal </button>
    <div>{renderedAnimals}</div>
   
</div>);
}

export default App;
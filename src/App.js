import './App.css';
import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';


/* import aguero from "./footballers/aguero.jpeg";
import ronaldo from './footballers/ronaldo.jpeg';
import messi from './footballers/messi.jpeg'; */

import Icon1 from './food/donut';
import Icon2 from './food/soda';
//import Icon3 from './food/pancakes';
import Icon4 from './food/hotdog';
import Icon5 from './food/icecream';
import Icon6 from './food/milkbox';
import Icon7 from './food/hamburger';
import Icon8 from './food/groddlesammich';
import Icon9 from './food/pasta';
import Icon10 from './food/strawberrycake';
import Icon11 from './food/pizzapepperoni';
import Icon12 from './food/apple';
import Icon13 from './food/frenchfries';






function App() {
  const [currentScore, setcurrentScore] = useState(0);
  const [bestScore, setbestScore] = useState(0);
  document.title = `Best score is ${bestScore}`;


  return (
    <div className="App">
      <h1>Memory Card</h1>
      <h2>Get points by picking your players, don't pick a player twice</h2>
      <h2 className='scores'>Current Score: {currentScore} </h2>
      <h2 className='scores'>  Best Score: {bestScore}</h2>
      
      <div className="cardcontainer">
        <Single image={<Icon1/>} name='Donut' setcurrentScore={setcurrentScore} currentScore={currentScore}
          bestScore={bestScore} setbestScore={setbestScore} />
        <Single image={<Icon2/>} name='Soda' setcurrentScore={setcurrentScore} currentScore={currentScore}
          bestScore={bestScore} setbestScore={setbestScore} />
        {/* <Single image={<Icon3/>} name='Lionel Messi' setcurrentScore={setcurrentScore} currentScore={currentScore}
          bestScore={bestScore} setbestScore={setbestScore} /> */}
        <Single image={<Icon4/>} name = 'Hot Dog' setcurrentScore={setcurrentScore} currentScore={currentScore}
        bestScore={bestScore} setbestScore={setbestScore} />      
        <Single image={<Icon5/>} name='Ice cream' setcurrentScore={setcurrentScore} currentScore={currentScore}
          bestScore={bestScore} setbestScore={setbestScore} />    
        <Single image={<Icon6/>} name='Milk' setcurrentScore={setcurrentScore} currentScore={currentScore}
          bestScore={bestScore} setbestScore={setbestScore} />
        <Single image={<Icon7/>} name='Hamburger' setcurrentScore={setcurrentScore} currentScore={currentScore}
          bestScore={bestScore} setbestScore={setbestScore} />
        <Single image={<Icon8/>} name='trent' setcurrentScore={setcurrentScore} currentScore={currentScore}
          bestScore={bestScore} setbestScore={setbestScore} />
        <Single image={<Icon9/>} name='Pasta' setcurrentScore={setcurrentScore} currentScore={currentScore}
          bestScore={bestScore} setbestScore={setbestScore} />
        <Single image={<Icon10/>} name='Cake' setcurrentScore={setcurrentScore} currentScore={currentScore}
          bestScore={bestScore} setbestScore={setbestScore} />
        <Single image={<Icon11/>} name='Pizza' setcurrentScore={setcurrentScore} currentScore={currentScore}
          bestScore={bestScore} setbestScore={setbestScore} />
        <Single image={<Icon12/>} name='Apple juice' setcurrentScore={setcurrentScore} currentScore={currentScore}
          bestScore={bestScore} setbestScore={setbestScore} />
        <Single image={<Icon13/>} name='French fries' setcurrentScore={setcurrentScore} currentScore={currentScore}
          bestScore={bestScore} setbestScore={setbestScore} /> 
      </div>
      
    </div>
  );
}


/* function Cards(props){


  //Passing the score display down to where it's used
  const setcurrentScore=props.setcurrentScore;
  const currentScore = props.currentScore;
  const bestScore = props.bestScore;
  const setbestScore = props.setbestScore;

  return(
    <div className="cardcontainer">      
      
    </div>
  )
} */



const Single = (props) => {
  const [clicked, setclicked] = useState('false');

  const reset = () => {
    setclicked('false')
  }

  //if the score is 0 after any update, reset game;
  const didMountRef = useRef(false)
  useEffect(() => {
    if (didMountRef.current) {
      if (props.currentScore == 0) {
        reset();
      }
    } else didMountRef.current = true
  })


  //changes clickstate to true if false, else reset score to 0 and update best score
  function clickhandler() {
    console.log('clicked')
    if (clicked == 'false') {
      setclicked('true');
      props.setcurrentScore(props.currentScore + 1);
    } else {
      if (props.bestScore < props.currentScore) {
        props.setbestScore(props.currentScore)
      }
      props.setcurrentScore(0);
      alert('Game over');
    }

    //trying to rearrange    
    function rearrange() {
      let cardcontainer = document.querySelector('.cardcontainer');
      let children = cardcontainer.children;
      for (let i = 0; i < children.length; i++) {
        cardcontainer.append(children[Math.floor(Math.random() * children.length)]);        
      }      
    }
    rearrange();

  }


  return (
    <div onClick={() => clickhandler()} className='card'>
      <div className="image">{props.image}</div>
      <h2 className="cardname">{props.name}</h2>
    </div>
  )
};

export default App;

import React, {useState} from 'react';
import ReactDOM from 'react-dom';



const App =() => {
  const[good, setGood] = useState (0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGoodClick = () =>{
    setAll(all + 1)
    setGood(good + 1)
    console.log("good score:", good)
  }
  const handleNeutralClick = () =>{
    setAll(all + 1)
    setNeutral(neutral + 1)
    console.log("neutral score:", neutral)
  }
  const handleBadClick = () =>{
    setAll(all + 1)
    setBad(bad + 1)
    console.log("bad score:", bad)
  }
  const getAverage = () => {
       return ((((good * 1) + (bad * -1) + (neutral * 0))/ 3)/ 100)
  }

  return (
    <div>
      <button onClick={handleGoodClick}>
        good
      </button>
      <button onClick={handleNeutralClick}>
        neutral
      </button>
      <button onClick={handleBadClick}>
        bad
      </button>
      <h1>Statistics</h1>
      <p>
        good : {good}
      </p>
      <p>
        neutral : {neutral}
      </p>
      <p>
        bad : {bad}
      </p>
      <p>
        sum : {all}
      </p>
      <p>
        average : {getAverage}
      </p>
    </div>
  )
}

ReactDOM.render(
    <App />, document.getElementById('root'));

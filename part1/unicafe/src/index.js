import React, {useState} from 'react' ;
import ReactDOM from 'react-dom';

const Statistic = ({ text, value }) => {
    return (
        <tr>
          <td>{text}</td>
          <td>{value}</td>
        </tr>
    )
}

const Statistics = ({ good, neutral, bad }) => {
    let all = good + neutral + bad;
    let average = (good + bad * (-1)) / all;
    let positive = (good/all) * 100;

    if ((good || neutral || bad) !== 0) {
        return (
            <table>
              <tbody>
                <Statistic text="good" value={good}/>
                <Statistic text="neutral" value={neutral}/>
                <Statistic text="bad" value={bad}/>
                <Statistic text="all" value={all}/>
                <Statistic text="average" value={average}/>
                <Statistic text="positive" value={positive}/>
              </tbody>
            </table>
        )
    }
    return (
        <div> No Feedback Was Given</div>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGoodClick = () => {
        setGood(good + 1)
        console.log("good score: ", good)
    }
    const handleNeutralClick = () => {
        setNeutral(neutral + 1)
        console.log("neutral score: ", neutral)
    }
    const handleBadClick = () => {
        setBad(bad + 1)
        console.log("bad score: ", bad)
    }
    return (
        <div>
          <Button text="good" onClickButton={handleGoodClick}/>
          <Button text="neutral" onClickButton={handleNeutralClick}/>
          <Button text="bad" onClickButton={handleBadClick}/>
          <h1>Statitic</h1>
          <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

const Button = ({ text, onClickButton }) => {
    return (
        <button onClick = {onClickButton}>{text}</button>
    )
}


ReactDOM.render(
        <App />, document.getElementById('root')
);

import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { diaries } from '../data/temp data'
import TextBox from './TextBox';

export default function Diary(props) {
  const [state, setState] = useState({diaries: diaries, showTextBox: false});
  
  const textBoxHandler = () => {
    if (state.showTextBox) {
      return (<TextBox></TextBox>)
    } else {
      return (<Button id='newDiary' onClick={buttonHandler}>New Entry</Button>)
    }
  }

  const buttonHandler = () => {
    setState({...state, showTextBox: true})
  }

  return (
    <div className="diary">
      <h2>Diary Entries</h2>
      {textBoxHandler()}
      {state.diaries.map((entry) => {
        return (
          <div className="diaryEntry" key={entry.id}>
            <p>{entry.entry}</p>
            <div>{entry.alterName}</div>
            <div>{props.dateFormat(entry.datetime)}</div>

          </div>
        )
      })}
    </div>
  )
}

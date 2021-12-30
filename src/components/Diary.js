import { useState } from 'react';
import { diaries } from '../data/temp data'

export default function Diary(props) {
  const [state, setState] = useState(diaries);
  
  return (
    <div className="diary">
      <h2>Diary Entries</h2>
      {state.map((entry) => {
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

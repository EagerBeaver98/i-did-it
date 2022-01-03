import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { diaries } from '../data/temp data';
import TextBox from './TextBox';

export default function Diary(props) {
	const [state, setState] = useState({ diaries: diaries, showTextBox: false });

  const getNewIDNum = () => {
    const newID = state.diaries.at(-1).id + 1;
    return newID;
  }

	const addDiary = (entry) => {
		setState({ showTextBox: false, diaries: [...state.diaries, {id: getNewIDNum(), entry: entry, alterID: props.alterID, alterName: props.alter, userID: props.profile.id, datetime: Date.now()}] });
    console.log(state);
	};

	const textBoxHandler = () => {
		if (state.showTextBox) {
			return (
				<TextBox diaries={state.diaries} addDiary={addDiary}></TextBox>
			);
		} else {
			return (
				<Button id="newDiary" onClick={buttonHandler}>
					New Entry
				</Button>
			);
		}
	};

	const buttonHandler = () => {
		setState({ ...state, showTextBox: true });
	};

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
				);
			})}
		</div>
	);
}

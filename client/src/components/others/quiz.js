import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import "./quizz.css"

export default function Quiz() {
	const history = useHistory();
	const questions = [
		{
			questionText: 'Your age?',
			answerOptions: [
				{ answerText: 'below 17', isCorrect: false },
				{ answerText: 'above 17', isCorrect: true }
			],
		},
		{
			questionText: 'Do you have have active Tuberculosis',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: false },
				{ answerText: 'No', isCorrect: true }
			],
		},
		{
			questionText: 'Do you have Blood Cancer?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: false },
				{ answerText: 'No', isCorrect: true }
			],
		},
		{
			questionText: ' Sickle Cell Disease?',
			answerOptions: [
				{ answerText: 'YES', isCorrect: false },
				{ answerText: 'NO', isCorrect: true }
			],
		},
		{
			questionText: ' Do you have Pregnancy?',
			answerOptions: [
				{ answerText: 'YES', isCorrect: false },
				{ answerText: 'NO', isCorrect: true }
			],
		},
		{
			questionText: ' Affected with Malaria within 3years',
			answerOptions: [
				{ answerText: 'YES', isCorrect: false },
				{ answerText: 'NO', isCorrect: true }
			],
		},
		{
			questionText: 'HIV / AIDS?',
			answerOptions: [
				{ answerText: 'YES', isCorrect: false },
				{ answerText: 'NO', isCorrect: true }
			],
		},
		{
			questionText: 'Minimum gap of 56 days with previous donation',
			answerOptions: [
				{ answerText: 'YES COMPLETED', isCorrect: true },
				{ answerText: 'NOT YET', isCorrect: false }
			],
		},
 
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	var [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}
		else {
			window.alert("you Are not fit for this donation try again later")
			history.push("/")
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			window.alert("you are fit for donation")
				history.push("/booking")
		}
	};
	return (
		<div className="Quizz">
		<div className='appQuizz'>
			{showScore ? (
				<div className='score-section' >
					You are NOT FIT for this donation try again later
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
		</div>
	);
}
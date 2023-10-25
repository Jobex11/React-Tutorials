import React, { Component } from "react";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 0,
      answers: Array(quizData.length).fill(""), // Initialize with empty answers
      timeLeft: 600, // 10 minutes
      isQuizFinished: false,
      showCorrection: false,
    };
  }

  handleAnswerChange = (e) => {
    const { currentQuestion, answers } = this.state;
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = e.target.value;
    this.setState({ answers: updatedAnswers });
  };

  handleNextQuestion = () => {
    const { currentQuestion } = this.state;
    if (currentQuestion < quizData.length - 1) {
      this.setState({ currentQuestion: currentQuestion + 1 });
    }
  };

  handlePreviousQuestion = () => {
    const { currentQuestion } = this.state;
    if (currentQuestion > 0) {
      this.setState({ currentQuestion: currentQuestion - 1 });
    }
  };

  startTimer = () => {
    this.timer = setInterval(() => {
      const { timeLeft, isQuizFinished } = this.state;
      if (timeLeft > 0 && !isQuizFinished) {
        this.setState({ timeLeft: timeLeft - 1 });
      } else {
        this.submitQuiz();
      }
    }, 1000);
  };

  submitQuiz = () => {
    clearInterval(this.timer);
    this.setState({ isQuizFinished: true, showCorrection: true });
  };

  render() {
    const {
      currentQuestion,
      answers,
      timeLeft,
      isQuizFinished,
      showCorrection,
    } = this.state;
    const { questions, correctAnswers } = quizData;

    return (
      <div>
        <h1>Quiz App</h1>
        <p>Time Left: {timeLeft} seconds</p>
        {isQuizFinished ? (
          <div>
            <h2>Quiz Finished</h2>
            <button onClick={this.submitQuiz}>View Corrections</button>
          </div>
        ) : (
          <div>
            <p>
              Question {currentQuestion + 1}: {questions[currentQuestion]}
            </p>
            <input
              type="text"
              value={answers[currentQuestion]}
              onChange={this.handleAnswerChange}
            />
            <button
              onClick={this.handlePreviousQuestion}
              disabled={currentQuestion === 0}
            >
              Previous
            </button>
            <button
              onClick={this.handleNextQuestion}
              disabled={currentQuestion === questions.length - 1}
            >
              Next
            </button>
            <button onClick={this.submitQuiz}>Submit</button>
          </div>
        )}
        {showCorrection && (
          <div>
            <h2>Corrections</h2>
            {questions.map((question, index) => (
              <p key={index}>
                Question {index + 1}: {question} - Your answer: {answers[index]}
                , Correct answer: {correctAnswers[index]}
              </p>
            ))}
          </div>
        )}
      </div>
    );
  }
}

const quizData = {
  questions: ["Hello how are you doing", "Question 2", "Question 3"],
  correctAnswers: ["Answer 1", "Answer 2", "Answer 3"],
};

export default Main;

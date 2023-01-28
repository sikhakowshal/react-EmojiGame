import './index.css'

const WinOrLoseCard = props => {
  const {winOrLose, score, updateAfterLose, updateAfterWon} = props

  const onClickLoseCardButton = () => {
    updateAfterLose()
  }

  const onClickWonButtonCard = () => {
    updateAfterWon()
  }

  const wonCard = () => (
    <div className="card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
        alt="win or lose"
        className="result-image"
      />
      <div className="card-content">
        <h1 className="greeting">You Won</h1>
        <p className="best-score-title">Best Score</p>
        <p className="score">12/12</p>
        <button
          className="play-again-button"
          type="button"
          onClick={onClickWonButtonCard}
        >
          Play Again
        </button>
      </div>
    </div>
  )

  const loseCard = () => (
    <div className="card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        alt="win or lose"
        className="result-image"
      />
      <div className="card-content">
        <h1 className="greeting">You Lose</h1>
        <p className="best-score-title">Score</p>
        <p className="score">{score}/12</p>
        <button
          className="play-again-button"
          type="button"
          onClick={onClickLoseCardButton}
        >
          Play Again
        </button>
      </div>
    </div>
  )

  if (winOrLose === 'lose') {
    return loseCard()
  }
  return wonCard()
}

export default WinOrLoseCard

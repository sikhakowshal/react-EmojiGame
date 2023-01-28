import './index.css'

const NavBar = props => {
  const {score, prevTopScore, winOrLose} = props

  const gameViewNavbar = () => (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          className="navbar-logo-img"
          alt="emoji logo"
        />
        <h1 className="emoji-logo-title">Emoji Game</h1>
      </div>
      <div className="navbar-score">
        <p className="current-score-indicator">Score: {score}</p>
        <p className="top-score-indicator">Top Score: {prevTopScore}</p>
      </div>
    </nav>
  )

  const gameResultNavbar = () => (
    <nav className="result-navbar">
      <div className="navbar-logo">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          className="navbar-logo-img"
          alt="emoji logo"
        />
        <h1 className="result-logo-title">Emoji Game</h1>
      </div>
    </nav>
  )

  if (winOrLose === 'lose' || winOrLose === 'won') {
    return gameResultNavbar()
  }
  return gameViewNavbar()
}

export default NavBar

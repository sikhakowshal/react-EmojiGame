import {Component} from 'react'

import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    prevTopScore: 0,
    clickedEmojiList: [],
    winOrLose: '',
  }

  updateAfterWon = () => {
    this.setState({
      score: 0,
      prevTopScore: 12,
      clickedEmojiList: [],
      winOrLose: '',
    })
  }

  updateAfterLose = () => {
    const {score, prevTopScore} = this.state
    let topScore = 0

    if (score > prevTopScore) {
      topScore = score
    }

    this.setState({
      score: 0,
      prevTopScore: topScore,
      clickedEmojiList: [],
      winOrLose: '',
    })
  }

  updateScore = id => {
    const {emojisList} = this.props
    const {clickedEmojiList, score} = this.state

    const clickedEmoji = emojisList.find(eachEmoji => eachEmoji.id === id)

    const isPresent = clickedEmojiList.some(eachEmoji => eachEmoji.id === id)

    if (score <= 10 && isPresent === false) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        clickedEmojiList: [...prevState.clickedEmojiList, clickedEmoji],
      }))
    } else if (score > 10) {
      this.setState({winOrLose: 'won'})
    } else {
      this.setState({winOrLose: 'lose'})
    }
  }

  gameWonOrLost = () => {
    const {score, winOrLose} = this.state
    return (
      <WinOrLoseCard
        winOrLose={winOrLose}
        score={score}
        updateAfterLose={this.updateAfterLose}
        updateAfterWon={this.updateAfterWon}
      />
    )
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  emojiCards = () => {
    const shuffledEmojiList = this.shuffledEmojisList()
    return shuffledEmojiList.map(emojiDetails => (
      <EmojiCard
        emojiDetails={emojiDetails}
        key={emojiDetails.id}
        updateScore={this.updateScore}
      />
    ))
  }

  render() {
    const {score, prevTopScore, winOrLose} = this.state
    let responsiveSection

    if (winOrLose === 'lose' || winOrLose === 'won') {
      responsiveSection = this.gameWonOrLost()
    } else {
      responsiveSection = this.emojiCards()
    }

    return (
      <div className="bg-container">
        <div className="responsive-container">
          <NavBar
            score={score}
            prevTopScore={prevTopScore}
            winOrLose={winOrLose}
          />
          <div className="emojis-section">
            <ul className="emojis-container">{responsiveSection}</ul>
          </div>
        </div>
      </div>
    )
  }
}

export default EmojiGame

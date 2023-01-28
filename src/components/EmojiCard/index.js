import './index.css'

const EmojiCard = props => {
  const {emojiDetails, updateScore} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmoji = () => {
    updateScore(id)
  }

  return (
    <li className="emoji-card">
      <button className="emoji-button" type="button" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  )
}

export default EmojiCard

//receive props from app.jsx
export default function CoinFlipControls({ onFlip, flipCount }) {
  return (
    <div>
      <button onClick={onFlip}>flip coin</button>
      <p>flips: {flipCount}</p>
    </div>
  )
}
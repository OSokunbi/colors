import useGenerateRandomColor from './useGenerateRandomColor'
import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [color, generateColor] = useGenerateRandomColor('00000')
  const [isPartying, setIsPartying] = useState(false)
  const intervalRef = useRef(null)

  const styles = {
    backgroundColor: `#${color}`,
    transition: 'background-color 0.5s ease'
  }

  const party = () => {
    setIsPartying(!isPartying)
    if (!isPartying) {
      intervalRef.current = setInterval(() => {
        generateColor()
      }, 300)
    } else {
      clearInterval(intervalRef.current)
    }
  }

  return (
    <>
      <div style={styles} className="App">
        <button
          id="colorSelector"
          className="colorSelector"
          onClick={generateColor}
        >
          <h1>{`#${color}`}</h1>
        </button>
        <button
          onClick={party}
          className="party">
          <h2>{isPartying ? 'Stop the Party!' : 'Party Time!'}</h2>
        </button>
      </div>
    </>
  )
}

export default App

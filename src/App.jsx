import Toast from './Toast'
import useGenerateRandomColor from './useGenerateRandomColor'
import { useState, useRef } from 'react'
import  useToast from './useToast'
import './App.css'

const App = () => {
  const [color, generateColor] = useGenerateRandomColor('00000')
  const [isPartying, setIsPartying] = useState(false)
  const intervalRef = useRef(null)
  const { toasts, toast } = useToast();

  const handleClick = () => {
      toast({
        title: "Copied to Clipboard",
        description: "The color has been copied to your clipboard",
      });
      navigator.clipboard.writeText(`#${color}`);
    };

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
      <div
        style={styles}
        className="App"
        onClick={generateColor}
      >
        <button
          id="colorSelector"
          className="colorSelector"
          onClick={(e) => {
            e.stopPropagation()
            handleClick()}
          }
        >
          <h1>{`#${color}`}</h1>
        </button>
        <button
          onClick={party}
          className="party">
          <h2>{isPartying ? 'Stop the Party!' : 'Party Time!'}</h2>
        </button>
        <Toast toasts={toasts} />
      </div>
    </>
  )
}

export default App

import { useState } from 'react'

const useGenerateRandomColor = (initialColor) => {
  const [color, setColor] = useState(initialColor);

  const generateColor = () => {
    const newColor = Math.random().toString(16).substr(-6).toUpperCase();
    setColor(newColor);
  }
  return [color, generateColor]
}

export default useGenerateRandomColor;

// src/App.tsx
import { useState } from 'react'
import TextArea from './components/TextArea'
import Buttons from './components/Buttons'
import ResultBox from './components/ResultBox'
import { reverseText, countWords, toTitleCase } from './utils/textTools'
import './styles.css'

export default function App() {
  const [text, setText] = useState<string>('')
  const [result, setResult] = useState<string>('')

  const handleReverse = () => setResult(reverseText(text))
  const handleTitleCase = () => setResult(toTitleCase(text))
  const handleCount = () => setResult(`Word Count: ${countWords(text)}`)

<<<<<<< HEAD
        <div className="output-section">
          <label htmlFor="output">Result:</label>
          <div id="output" className="output">
            {result || 'Your result will appear here...'}
          </div>
        </div>
      </main>

      <footer>
        <p>Built by Karma • Code Camp Week 1 Lab</p>
=======
  return (
    <main className="container">
      <a className="skip" href="#result">
        Skip to result
      </a>
      <h1>Mini Text Toolkit</h1>
      <TextArea value={text} onChange={setText} />
      <Buttons
        disabled={!text}
        onReverse={handleReverse}
        onTitleCase={handleTitleCase}
        onCount={handleCount}
      />
      <ResultBox result={result} />
      <footer className="footer">
        Built by <strong>Your Name</strong> · Week 1
>>>>>>> 5563e1dfb587c17dff2067aa70033a81e727528a
      </footer>
    </main>
  )
}

import { useState } from 'react'
import { reverseText, countWords, toTitleCase } from './utils/textTools'
import './App.css'

function App() {
  const [text, setText] = useState('')
  const [result, setResult] = useState('')

  return (
    <div className="container">
      <header>
        <h1>🔧 Mini Text Toolkit</h1>
        <p>Week 1 Lab - String Manipulation</p>
      </header>

      <main>
        <div className="input-section">
          <label htmlFor="input">Enter your text:</label>
          <textarea
            id="input"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Type or paste text here..."
            rows={6}
          />
        </div>

        <div className="buttons">
          <button onClick={() => setResult(reverseText(text))}>
            🔄 Reverse
          </button>
          <button onClick={() => setResult(toTitleCase(text))}>
            🔤 Title Case
          </button>
          <button onClick={() => setResult(`Word Count: ${countWords(text)}`)}>
            🔢 Count Words
          </button>
        </div>

        <div className="output-section">
          <label htmlFor="output">Result:</label>
          <div id="output" className="output">
            {result || 'Your result will appear here...'}
          </div>
        </div>
      </main>

      <footer>
        <p>Built by [Your Name] • Code Camp Week 1 Lab</p>
      </footer>
    </div>
  )
}

export default App

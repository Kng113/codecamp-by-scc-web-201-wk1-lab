/**
 * Week 1 Lab - Text Transformation Utilities
 *
 * TODO: Implement the three functions below
 * Each function should handle edge cases (empty strings, whitespace, etc.)
 *
 * Note: TypeScript may show "unused parameter" warnings until you implement these functions.
 * That's expected! The warnings will disappear once you use the parameters.
 */

/**
 * Reverses the input string safely (handles most emoji/grapheme combos)
 * @param input - The text to reverse
 * @returns The reversed string
 *
 * Example: reverseText("hello") → "olleh"
<<<<<<< HEAD
 *
=======
 * Example: reverseText("Hi 👋🏽") → "🏽👋 iH" (emoji intact)
 * 
>>>>>>> 5563e1dfb587c17dff2067aa70033a81e727528a
 * TODO: Implement this function
 * IMPORTANT: Use [...input] instead of split('') to handle emoji correctly
 * Hint: [...input].reverse().join('')
 */
export function reverseText(input: string): string {
  // TODO: Your code here
  return input.split('').reverse().join('')
}

/**
 * Counts words separated by whitespace; returns 0 for empty/whitespace-only input
 * @param input - The text to count words in
 * @returns The number of words
 *
 * Example: countWords("hello world") → 2
 * Example: countWords("  hello   world  ") → 2
 * Example: countWords("  ") → 0
 *
 * TODO: Implement this function
 * Hint: trim().split(/\s+/) treats any run of spaces/newlines as one separator
 */
export function countWords(input: string): number {
  // TODO: Your code here
  // const txt = input.split(' ')
  return input.trim().split(/\s+/).filter(Boolean).length
}

/**
 * Convert to Title Case (simple English heuristic)
 * @param input - The text to convert
 * @returns The title-cased string
 *
 * Example: toTitleCase("hello world") → "Hello World"
<<<<<<< HEAD
 *
=======
 * Example: toTitleCase("hello from kathmandu") → "Hello From Kathmandu"
 * 
>>>>>>> 5563e1dfb587c17dff2067aa70033a81e727528a
 * TODO: Implement this function
 * Hint: toLowerCase(), split(/\s+/), map to capitalize first char, join(' ')
 */
export function toTitleCase(input: string): string {
  // TODO: Your code here
  const txt = input.split(' ')
  for (let i = 0; i < txt.length; i++) {
    const firstLetter = txt[i].charAt(0).toUpperCase()
    const rest = txt[i].slice(1).toLowerCase()
    txt[i] = firstLetter + rest
  }

  return txt.join(' ')
}

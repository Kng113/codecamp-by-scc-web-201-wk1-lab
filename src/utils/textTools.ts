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
 * Reverses the input string
 * @param input - The text to reverse
 * @returns The reversed string
 *
 * Example: reverseText("hello") → "olleh"
 *
 * TODO: Implement this function
 * Hint: Use split(''), reverse(), and join('')
 */
export function reverseText(input: string): string {
  // TODO: Your code here
  return input.split('').reverse().join('')
}

/**
 * Counts the number of words in the input string
 * @param input - The text to count words in
 * @returns The number of words
 *
 * Example: countWords("hello world") → 2
 * Example: countWords("  ") → 0
 *
 * TODO: Implement this function
 * Hint: Use trim(), split(/\s+/), and filter(Boolean)
 */
export function countWords(input: string): number {
  // TODO: Your code here
  // const txt = input.split(' ')
  return input.trim().split(/\s+/).filter(Boolean).length
}

/**
 * Converts input string to Title Case
 * @param input - The text to convert
 * @returns The title-cased string
 *
 * Example: toTitleCase("hello world") → "Hello World"
 *
 * TODO: Implement this function
 * Hint: Split by spaces, capitalize first letter of each word, then join
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

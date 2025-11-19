/**
 * Week 1 Lab - Text Transformation Utilities
 * 
 * TODO: Implement the three functions below
 * Each function should handle edge cases (empty strings, whitespace, etc.)
 * 
 * Note: TypeScript may show "unused parameter" warnings until you implement these functions.
 * That's expected! The warnings will disappear once you use the parameters.
 */

/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * Reverses the input string safely (handles most emoji/grapheme combos)
 * @param input - The text to reverse
 * @returns The reversed string
 * 
 * Example: reverseText("hello") → "olleh"
 * Example: reverseText("Hi 👋🏽") → "🏽👋 iH" (emoji intact)
 * 
 * TODO: Implement this function
 * IMPORTANT: Use [...input] instead of split('') to handle emoji correctly
 * Hint: [...input].reverse().join('')
 */
export function reverseText(input: string): string {
  // TODO: Your code here
  return ''
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
  return 0
}

/**
 * Convert to Title Case (simple English heuristic)
 * @param input - The text to convert
 * @returns The title-cased string
 * 
 * Example: toTitleCase("hello world") → "Hello World"
 * Example: toTitleCase("hello from kathmandu") → "Hello From Kathmandu"
 * 
 * TODO: Implement this function
 * Hint: toLowerCase(), split(/\s+/), map to capitalize first char, join(' ')
 */
export function toTitleCase(input: string): string {
  // TODO: Your code here
  return ''
}


/**
 * oa-starter.js
 * Javascript that needs to load at the top of the page.
 * The rest of the Javascript is in main.js
 */

// Store the state of the dark/light theme in localStorage
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
} 
else {
  document.documentElement.classList.remove('dark');
}
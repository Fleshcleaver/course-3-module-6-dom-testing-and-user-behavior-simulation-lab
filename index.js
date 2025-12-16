// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.

// Step 2: DOM Manipulation Functions
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.

// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.

// Step 4: Reusable Utilities
// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.
function addElementToDOM(elementId, content) {
  const element = document.getElementById(elementId)
  if (element) {
    element.textContent += content
  }
}

function removeElementFromDOM(elementId) {
  const element = document.getElementById(elementId)
  if (element) {
    element.remove()
  }
}

function simulateClick(elementId, content) {
  // For this lab, "simulating a click" just means updating the DOM
  addElementToDOM(elementId, content)
}

function handleFormSubmit(formId, targetElementId) {
  const input = document.getElementById('user-input')
  const errorMessage = document.getElementById('error-message')
  const targetElement = document.getElementById(targetElementId)

  // Clear previous error
  errorMessage.textContent = ''
  errorMessage.classList.add('hidden')

  if (!input.value) {
    errorMessage.textContent = 'Input cannot be empty'
    errorMessage.classList.remove('hidden')
    return
  }

  targetElement.textContent += input.value
  input.value = ''
}

module.exports = {
  addElementToDOM,
  removeElementFromDOM,
  simulateClick,
  handleFormSubmit,
}
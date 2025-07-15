// Error logger script
console.log('Error logger initialized');

// Store original console.error
const originalConsoleError = console.error;

// Override console.error to log to our file
console.error = function() {
  // Call original console.error
  originalConsoleError.apply(console, arguments);
  
  // Log to our custom endpoint
  const errorMessage = Array.from(arguments).join(' ');
  fetch('/log-error', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ error: errorMessage, timestamp: new Date().toISOString() }),
  }).catch(err => originalConsoleError('Failed to log error:', err));
};

// Also capture unhandled promise rejections
window.addEventListener('unhandledrejection', function(event) {
  console.error('Unhandled Promise Rejection:', event.reason);
});

// Capture network errors
const originalFetch = window.fetch;
window.fetch = function() {
  return originalFetch.apply(this, arguments)
    .catch(error => {
      console.error('Fetch Error:', error.message);
      throw error;
    });
};

console.log('Error logger setup complete');
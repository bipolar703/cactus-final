// API utilities for form submissions and error logging

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  projectType: string;
  message: string;
}

export interface ErrorLogData {
  error: string;
  timestamp: string;
  userAgent?: string;
  url?: string;
  userId?: string;
}

export async function submitContactForm(data: ContactFormData): Promise<{ success: boolean; message: string }> {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    
    if (!response.ok) {
      throw new Error(result.message || 'Failed to submit form');
    }

    return result;
  } catch (error) {
    console.error('Contact form submission error:', error);
    throw error;
  }
}

export async function logError(data: ErrorLogData): Promise<void> {
  try {
    await fetch('/log-error', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        userAgent: navigator.userAgent,
        url: window.location.href,
      }),
    });
  } catch (error) {
    // Silently fail error logging to avoid infinite loops
    console.warn('Failed to log error:', error);
  }
}

export async function subscribeToNewsletter(email: string): Promise<{ success: boolean; message: string }> {
  try {
    const response = await fetch('/api/newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const result = await response.json();
    
    if (!response.ok) {
      throw new Error(result.message || 'Failed to subscribe');
    }

    return result;
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    throw error;
  }
}
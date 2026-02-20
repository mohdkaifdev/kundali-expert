import React from "react";

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    console.error("ErrorBoundary caught error:", error);
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Log the error and perform a safe redirect to the 404 page.
    console.error("ErrorBoundary componentDidCatch:", error, info);
    try {
      // Use replace so user can't go back to the broken state
      window.location.replace('/404');
    } catch (e) {
      // fallback: do nothing
    }
  }

  render() {
    if (this.state.hasError) {
      // Render nothing because we've redirected; avoid using <Navigate> outside Router
      return null;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

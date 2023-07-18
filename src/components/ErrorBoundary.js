import React from "react";

// Component to handle an error when single components break.
// So we can avoid the whole app rendering to break just because of a single component' error
// This component can be used to wrap another one that could break.
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  // Lifecycle method to react to 'error' event and catch it
  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
  }

  render() {
    // Show the error message if we caught one.
    // Otherwise, render the child component normally.
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
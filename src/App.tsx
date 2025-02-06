import { useEffect, useState } from "react";
import { Window } from "@tauri-apps/api/window";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initializeApp = async () => {
      try {
        const mainWindow = Window.getCurrent();
        console.log('Window initialized:', mainWindow.label);
        setIsLoading(false);
      } catch (err) {
        console.error('Error initializing app:', err);
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
        setIsLoading(false);
      }
    };

    initializeApp();
  }, []);

  if (isLoading) {
    return (
      <div className="container">
        <div className="loading">
          <h2>Loading DeepSeek...</h2>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <div className="error">
          <h2>Error</h2>
          <p>{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="retry-button"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="content">
        {/* Main content will be loaded via the window URL configuration */}
      </div>
    </div>
  );
}

export default App;
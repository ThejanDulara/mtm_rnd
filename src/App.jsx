import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="app-container">
      <div className="ai-background"></div>
      <Header />

      <div className="content-container">
        <div className="section-wrapper">
          <Dashboard />
        </div>
      </div>

      <Footer />

    <style jsx>{`
      .app-container {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        background: #f3e8ff;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        position: relative;
        overflow: hidden;
      }

      .ai-background {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, #6e45e2 0%, #89d4cf 100%);
        opacity: 0.1;
        z-index: 0;
      }

      .ai-background::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-image:
          radial-gradient(circle at 20% 30%, rgba(110, 69, 226, 0.15) 0%, transparent 20%),
          radial-gradient(circle at 80% 70%, rgba(137, 212, 207, 0.15) 0%, transparent 20%);
        animation: pulse 15s infinite alternate;
      }

      @keyframes pulse {
        0% { opacity: 0.3; }
        100% { opacity: 0.7; }
      }

      .content-container {
        width: 100%;
        max-width: 1400px;
        padding: 0 2rem;
        margin: 0 auto;
        margin-top: 2rem;
        margin-bottom: 2rem;
        flex: 1;
        position: relative;
        z-index: 1;
      }

      .section-wrapper {
        background: rgba(255, 255, 255, 0.95);
        border-radius: 16px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        padding: 2rem;
        box-sizing: border-box;
        backdrop-filter: blur(8px);
        border: 1px solid rgba(255, 255, 255, 0.2);
      }

      @media (min-width: 1400px) {
        .content-container {
          padding: 0 4rem;
        }
      }

      @media (max-width: 768px) {
        .content-container {
          padding: 0 1rem;
        }
      }
    `}</style>
    </div>
  );
}

export default App;
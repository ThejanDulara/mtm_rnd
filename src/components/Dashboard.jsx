import React, { useState } from 'react';
import MediaCarousel from './MediaCarousel'; // <-- add this

const tools = [
  {
    name: 'Communication Objective Prioritization Tool',
    url: 'https://communication-objective-prioritizat.vercel.app',
    icon: '🧠',
    description: 'Data-driven prioritization engine for communication strategies'
  },
  {
    name: 'Campaign Touchpoint Scorer',
    url: 'https://touchpoint-scorer.vercel.app',
    icon: '📊',
    description: 'Campaign Touchpoint Prioritization via Weighted Communication Task Scoring'
  },
  {
    name: 'Television Media Scheduling Optimization Tool',
    url: 'https://opt-web-app.vercel.app',
    icon: '🤖',
    description: 'Smart media spot allocator using mathematical optimization'
  },
  {
    name: 'Multimedia Reach Analyzer',
    url: 'https://mmm-reach-mtm.vercel.app',
    icon: '📈',
    description: 'Machine learning and genetic algorithm-based optimization for media mix determination'
  },
  {
    name: 'Media Objective Identifier',
    url: 'https://m-objectives.vercel.app',
    icon: '🧮',
    description: 'Filtering media objectives to streamline decision-making for planning'
  },
  {
    name: 'Television Media Reach Predictor',
    url: 'https://reach-predictor-mtm.vercel.app',
    icon: '📈',
    description: 'Machine learning–based television reach prediction for smarter television media planning'
  },
  {
    name: 'Coming soon',
    url: 'https://mtm-rnd.vercel.app',
    icon: '📈',
    description: 'AI......'
  },
];

function Dashboard() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [media, setMedia] = React.useState([]);

    React.useEffect(() => {
      fetch("/ai-highlights/manifest.json", { cache: "no-store" })
        .then(r => r.json())
        .then(setMedia)
        .catch(err => console.error("Failed to load manifest:", err));
    }, []);

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">
        <span className="title-icon">🧠</span>
        <span className="title-text">MTM Group AI Research Hub</span>
        <span className="title-pulse"></span>
      </h2>

      <div className="ai-tagline">
        <div className="ai-tagline-text">
          <span className="ai-word">Artificial</span>
          <span className="ai-word">Intelligence</span>
          <span className="ai-word">Powered</span>
          <span className="ai-word">Solutions</span>
        </div>
      </div>

      <div className="button-grid">
        {tools.map((tool, index) => (
          <a
            key={index}
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`tool-card ${hoveredCard === index ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="tool-icon">{tool.icon}</div>
            <div className="tool-content">
              <h3 className="tool-name">{tool.name}</h3>
              <p className="tool-description">{tool.description}</p>
            </div>
            <div className="tool-hover-effect"></div>
          </a>
        ))}
      </div>

    <div className="ai-video-container">
      {media.length > 0 ? (
        <MediaCarousel media={media} intervalMs={5000} />
      ) : (
        <div className="video-placeholder">
          <div className="play-button">▶</div>
          <p>AI Research Highlights</p>
        </div>
      )}
    </div>


      <p className="coming-soon">
        <span className="pulse-dot">⚡</span>
        This is just the beginning — even more intelligent tools are on their way...
      </p>

      <style jsx>{`
        .dashboard-container {
          background: rgba(255, 255, 255, 0.95);
          padding: 2.5rem;
          border-radius: 20px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .dashboard-title {
          text-align: center;
          font-size: 2rem;
          color: #2d3748;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          position: relative;
        }

        .title-icon {
          font-size: 2.5rem;
          animation: float 3s ease-in-out infinite;
        }

        .title-pulse {
          position: absolute;
          width: 100px;
          height: 100px;
          background: rgba(110, 69, 226, 0.1);
          border-radius: 50%;
          z-index: -1;
          animation: pulse 2s infinite;
        }

        .ai-tagline {
          margin: 1.5rem 0;
          overflow: hidden;
        }

        .ai-tagline-text {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .ai-word {
          background: linear-gradient(135deg, #6e45e2 0%, #89d4cf 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          font-weight: 600;
          font-size: 1.2rem;
          padding: 0.5rem 1rem;
          border-radius: 50px;
          border: 1px solid rgba(110, 69, 226, 0.3);
          animation: fadeIn 0.5s ease-out forwards;
          opacity: 0;
        }

        .ai-word:nth-child(1) { animation-delay: 0.1s; }
        .ai-word:nth-child(2) { animation-delay: 0.3s; }
        .ai-word:nth-child(3) { animation-delay: 0.5s; }
        .ai-word:nth-child(4) { animation-delay: 0.7s; }

        .button-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .tool-card {
          background: white;
          border-radius: 12px;
          padding: 1.5rem;
          text-decoration: none;
          color: #2d3748;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(0, 0, 0, 0.05);
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .tool-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
        }

        .tool-card.hovered {
          border-color: rgba(110, 69, 226, 0.3);
        }

        .tool-icon {
          font-size: 2rem;
          flex-shrink: 0;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(110, 69, 226, 0.1);
          border-radius: 12px;
        }

        .tool-content {
          flex: 1;
        }

        .tool-name {
          margin: 0 0 0.5rem 0;
          font-size: 1.1rem;
          color: #2d3748;
        }

        .tool-description {
          margin: 0;
          font-size: 0.9rem;
          color: #4a5568;
        }

        .tool-hover-effect {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(110, 69, 226, 0.05) 0%, rgba(137, 212, 207, 0.05) 100%);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .tool-card:hover .tool-hover-effect {
          opacity: 1;
        }

        .ai-video-container {
          margin-top: 3rem;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          position: relative;

          /* 🔸 Aspect ratio + fallback min-height */
          aspect-ratio: 16 / 9;
          min-height: 420px;

          background: linear-gradient(135deg, #6e45e2 0%, #89d4cf 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .video-placeholder {
          text-align: center;
          color: white;
        }

        .play-button {
          font-size: 3rem;
          margin-bottom: 1rem;
          cursor: pointer;
          transition: transform 0.2s;
        }

        .play-button:hover {
          transform: scale(1.1);
        }

        .coming-soon {
          margin-top: 2rem;
          text-align: center;
          font-size: 1rem;
          color: #6e45e2;
          font-style: italic;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .pulse-dot {
          animation: pulse 1.5s infinite;
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); opacity: 0.7; }
        }

        @keyframes fadeIn {
          to { opacity: 1; }
        }

        @media (max-width: 768px) {
          .button-grid {
            grid-template-columns: 1fr;
          }

          .dashboard-container {
            padding: 1.5rem;
          }

          .ai-tagline-text {
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Dashboard;
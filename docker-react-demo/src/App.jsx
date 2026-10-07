
import { useState } from "react";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);

  const sports = [
    {
      id: 1,
      name: "Football",
      emoji: "⚽",
      description: "The world's most popular sport.",
      category: "Team Sport",
    },
    {
      id: 2,
      name: "Cricket",
      emoji: "🏏",
      description: "A popular bat and ball sport.",
      category: "Team Sport",
    },
    {
      id: 3,
      name: "Basketball",
      emoji: "🏀",
      description: "Fast-paced game played with a ball.",
      category: "Team Sport",
    },
    {
      id: 4,
      name: "Tennis",
      emoji: "🎾",
      description: "A competitive racket sport.",
      category: "Racket Sport",
    },
    {
      id: 5,
      name: "Running",
      emoji: "🏃",
      description: "Improve your fitness with running.",
      category: "Athletics",
    },
    {
      id: 6,
      name: "Swimming",
      emoji: "🏊",
      description: "A great full-body workout.",
      category: "Water Sport",
    },
  ];

  const matches = [
    {
      id: 1,
      sport: "🏏",
      team1: "India",
      team2: "Australia",
      time: "7:30 PM",
    },
    {
      id: 2,
      sport: "⚽",
      team1: "Barcelona",
      team2: "Real Madrid",
      time: "9:00 PM",
    },
    {
      id: 3,
      sport: "🏀",
      team1: "Lakers",
      team2: "Warriors",
      time: "8:00 PM",
    },
  ];

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((item) => item !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const filteredSports = sports.filter((sport) =>
    sport.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">🏆 SportZone</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#sports">Sports</a>
          <a href="#matches">Matches</a>
          <a href="#about">About</a>
        </div>

        <div className="favorites">
          ⭐ {favorites.length}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">

        <div className="hero-content">

          <p className="small-text">
            WELCOME TO SPORTZONE
          </p>

          <h1>
            Feel the
            <br />
            <span>Spirit of Sports</span>
          </h1>

          <p>
            Discover your favorite sports, follow exciting
            matches and stay connected with the world of sports.
          </p>

          <a href="#sports" className="explore-button">
            Explore Sports →
          </a>

        </div>

        <div className="hero-image">
          🏆
        </div>

      </section>

      {/* Sports Section */}
      <section id="sports" className="sports-section">

        <div className="section-header">

          <div>
            <p className="small-text">
              EXPLORE SPORTS
            </p>

            <h2>Popular Sports</h2>
          </div>

          <input
            type="text"
            placeholder="🔍 Search sports..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

        <div className="sports-grid">

          {filteredSports.map((sport) => (

            <div className="sport-card" key={sport.id}>

              <button
                className="favorite-button"
                onClick={() => toggleFavorite(sport.id)}
              >
                {favorites.includes(sport.id) ? "❤️" : "🤍"}
              </button>

              <div className="sport-icon">
                {sport.emoji}
              </div>

              <p className="category">
                {sport.category}
              </p>

              <h3>{sport.name}</h3>

              <p className="description">
                {sport.description}
              </p>

              <button className="learn-button">
                Learn More →
              </button>

            </div>

          ))}

        </div>

      </section>

      {/* Matches Section */}
      <section id="matches" className="matches-section">

        <div className="section-title">
          <p className="small-text">
            LIVE & UPCOMING
          </p>

          <h2>Upcoming Matches</h2>
        </div>

        <div className="matches-container">

          {matches.map((match) => (

            <div className="match-card" key={match.id}>

              <div className="match-sport">
                {match.sport}
              </div>

              <div className="teams">
                <h3>{match.team1}</h3>

                <span>VS</span>

                <h3>{match.team2}</h3>
              </div>

              <div className="match-time">
                🕒 {match.time}
              </div>

              <button className="match-button">
                View Match
              </button>

            </div>

          ))}

        </div>

      </section>

      {/* Sports Stats */}
      <section className="stats-section">

        <div className="stat">
          <h2>50+</h2>
          <p>Sports Events</p>
        </div>

        <div className="stat">
          <h2>100+</h2>
          <p>Teams</p>
        </div>

        <div className="stat">
          <h2>25K+</h2>
          <p>Sports Fans</p>
        </div>

        <div className="stat">
          <h2>24/7</h2>
          <p>Sports Updates</p>
        </div>

      </section>

      {/* About Section */}
      <section id="about" className="about-section">

        <p className="small-text">
          ABOUT SPORTZONE
        </p>

        <h2>One Place for Every Sports Lover</h2>

        <p>
          SportZone is a simple sports platform where you can
          explore different sports, discover upcoming matches
          and keep track of your favorite sports.
        </p>

      </section>

      {/* Footer */}
      <footer>

        <h2>🏆 SportZone</h2>

        <p>
          Play. Compete. Inspire.
        </p>

        <p>
          © 2026 SportZone
        </p>

      </footer>

    </div>
  );
}

export default App;
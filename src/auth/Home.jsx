import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <header className="header">
        <div className="header-left">
          <img src="src/assets/logo.png" alt="Logo" className="logo" />
        </div>
        <div className="header-center">
          <input type="text" placeholder="Rechercher" className="search-bar" />
        </div>
        <div className="header-right">
        <a href="/Login" className="nav-btn">Connexion</a>
        <a href="/Register" className="nav-btn">Inscription</a>
        </div>
      </header>

      <nav className="nav">
  <a href="/Reservation" className="nav-btn">Destination</a>
  <a href="/HotelResult" className="nav-btn">Reservation</a>
  <a href="/" className="nav-btn active">Accueil</a>
  <a href="/About" className="nav-btn">A propos</a>
  <a href="/Tourisme" className="nav-btn">Communauté</a>
</nav>

      <section className="hero">
        <video autoPlay muted loop className="video-background">
          <source src="/src/assets/videosmy.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-content">
          <h1>Découvrez Le Sénégal Et Ses Merveilles !</h1>
          <div className="search-container">
            <input type="text" placeholder="Où Allez Vous ?" />
            <input type="date" />
            <input type="date" />
            <input type="number" placeholder="Adultes" />
            <input type="number" placeholder="Enfants" />
            <input type="number" placeholder="Pièces" />
            <button className="search-btn">Recherche</button>
          </div>
        </div>
      </section>

      <section className="special-offers">
        <h2>Special Offers</h2>
        <div className="offer-cards">
          {/* Répétez ce bloc pour chaque offre */}
          <div className="offer-card">
            <img src="/src/assets/radisson5.jpg" alt="Offer 1" />
            <button className="offer-btn">Découvrir Offres</button>
          </div>
          <div className="offer-card">
            <img src="/src/assets/radisson5.jpg" alt="Offer 1" />
            <button className="offer-btn">Découvrir Offres</button>
          </div>
          <div className="offer-card">
            <img src="/src/assets/radisson5.jpg" alt="Offer 1" />
            <button className="offer-btn">Découvrir Offres</button>
          </div>
          <div className="offer-card">
            <img src="/src/assets/radisson5.jpg" alt="Offer 1" />
            <button className="offer-btn">Découvrir Offres</button>
          </div>
          
        </div>
      </section>

      <section className="explore-stays">
        <h2>Explore Stays In Trending Destinations</h2>
        <div className="destination-cards">
          {/* Répétez ce bloc pour chaque destination */}
          <div className="destination-card">
            <img src="src/assets/radisson.jpg" alt="Destination 1" />
            <div className="destination-info">
              <h3>Berlin</h3>
              <p>SIDE</p>
              <p>Wed 26 Jan-Fri 27 Jan</p>
              <p>A tour of the city with a surrounding view by a professional guide...</p>
            </div>
          </div>
          <div className="destination-card">
            <img src="src/assets/radisson.jpg" alt="Destination 1" />
            <div className="destination-info">
              <h3>Berlin</h3>
              <p>SIDE</p>
              <p>Wed 26 Jan-Fri 27 Jan</p>
              <p>A tour of the city with a surrounding view by a professional guide...</p>
            </div>
          </div>
          <div className="destination-card">
            <img src="src/assets/radisson.jpg" alt="Destination 1" />
            <div className="destination-info">
              <h3>Berlin</h3>
              <p>SIDE</p>
              <p>Wed 26 Jan-Fri 27 Jan</p>
              <p>A tour of the city with a surrounding view by a professional guide...</p>
            </div>
          </div>
        </div>
      </section>

      <section className="reviewed-offers">
        <h2>Compare The Highest Reviewed Past Offers</h2>
        <div className="reviewed-cards">
          {/* Répétez ce bloc pour chaque offre passée */}
          <div className="reviewed-card">
            <img src="src/assets/rectangless.png" alt="Review 1" />
            <div className="reviewed-info">
              <p>Flight</p>
              <p>123</p>
            </div>
          </div>
          <div className="reviewed-card">
            <img src="src/assets/rectangless.png" alt="Review 1" />
            <div className="reviewed-info">
              <p>Flight</p>
              <p>123</p>
            </div>
          </div>
          <div className="reviewed-card">
            <img src="src/assets/rectangless.png" alt="Review 1" />
            <div className="reviewed-info">
              <p>Flight</p>
              <p>123</p>
            </div>
          </div>
          <div className="reviewed-card">
            <img src="src/assets/rectangless.png" alt="Review 1" />
            <div className="reviewed-info">
              <p>Flight</p>
              <p>123</p>
            </div>
          </div>
          <div className="reviewed-card">
            <img src="src/assets/rectangless.png" alt="Review 1" />
            <div className="reviewed-info">
              <p>Flight</p>
              <p>123</p>
            </div>
          </div>
        </div>
      </section>

      <div className="inspiration-section">
      <div className="overlay">
        <div className="content">
          <h1>Trouvez de l’inspiration pour votre prochain voyage</h1>
          <p>
            En savoir plus sur la merveilleuse aventure que nous aimons le plus
          </p>
          <h2>Des Routes Difficiles Mènent À Une Belle D...</h2>
          <a href="#" className="read-more">
            Lire Plus &rarr;
          </a>
        </div>
      </div>
    </div>

    <footer className="footer">
        <div className="footer-links">
          <div className="footer-column">
            <h3>À propos de nous</h3>
            <ul>
              <li><a href="#">Notre histoire</a></li>
              <li><a href="#">Travailler avec nous</a></li>
              <li><a href="#">Presse et médias</a></li>
              <li><a href="#">Confidentialité et sécurité</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Nos offres</h3>
            <ul>
              <li><a href="#">Guides touristiques</a></li>
              <li><a href="#">Offres exclusives</a></li>
              <li><a href="#">Réservations faciles</a></li>
              <li><a href="#">Assistance personnalisée</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Destinations phares</h3>
            <ul>
              <li><a href="#">Dakar</a></li>
              <li><a href="#">Île de Gorée</a></li>
              <li><a href="#">Saly-Portudal</a></li>
              <li><a href="#">Saint-Louis</a></li>
              <li><a href="#">Ziguinchor</a></li>
              <li><a href="#">Casamance</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Blogs de voyage</h3>
            <ul>
              <li><a href="#">Découvrez Dakar</a></li>
              <li><a href="#">Voyage en Casamance</a></li>
              <li><a href="#">Héritage de Saint-Louis</a></li>
              <li><a href="#">Expédition au Lac Rose</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Activités</h3>
            <ul>
              <li><a href="#">Safari au Parc Niokolo-Koba</a></li>
              <li><a href="#">Balades en pirogue</a></li>
              <li><a href="#">Randonnée dans les collines</a></li>
              <li><a href="#">Détente sur les plages</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Service</h3>
            <ul>
              <li><a href="#">Signaler une erreur</a></li>
              <li><a href="#">Assistance en ligne</a></li>
              <li><a href="#">Assurance voyage</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-social">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://t.me" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-telegram"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <div className="footer-subscribe">
            <input type="email" placeholder="Entrez votre email" />
            <button>S'inscrire</button>
          </div>
        </div>
        <div className="footer-info">
          <p>© Copyright SEN TRAVEL | Sentravel@Gmail.Com | "SEN TRAVEL : Découvrez la magie du Sénégal !" | Avenue Cheikh Anta Diop, Dakar | +221 33 123 4567</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;

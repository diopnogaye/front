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
  <a href="/Home" className="nav-btn active">Accueil</a>
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
            <h3>About Us</h3>
            <ul>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Work With Us</a></li>
              <li><a href="#">Press & Media</a></li>
              <li><a href="#">Privacy & Security</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>We Offer</h3>
            <ul>
              <li><a href="#">Trip Sponsorship</a></li>
              <li><a href="#">Last Minutes Flights</a></li>
              <li><a href="#">Best Deals</a></li>
              <li><a href="#">AI-Driven Search</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Headquarters</h3>
            <ul>
              <li><a href="#">England</a></li>
              <li><a href="#">France</a></li>
              <li><a href="#">Canada</a></li>
              <li><a href="#">Iceland</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Travel Blogs</h3>
            <ul>
              <li><a href="#">Bali Travel Guide</a></li>
              <li><a href="#">Sri Travel Guide</a></li>
              <li><a href="#">Peru Travel Guide</a></li>
              <li><a href="#">Swiss Travel Guide</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Activities</h3>
            <ul>
              <li><a href="#">Tour Leading</a></li>
              <li><a href="#">Cruising & Sailing</a></li>
              <li><a href="#">Camping</a></li>
              <li><a href="#">Kayaking</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Service</h3>
            <ul>
              <li><a href="#">Report Error</a></li>
              <li><a href="#">Ask Online</a></li>
              <li><a href="#">Travel Insurance</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-payment">
            <img src="/assets/visa.png" alt="Visa" />
            <img src="/assets/amex.png" alt="American Express" />
            <img src="/assets/mastercard.png" alt="MasterCard" />
            <img src="/assets/paypal.png" alt="PayPal" />
          </div>
          <div className="footer-social">
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-telegram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
          <div className="footer-subscribe">
            <input type="email" placeholder="Enter Your Email" />
            <button>Subscribe</button>
          </div>
        </div>
        <div className="footer-info">
          <p>© Copyright EasySet24 | Easyset24@Gmail.Com | "EasySet24: Seamless Journeys, Unrivalled Travel Wisdom!" | 123 Oxford Street, London | +44 20 7123 4567</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;

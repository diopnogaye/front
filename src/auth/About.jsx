import React, { useState } from 'react';
import './About.css';

function About() {
  // État pour la valeur de la barre de recherche
  const [searchQuery, setSearchQuery] = useState('');

  // Fonction pour gérer la recherche
  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      // Afficher ou rediriger selon la recherche
      console.log('Recherche pour:', searchQuery);
      // Vous pouvez ajouter une logique de redirection ou de filtrage des résultats ici
    }
  };

  return (
    <div>
      <header className="header">
        <div className="header-left">
          <img src="src/assets/logo.png" alt="Logo" className="logo" width={100} />
        </div>
        <div className="header-center">
          <div className="search-container">
            <input
              type="text"
              placeholder="Rechercher"
              className="search-bar"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} // Mettre à jour l'état à chaque changement
            />
            <button className="search-btn" onClick={handleSearch}>rechecher</button>
          </div>
        </div>
      </header>

      <nav className="nav">
        <a href="/Reservation" className="nav-btn">Destination</a>
        <a href="/HotelResult" className="nav-btn">Réservation</a>
        <a href="/" className="nav-btn ">Accueil</a>
        <a href="/About" className="nav-btn active">À propos</a>
        <a href="/Tourisme" className="nav-btn">Communauté</a>
      </nav>

      <div className="mins">
        <div className="min">
          <h1>Bienvenue sur SEN TRAVEL !</h1>
          <br />
          <p>
            Nous sommes Sen Travel, une équipe passionnée, engagée et visionnaire, réunissant des experts en technologie et des amoureux du voyage, tous animés par un objectif commun : révolutionner la manière dont le Sénégal se découvre et se vit. Grâce à des solutions numériques innovantes, nous nous efforçons de promouvoir le tourisme sénégalais, de valoriser la diversité culturelle et naturelle du pays, et de simplifier les voyages pour une expérience authentique, enrichissante et inoubliable.
          </p>
        </div>
        <br />
        <h3>Ce que nous faisons</h3>
        <br />
        <div className="minee">
          <div className="mine">
            <label>Faciliter vos voyages</label>
            <p>Explorez les destinations emblématiques et méconnues du Sénégal avec une plateforme intuitive et performante.</p>
          </div>
          <div className="mine">
            <label>Valoriser le patrimoine sénégalais</label>
            <p>Mettez en lumière la richesse culturelle, naturelle et historique de notre pays.</p>
          </div>
          <div className="mine">
            <label>Connecter les voyageurs aux acteurs locaux</label>
            <p>Créez des expériences authentiques et participez au développement des communautés locales.</p>
          </div>
          <div className="mine">
            <label>Offrir une expérience fluide et sécurisée</label>
            <p>Planifiez, réservez et partagez vos aventures en toute simplicité grâce à des technologies modernes comme Laravel et React.</p>
          </div>
        </div>
      </div>

      <div className="joms">
        <div className="jom">
          <h1>Vision</h1>
          <p>Notre vision est de faire du Sénégal une destination incontournable sur la scène touristique mondiale, grâce à une transformation numérique ambitieuse. Nous souhaitons révolutionner la manière dont les voyageurs découvrent, planifient et vivent leurs expériences dans le pays.</p>
        </div>
        <div className="jom1">
          <h1>Notre objectif</h1>
          <p>
            Faciliter l'accès à l'information touristique. <br />
            Centraliser les données sur les destinations, les hébergements, les moyens de transport et les activités. <br />
            Améliorer la planification des voyages : Offrir des outils intuitifs pour organiser efficacement des séjours personnalisés. <br />
            Promouvoir la diversité des destinations : Mettre en avant des lieux emblématiques et moins connus du Sénégal pour élargir les horizons des voyageurs. <br />
            Renforcer l'engagement communautaire : Offrir un espace d’échange où les utilisateurs peuvent partager leurs expériences et recommandations.
          </p>
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
}

export default About;

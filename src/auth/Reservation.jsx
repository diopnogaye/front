import React,{ useState }from 'react'
import './reservation.css';
function Reservation() {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      console.log('Recherche pour:', searchQuery);
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
        <a href="/Reservation" className="nav-btn active">Destination</a>
        <a href="/HotelResult" className="nav-btn">Réservation</a>
        <a href="/" className="nav-btn ">Accueil</a>
        <a href="/About" className="nav-btn ">À propos</a>
        <a href="/Tourisme" className="nav-btn">Communauté</a>
      </nav>
<br></br><br></br><br></br><br></br>
                 <div className="places">
                  <h1>Where is your Next Dream Place?</h1>
                  <p>Find exclusive Genius rewards in every corner of the world!</p><br></br><br></br>
                 <br></br>
                 </div><br></br><br></br><br></br>
                 <div className="jumboos">
                  <div className="jumboo">
                    <h1>Why Choose Us? </h1>
                    <div className="jumboo1">
                    <div className='champs-texte14'>
                  <div className='champs'>
                  <label htmlFor="">Explore More</label>
                    </div>
                    <div className='champs0'>
                    <img src="./src/assets/Vector0.png " alt=""/>
                      </div>
                    </div>
                    </div>
                  </div>
                  <div className="jumboot">
                  <h1>Exclusive Hotel Search!</h1>
                  </div>
                  <div className="jumboots">
                  <div className="jumboot1">
                    <p>Special offers</p>
                  </div>
                  <div className="jumboot2">
                    <p>Last Search</p>
                  </div>
                  <div className="jumboot3">
                    <p>trending destinations</p>
                  </div>
                  <div className="jumboot4">
                    <p>Highest Reviewed</p>
                  </div>
                  <div className="jumboot5">
                    <p>Highest Reviewed</p>
                  </div>
                  </div>
                 </div>
                 <div className="maits">
                  <div className="maitss">
                  <div className="maits1">
                  <div className="mait">
                  <img src="./src/assets/Dakar (1).jpg" alt=""width={180}/>
                  <div className="mait1">
                    <h3>Dakar</h3>
                  </div>
                  </div>
                 </div><br></br>
                 <div className="maits1">
                  <div className="mait">
                  <img src="./src/assets/ecolodge-senegal-sine-saloum-hotel-bazouk-saloum-1024x768.jpeg " alt=""width={160}/>
                  <div className="mait1">
                    <h3>Saloum</h3>
                    <p></p>
                  </div>
                  </div>
                 </div>
                 </div><br></br><br></br>
                 <div className="maitss2">
                 <div className="maits1">
                  <div className="mait">
                  <img src="./src/assets/R.jpeg " alt=""width={210} height={110}/>
                  <div className="mait1">
                    <h3>Saly</h3>
                    <p></p>
                  </div>
                  </div>
                  </div>
                 </div>
                 <div className="maitss1">
                  <div className="maits1">
                  <div className="mait">
                  <img src="./src/assets/KEDOUGOU.jpeg" alt="" width={180}/>
                  <div className="mait1">
                    <h3>Kedougou</h3>
                    <p></p>
                  </div>
                  </div>
                 </div><br></br>
                 <div className="maits1">
                  <div className="mait">
                  <img src="./src/assets/st louis.jpeg" alt="" width={180}/>
                  <div className="mait1">
                    <h3>Saint-Louis</h3>
                  </div>
                  </div>
                 </div>
                 </div>
                 </div>
                 <div className="reserv">
                 <h1>Special offers </h1>
                 </div>
                 <div className="reserves">
                  <di className="reservess">
                  <div className="reserve1">
                  <div className='champs-texte1'>
                  <div className='champs'>
                  <label htmlFor="">Loyalty Discounts</label>
                    </div>
                    <div className='champs0'>
                    <img src="./src/assets/arow.png " alt=""/>
                      </div>
                    </div>
                  </div>
                  </di>
                   <div className="reservess1">
                  <div className="reserve2">
                  <div className='champs-texte1'>
                  <div className='champs'>
                  <label htmlFor="">Early Booking Discounts</label>
                    </div>
                    <div className='champs0'>
                    <img src="./src/assets/arow.png " alt=""/>
                      </div>
                    </div>
                  </div>
                  </div>
                  <div className="reservess2">
                  <div className="reserve3">
                  <div className='champs-texte1'>
                  <div className='champs'>
                  <label htmlFor="">Last-Minute Deals</label>
                    </div>
                    <div className='champs0'>
                    <img src="./src/assets/arow.png " alt=""/>
                      </div>
                      </div>
                    </div>
                  </div>
                 </div><br></br>
                 {/* deuxieme partie */}

                 <div className="reserves">
                  <di className="reservess4">
                  <div className="reserve1">
                  <div className='champs-texte1'>
                  <div className='champs'>
                  <label htmlFor="">Loyalty Discounts</label>
                    </div>
                    <div className='champs0'>
                    <img src="./src/assets/arow.png " alt=""/>
                      </div>
                    </div>
                  </div>
                  </di>
                   <div className="reservess5">
                  <div className="reserve2">
                  <div className='champs-texte1'>
                  <div className='champs'>
                  <label htmlFor="">Early Booking Discounts</label>
                    </div>
                    <div className='champs0'>
                    <img src="./src/assets/arow.png " alt=""/>
                      </div>
                    </div>
                  </div>
                  </div>
                  <div className="reservess6">
                  <div className="reserve3">
                  <div className='champs-texte1'>
                  <div className='champs'>
                  <label htmlFor="">Last-Minute Deals</label>
                    </div>
                    <div className='champs0'>
                    <img src="./src/assets/arow.png " alt=""/>
                      </div>
                      </div>
                    </div>
                  </div>
                 </div><br></br><br></br>
                 <div className="makes">
                  <h1>Make a Comprasion </h1>
                  <div className="make">
                  <div className="make1">
                  <div className="makee">
                    <p>The past offers with the highest reviews outshine others,<br></br> standing as a testament to their exceptional quality.</p>
                  </div>
                  </div>
                  <div className="make2">
                  <div className="makee">
                    <p>Ring in the new year with iconic moments and unforgettable memories<br></br> in New York City</p>
                  </div>
                  </div>
                 </div>
                 </div><br></br><br></br><br></br>
                 <div className="elemens">
                 <div className="elementss">
                  <div className="element0">
                  <div className="img">
                  <img src="./src/assets/photo.png " alt="" className='image-wifi1'/>
                  </div>
                  <div className="element00">
                  <div className="composants">
                  <img src="./src/assets/yt.png " alt="" className='image-wifi'/>
                  <p>Teacher Terece</p>
                  </div>
                  <p>Returning to this hotel is always<br></br> a delight – their loyalty<br></br> program showers us with<br></br> exclusive discounts and<br></br> amazing perks!</p>
                  </div>
                  </div>
                  <div className="element0">
                    <div className="img">
                  <img src="./src/assets/photo(9).png " alt="" className='image-wifi1'/>
                  </div>
                  <div className="element01">
                  <div className="composants">
                  <img src="./src/assets/no.png " alt="" className='image-wifi'/>
                  <p>BEYU68£</p>
                  </div>
                  <p>Accessing EasySet24<br></br> extraordinary special offers<br></br> makes always our journey even<br></br> more unforgettable.</p>
                  </div>
                  </div>
                  <div className="element0">
                  <div className="img">
                  <img src="./src/assets/photo(10).png " alt="" className='image-wifi1'/>
                  </div>
                  <div className="element00">
                  <div className="composants">
                  <img src="./src/assets/ca.png " alt="" className='image-wifi'/>
                  <p>Elina13ay</p>
                  </div>
                  <p>Weekends here are pure bliss<br></br> with their carefully crafted<br></br> packages, and the extended<br></br> stay discounts make relaxation<br></br> even more enticing.</p>
                  </div>
                  </div>
                  </div>
                  </div><br></br><br></br><br></br>
                  <div className="makes">
                  <div className="make">
                  <div className="make3">
                  <div className="makee">
                    <h2>Reserve Your hotel, Pursue Your Team</h2>
                  </div>
                  </div>
                  <div className="make4">
                  <div className="makee">
                    <h2>Subscribe Our Newsletter</h2>
                  </div>
                  </div>
                 </div>
                 </div><br></br><br></br>
                 <div className="makes">
                  <div className="make">
                  <div className="make5">
                  <div className="makee">
                    <h2>Review Hotel Services Worldwide</h2>
                  </div>
                  </div>
                  <div className="make6">
                  <div className="makee">
                    <h2>Follow the Lates Tour News</h2>
                  </div>
                  </div>
                 </div>
                 </div><br></br><br></br><br></br><br></br><br></br>

                 <div className="sants">
                        <div className="sante">
                        <div className="sant">
                          <h1>Go Further With The EasySet24 App</h1>
                        </div>
                        <p>njoy savings on chosen hotels and flights when you book through the EasySet24 website.<br></br> Additionally, earn One Key Cash for every booking made through the app.</p>
                        <p>Secured By Europe GTP</p>
                       </div>
                       <div className="santts">
                       <div className="santt">
                       <img src="./src/assets/scaner.png " alt="" className='image-wifi'/>
                       </div><br></br>
                       <div className="santt">
                       <img src="./src/assets/scaner1.png " alt="" className='image-wifi'/>
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
  )
}

export default Reservation

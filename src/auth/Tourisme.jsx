import React from 'react'
import './Tourisme.css';
function Tourisme() {
  return (
    <div>
         <header className='header'>
                 <div className='container'>
                 <div className='header-content'>
                   <img src="./src/assets/logo.jpg" alt="" />
                 <div className="recherch">
                 <div className="recherche">
                     <input type="text" placeholder="" />
                 </div>
                 <div className="recherche">
                 <button type="submit"><img src="./src/assets/recherche.png" alt=""/></button>
                 </div>
                 </div>
                 <ul className='barre-navigation'>
                    <li>
                    <img src="./src/assets/logo senegal.png" alt="" />   
                    </li>
                    <li>
                    <img src="./src/assets/dollar.jpg" alt="" />
                    </li>
                    <li>
                    <img src="./src/assets/point d'interrogation.jpg" alt="" />
                    </li>
                    <li>
                    <img src="./src/assets/like.png" alt="" />
                    </li>
                    <li>
                    <img src="./src/assets/telephone.png" alt="" />
                    </li>
                    <li>
                    <img src="./src/assets/Ellipse.png" alt=""  className='ellipse'/>
                    </li>
                 <div className="champ">
                    <li>votre compte</li>
                 <div className="champp">
                    <li>Anna Carinna</li>
                 </div>
                 </div>
                   </ul>
                 </div>
                 </div>
              </header><br></br><br></br><br></br>
                 <nav className="navigation">
                  <ul>
                    <li><button name='Tril' className='Voyages'>Voyages</button></li><br></br> 
                    <li><button name='%Deals' className='%Deals'>%Deals</button></li><br></br>
                    <li><button name='lHotelt' className='Hotelt'>Hotel</button></li><br></br>
                    <li><button name='Flight' className='Flight'>Tourisme</button></li><br></br>
                    <li><button name='Apartment' className='Apartment'>Appartement</button></li><br></br>
                    <li><button name='Camper' className='Camper'>Villa</button></li><br></br>
                 </ul>
                 </nav><br></br><br></br><br></br><br></br>

                 <div className="places1">
                  <h1>Quel est le lieu passionnant où vous mènera votre prochaine aventure ?</h1>
                  <p>Profitez des récompenses exclusives  lors de vos voyages !</p><br></br><br></br>
                  <ul className="place">
                    <li>From -To</li>
                    <li>voyages</li>
                    <li>Passagers - Classe </li>
                    <li>Départ - Retour</li>
                  </ul><br></br>
                  <div className="placee">
                   <div className="plas">
                  <div className='champs-texte11'>
                    <div className='champs0'>
                    <label htmlFor="">Dakar - saly</label>
                      </div>
                    </div>
                    </div>
                    <div className="plas1">
                    <div className='champs-texte12'>
                  <div className='champs'>
                  <label htmlFor=""> À double sens</label>
                    </div>
                    <div className='champs0'>
                    <img src="./src/assets/hotel1.png " alt=""/>
                      </div>
                    </div>
                    </div>
                    <div className="plas2">
                    <div className="tous">
                    <div className='champs-texte15'>
                  <div className='champs'>
                   <img src="./src/assets/hotel2.png " alt=""/>
                    </div>
                    <div className='champs0'>
                    <label htmlFor="">2 Adultes - 3 Enfants </label>
                      </div>
                    </div>
                    <div className='champs-texte15'>
                  <div className='champs'>
                  <label htmlFor="">Economy</label>
                    </div>
                    <div className='champs0'>
                    <img src="./src/assets/hotel1.png " alt=""/>
                      </div>
                    </div>
                    </div>
                    </div>
                    <div className="plas3">
                    <div className='champs-texte14'>
                  <div className='champs'>
                   <img src="./src/assets/hotel4.png " alt=""/>
                    </div>
                    <div className='champs0'>
                    <label htmlFor="">18 déc. 2024 - 23 déc. 2024</label>
                      </div>
                    </div>
                    </div>
                    <button name='Find Flights' className='Find Flights'>Find Flights</button>
                    </div>
                 </div><br></br><br></br><br></br><br></br><br></br>
                 <div className="filters">
                    <div className="filters1">
                    <p>Departure time</p>
                    <div className="filter1">
                    <div className="filter">
                    <div className='champs-texte14'>
                  <div className='champs'>
                  <label htmlFor="">From:12:00</label>
                    </div>
                    <div className='champs0'>
                     <img src="./src/assets/Clip.png " alt=""/>
                      </div>
                      </div>
                     </div>
                     <div className="filter">
                    <div className='champs-texte14'>
                  <div className='champs'>
                  <label htmlFor="">UpTo:16:45</label>
                    </div>
                    <div className='champs0'>
                    <img src="./src/assets/Clip.png " alt=""/>
                      </div>
                      </div>
                     </div>
                     </div><br></br><br></br>
                     {/* //dexieme */}
                     <p>Trip Duration</p>
                    <div className="filter1">
                    <div className="filter">
                    <div className='champs-texte14'>
                  <div className='champs'>
                  <label htmlFor="">From:7hTo12h</label>
                    </div>
                    <div className='champs0'>
                    <img src="./src/assets/big.png " alt=""/>
                      </div>
                      </div>
                     </div>
                     <div className="filter">
                    <div className='champs-texte14'>
                  <div className='champs'>
                  <label htmlFor="">One Stop</label>
                    </div>
                    <div className='champs0'>
                    <img src="./src/assets/Clip.png " alt=""/>
                      </div>
                      </div>
                     </div>
                     </div><br></br><br></br>
                     
                     <h2>Airline</h2>
                     <div className="filte">
                     <input type="checkbox"/>
                     <label htmlFor="">Austrian Airlines</label><br></br>
                     <input type="checkbox"/>
                     <label htmlFor="">Air France</label><br></br>
                     <input type="checkbox"/>
                     <label htmlFor="">Lufthansa</label><br></br>
                     <input type="checkbox"/>
                     <label htmlFor="">Brussels Airlines</label><br></br>
                     <input type="checkbox"/>
                     <label htmlFor="">ITA Airways</label><br></br>
                     <div className='champs-texte'>
                  <div className='champs'>
                  <label htmlFor="">Show More</label>
                    </div>
                    <div className='champs0'>
                    <img src="./src/assets/down.png " alt=""/>
                      </div>
                      </div>
                     </div><br></br><br></br><br></br><br></br><br></br><br></br>
                     <h2>Passenger Rating</h2>
                     <div className="filte">
                     <input type="radio"/>
                     <label htmlFor="">All</label><br></br>
                     <input type="radio"/>
                     <label htmlFor="">Outstanding 9+</label><br></br>
                     <input type="radio"/>
                     <label htmlFor="">Very good 8+</label><br></br>
                     <input type="radio"/>
                     <label htmlFor="">Good 7+</label><br></br>
                     <input type="radio"/>
                     <label htmlFor="">Excellent</label><br></br>
                     <input type="radio"/>
                     <label htmlFor="">Poor</label><br></br>
                     <div className='champs-texte'>
                  <div className='champs'>
                  <label htmlFor="">Show More</label>
                    </div>
                    <div className='champs0'>
                    <img src="./src/assets/down.png " alt=""/>
                      </div>
                      </div>
                     </div><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                     <h2>Popular filters </h2>
                     <div className="filte">
                     <input type="checkbox"/>
                     <label htmlFor="">Drink Included</label><br></br>
                     <input type="checkbox"/>
                     <label htmlFor="">Taxes Included</label><br></br>
                     <input type="checkbox"/>
                     <label htmlFor="">ViP</label><br></br>
                     <input type="checkbox"/>
                     <label htmlFor="">Child Friendly</label><br></br>
                     <input type="checkbox"/>
                     <label htmlFor="">Pet friendly</label><br></br>
                     <div className='champs-texte'>
                  <div className='champs'>
                  <label htmlFor="">Show More</label>
                    </div>
                    <div className='champs0'>
                    <img src="./src/assets/down.png " alt=""/>
                      </div>
                      </div>
                     </div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                     <div className="filte">
                     <input type="checkbox"/>
                     <label htmlFor="">Filter With the Help Of AI . See the results  here !</label><br></br><br></br>
                     <input type="checkbox"/>
                     <label htmlFor="">Filter Randomly. See the results  here !</label><br></br>
                     </div>
                     </div>
                     <div className="jumbou">
                     <div className="jumbos11">
            <div className="jum">
         <img src="./src/assets/Flight.png " alt="" className='image'/>
                <div className="rows">
                <div className="roww">
                <div className='champs-texte1'>
                            <div className='champs'>
                            <label htmlFor="">From</label>
                            </div>
                            <div className='champs0'>
                            <label htmlFor="">Stockholm</label>
                            </div>
                           </div>
                        </div><br></br><br></br>
                        <div className="roww1">
                <div className='champs-texte1'>
                            <div className='champs'>
                            <label htmlFor="">12:00</label>
                            </div>
                            <div className='champs0'>
                            <label htmlFor="">PM</label>
                            </div>
                           </div>
                        </div>
                        <p>Departure</p><br></br>
                        <div className="roww2">
                <div className='champs-texte1'>
                            <div className='champs'>
                            <img src="./src/assets/baggage.png " alt=""/>
                            </div>
                            <div className='champs0'>
                            <label htmlFor="">ARN Stockholm</label>
                            </div>
                           </div>
                        </div><br></br>
                        <div className="roww3">
                <div className='champs-texte1'>
                            <div className='champs'>
                            <label htmlFor="">$75</label>
                            </div>
                            <div className='champs0'>
                            <label htmlFor="">25 Vacant Seats </label>
                            </div>
                           </div>
                        </div>
                        </div>

                       {/* //deuxieme */}
                        <div className="rows00">
                        <img src="./src/assets/hotel5.png " alt="" className='image-wifi'/>
                        <p>Trip Duration  : 9h ,45m</p>
                        <div className="touss">
                        <div className="roww1">
                <div className='champs-texte1'>
                            <div className='champs'>
                            <label htmlFor="">12:00</label>
                            </div>
                            <div className='champs0'>
                            <label htmlFor="">PM</label>
                            </div>
                           </div>
                        </div>
                        <div className="roww1">
                <div className='champs-texte1'>
                            <div className='champs'>
                            <label htmlFor="">12:00</label>
                            </div>
                            <div className='champs0'>
                            <label htmlFor="">PM</label>
                            </div>
                           </div>
                        </div>
                        </div>
                        <h3>One stop, 3h Between</h3>
                        <div className='champs-texte1'>
                            <div className='champs4'>
                            <img src="./src/assets/time.png " alt=""/>
                            </div>
                            <div className='champs2'>
                            <label htmlFor="">FCO Rome Fiumicino</label>
                           </div>
                        </div><br></br>
                        <div className="roww3">
                  <div className='champs-texte11'>
                            <div className='champs'>
                            <label htmlFor="">31% less carbon dioxide</label>
                            </div>
                        </div>
                        </div>
                        </div>
                        {/* //troisieme */}

                        <div className="rows">
                <div className="roww">
                <div className='champs-texte1'>
                            <div className='champs'>
                            <label htmlFor="">To</label>
                            </div>
                            <div className='champs0'>
                            <label htmlFor="">Istanbul</label>
                            </div>
                           </div>
                        </div><br></br><br></br>
                        <div className="roww1">
                <div className='champs-textes'>
                            <div className='champs'>
                            <label htmlFor="">10:00</label>
                            </div>
                            <div className='champs0'>
                            <label htmlFor="">AM</label>
                            </div>
                           </div>
                        </div>
                        <h4>Landing</h4><br></br>
                        <div className="roww2">
                        <div className='champs-texte1'>
                            <div className='champs0'>
                            <label htmlFor="">SAW Istanbul Sabiha</label>
                            </div>
                            <div className='champs'>
                            <img src="./src/assets/baggage.png " alt=""/>
                            </div>
                           </div>
                        </div><br></br>
                        <button name='View Detail' className='View Detail'>View Detail</button>
                        </div>
                        </div>
                        </div><br></br><br></br>
                        {/* //patie2 */}

                        <div className="jumbou">
                     <div className="jumbos11">
            <div className="jum">
         <img src="./src/assets/Flight1.png " alt="" className='image'/>
                <div className="rows">
                <div className="roww">
                <div className='champs-texte1'>
                            <div className='champs'>
                            <label htmlFor="">From</label>
                            </div>
                            <div className='champs0'>
                            <label htmlFor="">Stockholm</label>
                            </div>
                           </div>
                        </div><br></br><br></br>
                        <div className="roww1">
                <div className='champs-texte1'>
                            <div className='champs'>
                            <label htmlFor="">12:00</label>
                            </div>
                            <div className='champs0'>
                            <label htmlFor="">PM</label>
                            </div>
                           </div>
                        </div>
                        <p>Departure</p><br></br>
                        <div className="roww2">
                <div className='champs-texte1'>
                            <div className='champs'>
                            <img src="./src/assets/baggage.png " alt=""/>
                            </div>
                            <div className='champs0'>
                            <label htmlFor="">ARN Stockholm</label>
                            </div>
                           </div>
                        </div><br></br>
                        <div className="roww3">
                <div className='champs-texte1'>
                            <div className='champs'>
                            <label htmlFor="">$75</label>
                            </div>
                            <div className='champs0'>
                            <label htmlFor="">25 Vacant Seats </label>
                            </div>
                           </div>
                        </div>
                        </div>

                       {/* //deuxieme */}
                        <div className="rows00">
                        <img src="./src/assets/hotel5.png " alt="" className='image-wifi'/>
                        <p>Trip Duration  : 9h ,45m</p>
                        <div className="touss">
                        <div className="roww1">
                <div className='champs-texte1'>
                            <div className='champs'>
                            <label htmlFor="">12:00</label>
                            </div>
                            <div className='champs0'>
                            <label htmlFor="">PM</label>
                            </div>
                           </div>
                        </div>
                        <div className="roww1">
                <div className='champs-texte1'>
                            <div className='champs'>
                            <label htmlFor="">12:00</label>
                            </div>
                            <div className='champs0'>
                            <label htmlFor="">PM</label>
                            </div>
                           </div>
                        </div>
                        </div>
                        <h3>One stop, 3h Between</h3>
                        <div className='champs-texte1'>
                            <div className='champs4'>
                            <img src="./src/assets/time.png " alt=""/>
                            </div>
                            <div className='champs2'>
                            <label htmlFor="">FCO Rome Fiumicino</label>
                           </div>
                        </div><br></br>
                        <div className="roww3">
                  <div className='champs-texte11'>
                            <div className='champs'>
                            <label htmlFor="">31% less carbon dioxide</label>
                            </div>
                        </div>
                        </div>
                        </div>
                        {/* //troisieme */}

                        <div className="rows">
                <div className="roww">
                <div className='champs-texte1'>
                            <div className='champs'>
                            <label htmlFor="">To</label>
                            </div>
                            <div className='champs0'>
                            <label htmlFor="">Istanbul</label>
                            </div>
                           </div>
                        </div><br></br><br></br>
                        <div className="roww1">
                <div className='champs-textes'>
                            <div className='champs'>
                            <label htmlFor="">10:00</label>
                            </div>
                            <div className='champs0'>
                            <label htmlFor="">AM</label>
                            </div>
                           </div>
                        </div>
                        <h4>Landing</h4><br></br>
                        <div className="roww2">
                        <div className='champs-texte1'>
                            <div className='champs0'>
                            <label htmlFor="">SAW Istanbul Sabiha</label>
                            </div>
                            <div className='champs'>
                            <img src="./src/assets/baggage.png " alt=""/>
                            </div>
                           </div>
                        </div><br></br>
                        <button name='View Detail' className='View Detail'>View Detail</button>
                        </div>
                        </div>
                        </div><br></br><br></br>
                        {/* //partie3 */}

                        <div className="jumbou">
                     <div className="jumbos11">
            <div className="jum">
         <img src="./src/assets/Flight2.png " alt="" className='image'/>
                <div className="rows">
                <div className="roww">
                <div className='champs-texte1'>
                            <div className='champs'>
                            <label htmlFor="">From</label>
                            </div>
                            <div className='champs0'>
                            <label htmlFor="">Stockholm</label>
                            </div>
                           </div>
                        </div><br></br><br></br>
                        <div className="roww1">
                <div className='champs-texte1'>
                            <div className='champs'>
                            <label htmlFor="">12:00</label>
                            </div>
                            <div className='champs0'>
                            <label htmlFor="">PM</label>
                            </div>
                           </div>
                        </div>
                        <p>Departure</p><br></br>
                        <div className="roww2">
                <div className='champs-texte1'>
                            <div className='champs'>
                            <img src="./src/assets/baggage.png " alt=""/>
                            </div>
                            <div className='champs0'>
                            <label htmlFor="">ARN Stockholm</label>
                            </div>
                           </div>
                        </div><br></br>
                        <div className="roww3">
                <div className='champs-texte1'>
                            <div className='champs'>
                            <label htmlFor="">$75</label>
                            </div>
                            <div className='champs0'>
                            <label htmlFor="">25 Vacant Seats </label>
                            </div>
                           </div>
                        </div>
                        </div><br></br><br></br>
                        <div className="rows00">
                        <img src="./src/assets/hotel5.png " alt="" className='image-wifi'/>
                        <p>Trip Duration  : 9h ,45m</p>
                        <div className="touss">
                        <div className="roww1">
                <div className='champs-texte1'>
                            <div className='champs'>
                            <label htmlFor="">12:00</label>
                            </div>
                            <div className='champs0'>
                            <label htmlFor="">PM</label>
                            </div>
                           </div>
                        </div>
                        <div className="roww1">
                <div className='champs-texte1'>
                            <div className='champs'>
                            <label htmlFor="">12:00</label>
                            </div>
                            <div className='champs0'>
                            <label htmlFor="">PM</label>
                            </div>
                           </div>
                        </div>
                        </div>
                        <h3>One stop, 3h Between</h3>
                        <div className='champs-texte1'>
                            <div className='champs4'>
                            <img src="./src/assets/time.png " alt=""/>
                            </div>
                            <div className='champs2'>
                            <label htmlFor="">FCO Rome Fiumicino</label>
                           </div>
                        </div><br></br>
                        <div className="roww3">
                  <div className='champs-texte11'>
                            <div className='champs'>
                            <label htmlFor="">31% less carbon dioxide</label>
                            </div>
                        </div>
                        </div>
                        </div>

                        <div className="rows">
                <div className="roww">
                <div className='champs-texte1'>
                            <div className='champs'>
                            <label htmlFor="">To</label>
                            </div>
                            <div className='champs0'>
                            <label htmlFor="">Istanbul</label>
                            </div>
                           </div>
                        </div><br></br><br></br>
                        <div className="roww1">
                <div className='champs-textes'>
                            <div className='champs'>
                            <label htmlFor="">10:00</label>
                            </div>
                            <div className='champs0'>
                            <label htmlFor="">AM</label>
                            </div>
                           </div>
                        </div>
                        <h4>Landing</h4><br></br>
                        <div className="roww2">
                        <div className='champs-texte1'>
                            <div className='champs0'>
                            <label htmlFor="">SAW Istanbul Sabiha</label>
                            </div>
                            <div className='champs'>
                            <img src="./src/assets/baggage.png " alt=""/>
                            </div>
                           </div>
                        </div><br></br>
                        <button name='View Detail' className='View Detail'>View Detail</button>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div><br></br><br></br><br></br>
                        <div className="travs1">
                        <div className="travelss0">
                    <div className='champs-texte1'>
                  <div className='champs'>
                  <label htmlFor="">List your Favourite Places </label>
                    </div>
                    <div className='champs0'>
                    <img src="./src/assets/likees.png " alt=""/>
                      </div>
                    </div>
                    </div>
                    <div className="travelss00">
                    <div className='champs-texte'>
                  <div className='champs'>
                  <label htmlFor="">List your Favourite Places </label>
                    </div>
                    <div className='champs0'>
                    <img src="./src/assets/right.png " alt=""/>
                      </div>
                    </div>
                    </div>
                    </div>
                    </div> 
                 </div>
                 {/* //fin */}
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
                 <div className="footer-content">
          <div className="footer-section about">
            <h3>About Us</h3>
            <ul>
              <li>Our Story</li>
              <li>Work With Us</li>
              <li>Press & Media</li>
              <li>Privacy & Security</li>
            </ul>
          </div>
          <div className="footer-section offers">
            <h3>We Offer</h3>
            <ul>
              <li>Trip Sponsorship</li>
              <li>Last Minutes Flights</li>
              <li>Best Deals</li>
              <li>AI-Driven Search</li>
            </ul>
          </div>
          <div className="footer-section headquarters">
            <h3>Headquarters</h3>
            <ul>
              <li>England</li>
              <li>France</li>
              <li>Norway</li>
              <li>Iceland</li>
            </ul>
          </div>
          <div className="footer-section blogs">
            <h3>Travel Blogs</h3>
            <ul>
              <li>Full Travel Guide</li>
              <li>Short Travel Guide</li>
              <li>Pet Travel Guide</li>
              <li>Sales Travel Guide</li>
            </ul>
          </div>
          <div className="footer-section activities">
            <h3>Activities</h3>
            <ul>
              <li>Tour Leading</li>
              <li>Cruising & Sailing</li>
              <li>Camping</li>
              <li>Kayaking</li>
            </ul>
          </div>
          <div className="footer-section service">
            <h3>Service</h3>
            <ul>
              <li>Report Error</li>
              <li>Ask Online</li>
              <li>Travel Insurance</li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="foots">
        <div className="foote">
        <div className="foot">
        <img src="./src/assets/visa.png " alt="" className='image-wifi'/>
        </div>
        <div className="foot">
        <img src="./src/assets/Amex.png " alt="" className='image-wifi'/>
        </div>
        <div className="foot">
        <img src="./src/assets/Master.png " alt="" className='image-wifi'/>
        </div>
        <div className="foot">
        <img src="./src/assets/Paypal.png " alt="" className='image-wifi'/>
        </div>
      </div>
      <div className="footee">
        <div className="foot">
        <img src="./src/assets/li.png " alt="" className='image-wifi'/>
        </div>
        <div className="foot">
        <img src="./src/assets/li1.png " alt="" className='image-wifi'/>
        </div>
        <div className="foot">
        <img src="./src/assets/li2.png " alt="" className='image-wifi'/>
        </div>
        <div className="foot">
        <img src="./src/assets/Facebook.png " alt="" className='image-wifi'/>
        </div>
        <div className="foot">
        <img src="./src/assets/instagram.png " alt="" className='image-wifi'/>
        </div>
        </div>
        <div className="foote">
        <div className='foot'>
           <label htmlFor="">Email</label> <br />
           <input type="text" name='email' placeholder='easyset24@gmail.com'/>
            <button name='Subscribe' className='Subscribe'>Subscribe</button>
        </div>
       </div>
       </div><br></br><br></br>
       <div className="foos">
       <div className="section">
           <img src="./src/assets/Icon.png " alt="" className='image-wifi'/>
            <p>Copyright EasySet24</p>
              </div>
              <div className="section">
           <img src="./src/assets/Icon.png " alt="" className='image-wifi'/>
            <p>easyset24@gmail.com</p>
              </div>
              <p>"EasySet24: Seamless Journeys, Unrivalled Travel Wisdom!"</p>
              <div className="section">
           <img src="./src/assets/local.png " alt="" className='image-wifi'/>
            <p>123 Oxford Street,London</p>
              </div>
              <div className="section">
           <img src="./src/assets/telephone.png " alt="" className='image-wifi'/>
            <p>+44 20 7123 4567</p>
              </div>
       </div>
                  
    </div>
  )
}

export default Tourisme

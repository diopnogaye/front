import React from 'react'
import './Flight.css';
function Flight() {
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
                    <li>Oumy Thiam</li>
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
                  <p>Profitez des récompenses exclusives  lors de vos voyages ! </p><br></br><br></br>
                  <ul className="place">
                    <li>From -To</li>
                    <li>Voyages</li>
                    <li>Passagers - Classe </li>
                    <li>Départ - Retour</li>
                  </ul><br></br>
                  <div className="placee">
                   <div className="plas">
                  <div className='champs-texte11'>
                  <div className='champs'>
                   <img src="./src/assets/hotel5.png " alt=""/>
                    </div>
                    <div className='champs0'>
                    <label htmlFor="">Gutenberg - Istanbul</label>
                      </div>
                    </div>
                    </div>
                    <div className="plas1">
                    <div className='champs-texte12'>
                  <div className='champs'>
                  <label htmlFor="">Two Way</label>
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
                    <label htmlFor="">2 Adults - 3 Children  </label>
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
                    <label htmlFor="">18 Dec 2023 - 23 Dec 2023 </label>
                      </div>
                    </div>
                    </div>
                    <button name='Rechercher' className='Rechercher'>Rechercher</button>
                    </div>
                 </div><br></br><br></br><br></br>
                 <div className="travels">
                    <div className="travel">
                        <h1>Make your travel<br></br> whishlist, well do<br></br> the rest</h1>
                        <p>Special offers to suit your plan</p>
                    </div>
                 </div><br></br><br></br><br></br><br></br>
                 <div className="travelss">
                    <div className='champs-texte1'>
                  <div className='champs'>
                  <label htmlFor="">Let's Travel together</label>
                    </div>
                    <div className='champs0'>
                    <button name='See all' className='See all'>See all</button>
                      </div>
                    </div>
                    <p>Discover the latest offers and news and start planning your next trip with us.</p>
                 </div><br></br>
                 <div className="maits11">
                  <div className="maitss">
                  <div className="maits1">
                  <div className="mait">
                  <img src="./src/assets/image 1(1).png " alt=""/>
                  <div className="mait1">
                    <h3>Washington</h3>
                    <p>Wed 25 Jan-Fri 27 Jan</p>
                  </div>
                  </div>
                 </div><br></br>
                 <div className="maits1">
                  <div className="mait">
                  <img src="./src/assets/image 1(2).png " alt=""/>
                  <div className="mait1">
                    <h3>China</h3>
                    <p>Fri 30 Dec-Tue 4 Jan</p>
                  </div>
                  </div>
                 </div>
                 </div><br></br><br></br>
                 <div className="maitss1">
                  <div className="maits1">
                  <div className="mait">
                  <img src="./src/assets/image 1(4).png " alt=""/>
                  <div className="mait1">
                    <h3>Columbia</h3>
                    <p>Sat 13 Jan-Thu 15 Jan</p>
                  </div>
                  </div>
                 </div><br></br>
                 <div className="maits1">
                  <div className="mait">
                  <img src="./src/assets/image 1(5).png " alt=""/>
                  <div className="mait1">
                    <h3>Philippines</h3>
                    <p>Sun 28 Apr-Tue 5 Maj</p>
                  </div>
                  </div>
                 </div>
                 </div>
                 <div className="maitss2">
                 <div className="maits1">
                  <div className="mait">
                  <img src="./src/assets/image 1(3).png " alt=""/>
                  <div className="mait1">
                    <h3>Berlin</h3>
                    <p>Wed 25 Jan-Fri 27 Jan</p>
                  </div>
                  </div>
                  </div>
                 </div>
                 </div><br></br><br></br><br></br><br></br>
                 <div className="tourismes">
                    <h1>Fall into travel </h1>
                    <p>Review Affordable EasySet 24 Trip Packages</p>
                    <div className='champs-texte1'>
                  <div className='champs'>
                  <label htmlFor="">Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got<br></br> the travel tools to get you to your destination.</label>
                    </div>
                    <div className='champs0'>
                    <button name='See all' className='See all'>See all</button>
                      </div>
                    </div>
                 </div><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                 <div className="tourismes1">
                    <div className="tourisme">
                    <div className='champs-texte1'>
                  <div className='champs'>
                  <button name='See all' className='See all'>From<br></br>$700</button>
                    </div>
                    <div className='champs0'>
                    <label htmlFor="">Backpacking South Of Asia ... </label>
                      </div>
                    </div><br></br><br></br><br></br>
                    <p>Traveling is a unique experience as it's the best way to<br></br> unplug from the pushes and pulls of daily life.<br></br><br></br> 

                       Relaxing through an organized trip , helps us to forget<br></br> about our problems, frustrations, and fears at home.<br></br> <br></br>

                       During our journey, we experience life in different ways.<br></br> We explore new places, cultures, cuisines, traditions, and<br></br> ways of living.</p><br></br><br></br><br></br>
                       <div className="touriste">
                       <button name='Book Flight' className='Book Flight'>Book Flight</button>
                       </div>
                       </div><br></br>
                       <div className="tourisme1">
                        <div className="tourisme0">
                        <img src="./src/assets/rectangless.png " alt=""/>
                        <img src="./src/assets/rectangless4.png " alt=""/>
                        </div>
                        <div className="tourisme00">
                        <img src="./src/assets/rectangless2.png " alt=""/>
                        <img src="./src/assets/rectangless1.png " alt=""/>
                        </div>
                       </div>
                 </div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
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
           <img src="./src/assets/message.png " alt="" className='image-wifi'/>
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

export default Flight

import React from 'react'
import './Hotel.css';
function Hotel() {
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
           <li><button name='Tril' className='Tril'>Voyages</button></li><br></br> 
          <li><button name='%Deals' className='%Deals'>%Deals</button></li><br></br>
          <li><button name='lHotelt' className='Hotelt'>Hotel</button></li><br></br>
          <li><button name='Flight' className='Flight'>Tourisme</button></li><br></br>
          <li><button name='Apartment' className='Apartment'>Appartement</button></li><br></br>
          <li><button name='Camper' className='Camper'>Villa</button></li><br></br>
          </ul>
        </nav><br></br><br></br><br></br>
         <div className="junbo">
                <div className="row">
                <img src="./src/assets/Fully.png " alt="" className='image-wifia'/>
                           
                        </div>
                    </div>
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

export default Hotel

import React from 'react'
import './HotelResult.css';import './Hotel.css';
function HotelResult() {
  return (
    <div>
       <header className="header">
        <div className="header-left">
          <img src="src/assets/logo.png" alt="Logo" className="logo" />
        </div>
        <div className="header-center">
          <input type="text" placeholder="Rechercher" className="search-bar" />
        </div>
        
      </header><br></br><br></br><br></br>
      <nav className="nav">
  <a href="/Reservation" className="nav-btn">Destination</a>
  <a href="/HotelResult" className="nav-btn active">Reservation</a>
  <a href="/" className="nav-btn ">Accueil</a>
  <a href="/About" className="nav-btn">A propos</a>
  <a href="/Tourisme" className="nav-btn">Communauté</a>
</nav><br></br><br></br><br></br><br></br>

                 <div className="places1">
                  <h1>Où se trouve votre prochain endroit de rêve ?</h1>
                  <p>Profitez des récompenses exclusives  lors de vos voyages !</p><br></br><br></br>
                  <ul className="place">
                    <li>Lieu</li>
                    <li>ViP</li>
                    <li>Passagers - État de la chambre</li>
                    <li>Arrivée - Départ</li>
                  </ul><br></br>
                  <div className="placee">
                   <div className="plas">
                  <div className='champs-texte11'>
                  <div className='champs'>
                   <img src="./src/assets/hotel.png " alt=""/>
                    </div>
                    <div className='champs0'>
                    <label htmlFor="">Gutenberg</label>
                      </div>
                    </div>
                    </div>
                    <div className="plas1">
                    <div className='champs-texte12'>
                  <div className='champs'>
                  <label htmlFor=""> Loyalty Gifts</label>
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
                    <button name='Rechercher' className='Rechercher'>Rechercher</button>
                    </div>
                 </div><br></br><br></br><br></br><br></br><br></br>
                 <div className="results">
                    <div className="resultee">
                    <img src="./src/assets/Map.png " alt=""/><br></br> 
                    </div>
                    <div className="result">
                    <div className="resulte">
                    <div className='champs-texte14'>
                  <div className='champs'>
                  <label htmlFor="">Sort By : Our top Picks For Families</label>
                    </div>
                    <div className='champs0'>
                    <img src="./src/assets/2flexe.png " alt=""/>
                      </div>
                      </div>
                      </div>
                    <div className="resulte1">
                        <h1>Gothenburg</h1>
                        <p>120 Properties Found</p>
                    </div>
                    <p>travel professionals dedicated to simplifying your travel experience by curating flight and<br></br> accommodation services on a user-friendly platform. Committed to quality and<br></br> assurance. Find More Here ...</p>
                 </div>
                 </div><br></br><br></br><br></br><br></br>
                 <div className="filters">
                    <div className="filters1">
                    <h1>Filter By</h1>
                    <p>Your Budget for per night </p>
                    <div className="filter1">
                    <div className="filter">
                    <div className='champs-texte14'>
                  <div className='champs'>
                  <label htmlFor="">Min Price</label>
                    </div>
                    <div className='champs0'>
                    <label htmlFor="">$</label>
                      </div>
                      </div>
                     </div>
                     <div className="filter">
                    <div className='champs-texte14'>
                  <div className='champs'>
                  <label htmlFor="">Max Price</label>
                    </div>
                    <div className='champs0'>
                    <label htmlFor="">$</label>
                      </div>
                      </div>
                     </div>
                     </div><br></br><br></br>
                     <h2>Popular filters</h2>
                     <div className="filte">
                     <input type="checkbox"/>
                     <label htmlFor="">Remember me ?</label><br></br>
                     <input type="checkbox"/>
                     <label htmlFor="">All-inclusive</label><br></br>
                     <input type="checkbox"/>
                     <label htmlFor="">Free Cancellation</label><br></br>
                     <input type="checkbox"/>
                     <label htmlFor="">Pool</label><br></br>
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
                     </div><br></br><br></br><br></br><br></br><br></br><br></br>
                     <h2>Room Facilities</h2>
                     <div className="filte">
                     <input type="checkbox"/>
                     <label htmlFor="">Own Bathroom</label><br></br>
                     <input type="checkbox"/>
                     <label htmlFor="">Kitchen</label><br></br>
                     <input type="checkbox"/>
                     <label htmlFor="">See View</label><br></br>
                     <input type="checkbox"/>
                     <label htmlFor="">Baby Bed</label><br></br>
                     <input type="checkbox"/>
                     <label htmlFor="">Bathtub</label><br></br>
                     <div className='champs-texte'>
                  <div className='champs'>
                  <label htmlFor="">Show More</label>
                    </div>
                    <div className='champs0'>
                    <img src="./src/assets/down.png " alt=""/>
                      </div>
                      </div>
                     </div><br></br><br></br><br></br><br></br><br></br><br></br>
                     <h2>Gusts Rating</h2>
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
                       <h2>Bed Type</h2>
                     <div className="filte">
                     <input type="radio"/>
                     <label htmlFor="">Two Single Beds</label><br></br>
                     <input type="radio"/>
                     <label htmlFor="">King Beds</label><br></br>
                     <input type="radio"/>
                     <label htmlFor="">Baby Cots</label><br></br>
                     <input type="radio"/>
                     <label htmlFor="">Double Bed </label><br></br>
                     <input type="radio"/>
                     <label htmlFor="">Single Beds</label><br></br>
                     <div className='champs-texte'>
                  <div className='champs'>
                  <label htmlFor="">Show More</label>
                    </div>
                    <div className='champs0'>
                    <img src="./src/assets/down.png " alt=""/>
                      </div>
                      </div>
                     </div><br></br><br></br><br></br><br></br><br></br><br></br>

                     <h2>Leisure activities </h2>
                     <div className="filte">
                     <input type="checkbox"/>
                     <label htmlFor="">Sauna</label><br></br>
                     <input type="checkbox"/>
                     <label htmlFor="">Fitness Centre</label><br></br>
                     <input type="checkbox"/>
                     <label htmlFor="">Bar</label><br></br>
                     <input type="checkbox"/>
                     <label htmlFor="">Steam Bath</label><br></br>
                     <input type="checkbox"/>
                     <label htmlFor="">Yoga</label><br></br>
                     <div className='champs-texte'>
                  <div className='champs'>
                  <label htmlFor="">Show More</label>
                    </div>
                    <div className='champs0'>
                    <img src="./src/assets/down.png " alt=""/>
                      </div>
                      </div>
                     </div><br></br><br></br><br></br><br></br><br></br><br></br>
                     <h2>Travel Sustainability </h2>
                     <div className="filte">
                     <input type="radio"/>
                     <label htmlFor="">Level2 and Above1</label><br></br>
                     <input type="radio"/>
                     <label htmlFor="">Level and Above2</label><br></br>
                     <div className='champs-texte'>
                  <div className='champs'>
                  <label htmlFor="">Show More</label>
                    </div>
                    <div className='champs0'>
                    <img src="./src/assets/down.png " alt=""/>
                      </div>
                      </div>
                     </div><br></br><br></br><br></br>
                     <h2>Accommodation classification</h2>
                     <div className="filte">
                     <input type="radio"/>
                     <label htmlFor="">5 Stars</label><br></br>
                     <input type="radio"/>
                     <label htmlFor="">4 Stars</label><br></br>
                     <input type="radio"/>
                     <label htmlFor="">3 Stars</label><br></br>
                     <div className='champs-texte'>
                  <div className='champs'>
                  <label htmlFor="">Show More</label>
                    </div>
                    <div className='champs0'>
                    <img src="./src/assets/down.png " alt=""/>
                      </div>
                      </div>
                     </div><br></br><br></br><br></br><br></br>
                     <h2>Distance from the centre</h2>
                     <div className="filte">
                     <input type="radio"/>
                     <label htmlFor="">Less Than 1 Km</label><br></br>
                     <input type="radio"/>
                     <label htmlFor="">Less Than 5 Km</label><br></br>
                     <input type="radio"/>
                     <label htmlFor="">Less Than 15 Km</label><br></br>
                     <div className='champs-texte'>
                  <div className='champs'>
                  <label htmlFor="">Show More</label>
                    </div>
                    <div className='champs0'>
                    <img src="./src/assets/down.png " alt=""/>
                      </div>
                      </div>
                     </div>
                     </div><br></br><br></br><br></br><br></br><br></br>
                     <div className="jumbou">
                     <div className="jumbos1">
            <div className="jum">
         <img src="./src/assets/radisson.jpg " alt="" className='image'/>
                <div className="rows">
                <h1>Radisson Blu</h1>
                <div className='champs-texte1'>
                            <div className='champs'>
                            <img src="./src/assets/loc.png " alt=""/>
                            </div>
                            <div className='champs0'>
                            <label htmlFor="">Located In Downton, 500m Distance to Shore</label>
                            
                           </div>
                        </div>
                        <div className='champs-texte1'>
                            <div className='champs'>
                            <img src="./src/assets/cup-four.png " alt=""/>
                            </div>
                            <div className='champs0'>
                            <label htmlFor="">Breakfast Included</label>
                            
                           </div>
                        </div>
                        <div className="jumms">
                        <div className='champs-texte1'>
                            <div className='champs'>
                            <img src="./src/assets/people-right.png " alt=""/>
                            </div>
                            <div className='champs0'>
                            <label htmlFor="">1 Adult,2 Children </label>
                            
                           </div>
                        </div>
                        <div className='champs-texte1'>
                            <div className='champs'>
                            <img src="./src/assets/time.png " alt=""/>
                            </div>
                            <div className='champs0'>
                            <label htmlFor="">4 Nights </label>
                            
                           </div>
                        </div>
                        </div><br></br>
                        <div className="jumms1">
                          <p>Experience Unique Opportunity </p>
                        </div>
                        <div className="jumms2">
                          <p>Standard rooms  </p>
                        </div><br></br>
                        <div className='champs-texte2'>
                            <div className='champs'>
                            <label htmlFor="">Very Good , 2.259 Reviews </label>
                            </div>
                            <div className='champs0'>
                            <img src="./src/assets/Frame0.png " alt=""/>
                           </div>
                        </div>
                        </div>
                        <div className="rows1">
                  <div className='champs-texte0'>
                            <div className='champs'>
                                <label htmlFor="">12% Off</label> <br />
                            </div>
                            <div className='champs2'>
                            <label htmlFor="">$ 125 </label>
                           </div>
                        </div>
                        <p>Includes Taxes And Charges</p>
                   <div className='champs-texte1'>
                            <div className='champs'>
                            <img src="./src/assets/feleur.png " alt=""/>
                            </div>
                            <div className='champs3'>
                            <label htmlFor="">Trip Sustatinable Level, 5</label>
                           </div>
                        </div>
                        <div className='champs-texte1'>
                            <div className='champs'>
                            <img src="./src/assets/attention.png " alt=""/>
                            </div>
                            <div className='champs2'>
                            <label htmlFor="">We Have 8 Left At 12% Off</label>
                           </div>
                        </div>
                  <div className='champs-texte111'>
                            <div className='champs'>
                            <label htmlFor="">See Availability </label>
                            </div>
                            <div className='champs2'>
                            <img src="./src/assets/flex.png " alt=""/>
                           </div>
                        </div>
                        </div>
                        </div>
                        </div><br></br><br></br>
                        {/* //deuxieme */}
                        <div className="jumbos1">
            <div className="jum">
         <img src="./src/assets/radisson7.jpg " alt="" className='image'/>
                <div className="rows">
                <h1>Radisson Blu</h1>
                <div className='champs-texte1'>
                            <div className='champs'>
                            <img src="./src/assets/loc.png " alt=""/>
                            </div>
                            <div className='champs0'>
                            <label htmlFor="">Located In Downton, 500m Distance to Shore</label>
                            
                           </div>
                        </div>
                        <div className='champs-texte1'>
                            <div className='champs'>
                            <img src="./src/assets/cup-four.png " alt=""/>
                            </div>
                            <div className='champs0'>
                            <label htmlFor="">Breakfast Included</label>
                            
                           </div>
                        </div>
                        <div className="jumms">
                        <div className='champs-texte1'>
                            <div className='champs'>
                            <img src="./src/assets/people-right.png " alt=""/>
                            </div>
                            <div className='champs0'>
                            <label htmlFor="">1 Adult,2 Children </label>
                            
                           </div>
                        </div>
                        <div className='champs-texte1'>
                            <div className='champs'>
                            <img src="./src/assets/time.png " alt=""/>
                            </div>
                            <div className='champs0'>
                            <label htmlFor="">4 Nights </label>
                            
                           </div>
                        </div>
                        </div><br></br>
                        <div className="jumms1">
                          <p>Traditional Room Design </p>
                        </div>
                        <div className="jumms2">
                          <p>Historical Café And Bar</p>
                        </div><br></br>
                        <div className='champs-texte2'>
                            <div className='champs'>
                            <label htmlFor="">Excellent , 2.259 Reviews </label>
                            </div>
                            <div className='champs0'>
                            <img src="./src/assets/Frame0.png " alt=""/>
                            
                           </div>
                        </div>

                        </div>
                        <div className="rows1">
                  <div className='champs-texte0'>
                            <div className='champs'>
                                <label htmlFor="">10% Off</label> <br />
                            </div>
                            <div className='champs2'>
                            <label htmlFor="">$ 130 </label>
                           </div>
                        </div>
                        <p>Includes Taxes And Charges</p>
                   <div className='champs-texte1'>
                            <div className='champs'>
                            <img src="./src/assets/feleur.png " alt=""/>
                            </div>
                            <div className='champs3'>
                            <label htmlFor="">Trip Sustatinable Level, 5</label>
                           </div>
                        </div>
                        <div className='champs-texte1'>
                            <div className='champs'>
                            <img src="./src/assets/attention.png " alt=""/>
                            </div>
                            <div className='champs2'>
                            <label htmlFor="">We Have 5 Left At 10% Off</label>
                           </div>
                        </div>
                  <div className='champs-texte111'>
                            <div className='champs'>
                            <label htmlFor="">See Availability </label>
                            </div>
                            <div className='champs2'>
                            <img src="./src/assets/flex.png " alt=""/>
                           </div>
                        </div>
                        </div>
                        </div>
                        </div><br></br><br></br>
                      {/* //troisieme */}
                      <div className="jumbos1">
            <div className="jum">
         <img src="./src/assets/radison1.jpg " alt="" className='image'/>
                <div className="rows">
                <h1>Radisson Blu</h1>
                <div className='champs-texte1'>
                            <div className='champs'>
                            <img src="./src/assets/loc.png " alt=""/>
                            </div>
                            <div className='champs0'>
                            <label htmlFor="">Located In Downton, 500m Distance to Shore</label>
                            
                           </div>
                        </div>
                        <div className='champs-texte1'>
                            <div className='champs'>
                            <img src="./src/assets/cup-four.png " alt=""/>
                            </div>
                            <div className='champs0'>
                            <label htmlFor="">Breakfast Included</label>
                            
                           </div>
                        </div>
                        <div className="jumms">
                        <div className='champs-texte1'>
                            <div className='champs'>
                            <img src="./src/assets/people-right.png " alt=""/>
                            </div>
                            <div className='champs0'>
                            <label htmlFor="">1 Adult,2 Children </label>
                            
                           </div>
                        </div>
                        <div className='champs-texte1'>
                            <div className='champs'>
                            <img src="./src/assets/time.png " alt=""/>
                            </div>
                            <div className='champs0'>
                            <label htmlFor="">4 Nights </label>
                            
                           </div>
                        </div>
                        </div><br></br>
                        <div className="jumms1">
                          <p>Experience Unique Opportunity </p>
                        </div>
                        <div className="jumms2">
                          <p>Classic Room Design With Cultural Foods </p>
                        </div><br></br>
                        <div className='champs-texte2'>
                            <div className='champs'>
                            <label htmlFor="">Very Good , 2.100 Reviews</label>
                            </div>
                            <div className='champs0'>
                            <img src="./src/assets/Frame0.png " alt=""/>
                            
                           </div>
                        </div>

                        </div>
                        <div className="rows1">
                  <div className='champs-texte0'>
                            <div className='champs'>
                                <label htmlFor="">8% Off</label> <br />
                            </div>
                            <div className='champs2'>
                            <label htmlFor="">$ 145 </label>
                           </div>
                        </div>
                        <p>Includes Taxes And Charges</p>
                   <div className='champs-texte1'>
                            <div className='champs'>
                            <img src="./src/assets/feleur.png " alt=""/>
                            </div>
                            <div className='champs3'>
                            <label htmlFor="">Trip Sustatinable Level, 5</label>
                           </div>
                        </div>
                        <div className='champs-texte1'>
                            <div className='champs'>
                            <img src="./src/assets/attention.png " alt=""/>
                            </div>
                            <div className='champs2'>
                            <label htmlFor="">We Have 2 Left At 8% Off</label>
                           </div>
                        </div>
                  <div className='champs-texte111'>
                            <div className='champs'>
                            <label htmlFor="">See Availability </label>
                            </div>
                            <div className='champs2'>
                            <img src="./src/assets/flex.png " alt=""/>
                           </div>
                        </div>
                        </div>
                        </div>
                        </div><br></br><br></br>
                        {/* //quatrieme */}
                        <div className="jumbos1">
            <div className="jum">
         <img src="./src/assets/radisson2.jpg " alt="" className='image'/>
                <div className="rows">
                <h1>Radisson Blu</h1>
                <div className='champs-texte1'>
                            <div className='champs'>
                            <img src="./src/assets/loc.png " alt=""/>
                            </div>
                            <div className='champs0'>
                            <label htmlFor="">Located In Downton, 500m Distance to Shore</label>
                            
                           </div>
                        </div>
                        <div className='champs-texte1'>
                            <div className='champs'>
                            <img src="./src/assets/cup-four.png " alt=""/>
                            </div>
                            <div className='champs0'>
                            <label htmlFor="">Breakfast Included</label>
                            
                           </div>
                        </div>
                        <div className="jumms">
                        <div className='champs-texte1'>
                            <div className='champs'>
                            <img src="./src/assets/people-right.png " alt=""/>
                            </div>
                            <div className='champs0'>
                            <label htmlFor="">1 Adult,2 Children </label>
                            
                           </div>
                        </div>
                        <div className='champs-texte1'>
                            <div className='champs'>
                            <img src="./src/assets/time.png " alt=""/>
                            </div>
                            <div className='champs0'>
                            <label htmlFor="">4 Nights </label>
                            
                           </div>
                        </div>
                        </div><br></br>
                        <div className="jumms1">
                          <p>Experience Unique Opportunity </p>
                        </div>
                        <div className="jumms2">
                          <p>Standard rooms  </p>
                        </div><br></br>
                        <div className='champs-texte2'>
                            <div className='champs'>
                            <label htmlFor=""> Good ,1258  Reviews</label>
                            </div>
                            <div className='champs0'>
                            <img src="./src/assets/Frame0.png " alt=""/>
                            
                           </div>
                        </div>

                        </div>
                        <div className="rows1">
                  <div className='champs-texte0'>
                            <div className='champs'>
                                <label htmlFor="">4% Off</label> <br />
                            </div>
                            <div className='champs2'>
                            <label htmlFor="">$ 150 </label>
                           </div>
                        </div>
                        <p>Includes Taxes And Charges</p>
                   <div className='champs-texte1'>
                            <div className='champs'>
                            <img src="./src/assets/feleur.png " alt=""/>
                            </div>
                            <div className='champs3'>
                            <label htmlFor="">Trip Sustatinable Level, 5</label>
                           </div>
                        </div>
                        <div className='champs-texte1'>
                            <div className='champs'>
                            <img src="./src/assets/attention.png " alt=""/>
                            </div>
                            <div className='champs2'>
                            <label htmlFor="">We Have 21 Left At 4% Off</label>
                           </div>
                        </div>
                  <div className='champs-texte111'>
                            <div className='champs'>
                            <label htmlFor="">See Availability </label>
                            </div>
                            <div className='champs2'>
                            <img src="./src/assets/flex.png " alt=""/>
                           </div>
                        </div>
                        </div>
                        </div>
                        </div><br></br><br></br>
                        {/* //cinq */}
                        <div className="jumbos1">
            <div className="jum">
         <img src="./src/assets/radison6.jpg " alt="" className='image'/>
                <div className="rows">
                <h1>Radisson Blu</h1>
                <div className='champs-texte1'>
                            <div className='champs'>
                            <img src="./src/assets/loc.png " alt=""/>
                            </div>
                            <div className='champs0'>
                            <label htmlFor="">Located In Downton, 500m Distance to Shore</label>
                            
                           </div>
                        </div>
                        <div className='champs-texte1'>
                            <div className='champs'>
                            <img src="./src/assets/cup-four.png " alt=""/>
                            </div>
                            <div className='champs0'>
                            <label htmlFor="">Breakfast Included</label>
                            
                           </div>
                        </div>
                        <div className="jumms">
                        <div className='champs-texte1'>
                            <div className='champs'>
                            <img src="./src/assets/people-right.png " alt=""/>
                            </div>
                            <div className='champs0'>
                            <label htmlFor="">1 Adult,2 Children </label>
                            
                           </div>
                        </div>
                        <div className='champs-texte1'>
                            <div className='champs'>
                            <img src="./src/assets/time.png " alt=""/>
                            </div>
                            <div className='champs0'>
                            <label htmlFor="">4 Nights </label>
                            
                           </div>
                        </div>
                        </div><br></br>
                        <div className="jumms1">
                          <p>Experience Unique Opportunity </p>
                        </div>
                        <div className="jumms2">
                          <p>Standard rooms  </p>
                        </div><br></br>
                        <div className='champs-texte2'>
                            <div className='champs'>
                            <label htmlFor="">Very Good , 2.259 Reviews </label>
                            </div>
                            <div className='champs0'>
                            <img src="./src/assets/Frame0.png " alt=""/>
                            
                           </div>
                        </div>

                        </div>
                        <div className="rows1">
                  <div className='champs-texte0'>
                            <div className='champs'>
                                <label htmlFor="">30% Off</label> <br />
                            </div>
                            <div className='champs2'>
                            <label htmlFor="">$ 218 </label>
                           </div>
                        </div>
                        <p>Includes Taxes And Charges</p>
                   <div className='champs-texte1'>
                            <div className='champs'>
                            <img src="./src/assets/feleur.png " alt=""/>
                            </div>
                            <div className='champs3'>
                            <label htmlFor="">Trip Sustatinable Level, 5</label>
                           </div>
                        </div>
                        <div className='champs-texte1'>
                            <div className='champs'>
                            <img src="./src/assets/attention.png " alt=""/>
                            </div>
                            <div className='champs2'>
                            <label htmlFor="">We Have 6 Left At 30% Off</label>
                           </div>
                        </div>
                  <div className='champs-texte111'>
                            <div className='champs'>
                            <label htmlFor="">See Availability </label>
                            </div>
                            <div className='champs2'>
                            <img src="./src/assets/flex.png " alt=""/>
                           </div>
                        </div>
                        </div>
                        </div>
                        </div><br></br><br></br><br></br>
                        <div className="travs">
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
                 </div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                 {/* //fin footer */}

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

export default HotelResult

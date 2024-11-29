import React from 'react'

function tourismecontinu() {
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
                 </nav><br></br><br></br><br></br><br></br>
    </div>
  )
}

export default tourismecontinu

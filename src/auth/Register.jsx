import React from 'react'
import './Login.css';
function Login() {
  return (
    <>
        <header className='header'>
            <div className='container'>
                <div className='header-content'>
                    <img src="./src/assets/logo.jpg" alt="" />
                    <ul className='barre-navigation'>
                        <li>
                            <img src="./src/assets/logo senegal.png" alt="" />
                            
                        </li>
                        <li>
                            <img src="./src/assets/point d'interrogation.jpg" alt="" />
                        </li>
                    </ul>
                </div>
            </div>
        </header><br></br>
        <div className='blog-formulaire'>
            <div className='container'>
                <img src="./src/assets/image login.jpg" alt="" className='image-login'/>
                <form action="formulaires1" className='formulaires1'><br></br>
                    <h2>Register</h2>
                    <div className='form'>
                    <div className='champp'>
                        <div className="name">
                            <label htmlFor="">First name</label><br />
                            <input type="text" name='First name' placeholder='easyset24'/>
                            </div>
                            <div className="name">
                            <label htmlFor="">Last name</label >
                            <input type="text" name='Tast name' placeholder='easyset24' />
                            </div>
                        </div><br></br>
                        <div className='champ'>
                            <label htmlFor="">Email</label> <br />
                            <input type="text" name='email' placeholder='easyset24@gmail.com' />
                        </div><br></br>
                        <div className='champ'>
                            <label htmlFor="">Password</label> <br />
                            <input type="text" name='email' placeholder='.........' />
                        </div><br></br>
                        <div className='champ'>
                            <label htmlFor="">Confirm Password</label> <br />
                            <input type="text" name='email' placeholder='.........' />
                        </div><br></br>
                        <div className='champs-texte'>
                            <div className='champs'>
                                <input type="checkbox"/>
                                <label htmlFor="">I agree to all the Terms and Privacy Policies</label> <br />
                            </div>
                        </div><br></br>
                        <button name='Reister Now' className='Reister Now'>Reister Now</button><br></br>
                        <br></br>
                        <div className='champs-texte1'>
                            <div className='champs'>
                                <label htmlFor="">Already have an account?</label> <br />
                            </div>
                            <div className='champs3'>
                            <label htmlFor=""> Login</label>
                           </div>
                        </div>
                        <p className='texte'>Or</p>
                        <ul className='reseaux-sociaux-login' >
                            <li>
                                <a href=""><img src="./src/assets/facebook.jpg" alt="" /></a>
                            </li>
                            <li>
                                <a href=""><img src="./src/assets/apple.jpg" alt="" /></a>
                            </li>
                            <li>
                                <a href=""><img src="./src/assets/google.jpg" alt="" /></a>
                            </li>
                        </ul>
                    </div>
                </form>
            </div>
        </div><br></br>
    </>
  )
}
export default Login

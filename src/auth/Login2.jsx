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
                <form action="formulaires" className='formulaires'><br></br>
                    <h2>Login</h2>
                    <p>Login to access yourEasyset24  account</p>
                    <div className='form'>
                        <div className='champ'>
                            <label htmlFor="">Email</label> <br />
                            <input type="text" name='email' placeholder='easyset24@gmail.com' />
                        </div><br></br>
                        <div className='incorrect'>
                        <div className='champ'>
                            <label htmlFor="">Password</label> <br />
                            <input type="text" name='email' placeholder='.........' /> 
                            <p>The password is incorrect</p>
                        </div>
                        </div><br></br>
                        <div className='champs-texte'>
                            <div className='champs'>
                                <input type="checkbox"/>
                                <label htmlFor="">Remember me ?</label> <br />
                            </div>
                            <div className='champs1'>
                            <label htmlFor="">Forgot Password?</label>
                           </div>
                        </div><br></br>
                        <button name='login' className='login'>Login</button><br></br>
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
                        </ul><br></br>
                        <div className='champs-texte1'>
                            <div className='champs'>
                                <label htmlFor="">"Don't have an account in EasySet24 yet?</label> <br />
                            </div>
                            <div className='champs2'>
                            <label htmlFor=""> Register !</label>
                           </div>
                        </div>
                    </div>
                    
                </form>
            </div>
        </div>
    </>
    
  )
}

export default Login

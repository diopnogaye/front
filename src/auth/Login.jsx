import React, { useState } from 'react'
import './Login.css';
import { useNavigate } from 'react-router-dom';
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const location = useLocation(); // Utilisé pour récupérer l'état de redirection

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null); // Réinitialiser les erreurs
    
        try {
            const response = await axios.post('http://localhost:8000/api/login', {
                email,
                password,
            });
    
            const { user, token } = response.data;
    
            if (!token) {
                setError("Token non reçu. Veuillez vérifier le backend.");
                return;
            }
    
            // Stocke le rôle et le token de l'utilisateur dans le stockage local
            localStorage.setItem('user', JSON.stringify(response.data.user));
            
            localStorage.setItem('token', token);
             navigate('/');
            
        } catch (error) {
            if (error.response && error.response.data) {
                setError(error.response.data.error || 'Une erreur est survenue.');
            } else {
                setError('Erreur réseau. Veuillez réessayer.');
            }
        }
    };
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
                <form action="formulaires" className='formulaires' onSubmit={handleSubmit}><br></br>
                    <h2>Login</h2>
                    <p>Login to access yourEasyset24  account</p>
                    <div className='form'>
                        <div className='champ'>
                            <label htmlFor="">Email</label> <br />
                            <input type="text" name='email' placeholder='easyset24@gmail.com' value={email} onChange={(e)=> setEmail(e.target.value)} />
                        </div><br></br>
                        <div className='champ'>
                            <label htmlFor="">Password</label> <br />
                            <input type="text" name='password' placeholder='.........' value={password} onChange={(e)=> setPassword(e.target.value)}/>
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
                        <button name='login' className='login' type='submit'>se connecter</button><br></br>
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

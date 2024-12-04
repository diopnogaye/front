import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();  // Initialise le hook de navigation

    const handleSubmit = (e) => {
        e.preventDefault();  // Empêche la soumission par défaut du formulaire
        setError(null);  // Réinitialiser les erreurs
    
        // Simuler une connexion réussie
        if (email && password) {
            // Sauvegarder un faux utilisateur dans localStorage si nécessaire
            localStorage.setItem('user', JSON.stringify({ email }));
            localStorage.setItem('token', 'fake-jwt-token');  // Simuler un token
            
            // Rediriger l'utilisateur vers la page d'accueil
            navigate('/');  // Redirige vers l'accueil après la soumission
        } else {
            setError("Veuillez remplir tous les champs.");
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
            </header>
            <br />
            <div className='blog-formulaire'>
                <div className='container'>
                    <img src="./src/assets/image login.jpg" alt="" className='image-login'/>
                    <form action="formulaires" className='formulaires' onSubmit={handleSubmit}>
                        <br />
                        <h2>Login</h2>
                        <p>Login to access your Easyset24 account</p>
                        <div className='form'>
                            <div className='champ'>
                                <label htmlFor="">Email</label> <br />
                                <input 
                                    type="text" 
                                    name='email' 
                                    placeholder='easyset24@gmail.com' 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                />
                            </div>
                            <br />
                            <div className='champ'>
                                <label htmlFor="">Password</label> <br />
                                <input 
                                    type="password" 
                                    name='password' 
                                    placeholder='.........' 
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)} 
                                />
                            </div>
                            <br />
                            <div className='champs-texte'>
                                <div className='champs'>
                                    <input type="checkbox" />
                                    <label htmlFor="">Remember me?</label> <br />
                                </div>
                                <div className='champs1'>
                                    <label htmlFor="">Forgot Password?</label>
                                </div>
                            </div>
                            <br />
                            <button
                                name="login"
                                className="login"
                                type="submit" // On soumet le formulaire ici
                            >
                                Se connecter
                            </button>
                            <br />
                            {error && <p style={{ color: 'red' }}>{error}</p>}
                            <p className='texte'>Or</p>
                            <ul className='reseaux-sociaux-login'>
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
                            <br />
                            <div className='champs-texte1'>
                                <div className='champs'>
                                    <label htmlFor="">"Don't have an account in EasySet24 yet?</label> <br />
                                </div>
                                <div className='champs2'>
                                    <label htmlFor=""> Register!</label>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;

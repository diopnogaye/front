import { useNavigate } from 'react-router-dom'; // Importer useNavigate
import { useState } from 'react';
import axios from 'axios';
function Login() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
    const navigate = useNavigate(); // Déclarer navigate

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (password !== passwordConfirmation) {
            setErrorMessage("Les mots de passe ne correspondent pas");
            return;
        }
    
        const data = { 
            name, 
            email, 
            password, 
            password_confirmation: passwordConfirmation, 
            
        };
    
        console.log(data); // Debug : Affiche les données envoyées au backend
    
        setIsLoading(true);
        setErrorMessage('');
    
        axios.post('http://127.0.0.1:8000/api/register', data, {
            headers: {
                'Accept': 'application/json',
            },
        })
            .then(response => {
                console.log('Enregistrement réussi', response);
            })
            .catch(error => {
                console.error('Erreur lors de l\'enregistrement', error.response);
            });
        }        


    return (
        <div>
            <header className='header'>
                <div className='container'>
                    <div className='header-content'>
                        <img src="./src/assets/logo.jpg" alt="Logo" />
                        <ul className='barre-navigation'>
                            <li>
                                <img src="./src/assets/logo senegal.png" alt="Senegal Logo" />
                            </li>
                            <li>
                                <img src="./src/assets/point d'interrogation.jpg" alt="Help" />
                            </li>
                        </ul>
                    </div>
                </div>
            </header><br />
            <div className='blog-formulaire'>
                <div className='container'>
                    <img src="./src/assets/image login.jpg" alt="Login" className='image-login' />
                    <form onSubmit={handleSubmit} className='formulaires1'>
    <h2>Register</h2>
    <div className='form'>
        <div className='champp'>
            <div className="name">
                <label htmlFor="name">Nom complet</label><br />
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="easyset24" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                />
            </div>
        </div><br />

        <div className='champ'>
            <label htmlFor="email">Email</label><br />
            <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="easyset24@gmail.com" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
            />
        </div><br />

        <div className='champ'>
            <label htmlFor="password">Password</label><br />
            <input 
                type="password" 
                id="password" 
                name="password" 
                placeholder="........." 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
        </div><br />

        <div className='champ'>
            <label htmlFor="passwordConfirmation">Confirm Password</label><br />
            <input 
                type="password" 
                id="passwordConfirmation" 
                name="passwordConfirmation" 
                placeholder="........." 
                value={passwordConfirmation} 
                onChange={(e) => setPasswordConfirmation(e.target.value)} 
            />
        </div><br />

        <div className='champs-texte'>
            <div className='champs'>
                <input type="checkbox" id="terms" />
                <label htmlFor="terms">I agree to all the Terms and Privacy Policies</label><br />
            </div>
        </div><br />

        
        <button type="submit" className='register-btn'>
            {isLoading ? "Loading..." : "Register Now"}
        </button>
    </div>
</form>

                </div>
            </div>
        </div>
    )
}

export default Login;

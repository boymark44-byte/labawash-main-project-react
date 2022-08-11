import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Login = ({ setUser }) => {

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const navigate = useNavigate()
    
    const loginUser = async (email, password) => {
        await fetch('http://labawash-main.com.ph/users/auth', {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        .then( (response) => response.json())
        .then( () => {
            setEmail('')
            setPassword('')
        })
        .catch( (err) => {
            console.log(err.message)
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if (!email || !password) return
        loginUser( { email: email, password: password })

        navigate('/dashboard')
    }


    return (
    <div className="account-page">
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <img src="https://estaticos.qdq.com/swdata/cache/5e/38/5e38279a096ecea015e524b9018675b3.jpg" style={{height: 550, width: 800}}/>
                </div>

                <div className="col-2">
                    <div className="form-container-login">
                        <div className="form-btn">
                            <span onClick={window['login']}>Login</span>
                            <hr id="Indicator" />
                        </div>

                        <form id="LoginForm"  onSubmit={handleSubmit} style={{textAlign: 'left'}}>
                            
                            <label for='email'>Email:</label>
                            <input type="text" placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)} name="email"/>

                            <label for='Password'>Password:</label>
                            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} name="password"/>

                            <button type="submit"  className="btn" style={{marginBottom: 20}}>Login</button>
                            
                            
                            
                        </form>
                        <Link to='#'>Forgot Password?</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Login
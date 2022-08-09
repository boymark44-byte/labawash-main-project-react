import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Login = () => {

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

                        <form id="LoginForm" style={{textAlign: 'left'}}>
                            
                            <label for='email'>Email:</label>
                            <input type="text" placeholder="Username" name="email"/>

                            <label for='Password'>Password:</label>
                            <input type="password" placeholder="Password" name="password"/>

                            <button type="submit"  className="btn" style={{marginBottom: 20}}>Login</button>
                            
                            {/* onClick={} */}
                            
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
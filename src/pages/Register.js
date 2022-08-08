

const Register = () => {
  return (
    <div className="account-page">
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <img src="https://estaticos.qdq.com/swdata/cache/5e/38/5e38279a096ecea015e524b9018675b3.jpg" style={{height: 550, width: 800}}/>
                </div>

                <div className="col-2">
                    <div className="form-container-register"> 
                        <div className="form-btn" style={{textAlign: "center"}}>
                            <span onClick={window['register']}>Register</span>
                            <hr id="Indicator" />
                        </div>

                        <form id="RegForm" style={{textAlign: 'left'}}>
                            <label for='username' >Username:</label>
                            <input type="text" placeholder="Username" name="username"/>

                            <label for='name'>Name:</label>
                            <input type="text" placeholder="Name" name="name"/>

                            <label for='email'>Email:</label>
                            <input type="email" placeholder="Email" name="email"/>

                            <label for='password1'>Password:</label>
                            <input type="password" placeholder="Pasword" name="password1"/>
                            
                            <label for='password2'>Confirm Password:</label>
                            <input type="password" placeholder="Confirm Pasword" name="password2"/>
                            
                            <button type="submit" className="btn">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register
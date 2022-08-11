import { useState} from 'react'


const Register = () => {
    const [ username, setUsername ] = useState("")
    const [ name, setName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ password_confirmation, setPasswordConfirmation ] = useState("")

    const addUsers = async (username, name, email, password, password_confirmation) => {
        await fetch('http://labawash-main.com.ph/api/users', {
            method: 'POST',
            body: JSON.stringify({
                username: username,
                name: name,
                email: email,
                password: password,
                password_confirmation: password_confirmation 
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        .then( (response) => response.json())
        .then( () => {
            setUsername('')
            setName('')
            setEmail('')
            setPassword('')
            setPasswordConfirmation('')
        })
        .catch((err) => {
            console.log(err.message)
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addUsers(username, name, email, password, password_confirmation)
        console.log(addUsers)
    }

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

                        <form id="RegForm" onSubmit={handleSubmit} style={{textAlign: 'left'}}>
                            <label for='username' >Username:</label>
                            <input type="text" placeholder="Username" value={username}  onChange={(e) => setUsername(e.target.value)} name="username"/>

                            <label for='name'>Name:</label>
                            <input type="text" placeholder="Name" value={name}  onChange={(e) => setName(e.target.value)} name="name"/>

                            <label for='email'>Email:</label>
                            <input type="email" placeholder="Email" value={email}  onChange={(e) => setEmail(e.target.value)} name="email"/>

                            <label for='password'>Password:</label>
                            <input type="password" placeholder="Pasword" value={password}  onChange={(e) => setPassword(e.target.value)} name="password1"/>
                            
                            <label for='password_confirmation'>Confirm Password:</label>
                            <input type="password" placeholder="Confirm Pasword" value={password_confirmation}  onChange={(e) => setPasswordConfirmation(e.target.value)} name="password2"/>
                            
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
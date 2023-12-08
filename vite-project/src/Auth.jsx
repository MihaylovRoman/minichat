import axios from 'axios'

const Auth = (props) => {
    const onSubmit = (e) => {
        e.preventDefault()
        const {value} = e.target[0]
        axios.post('http://localhost:5000/authenticate',
        {username:value})
        .then(r => props.onAuth({ ...r.data, secret:value}))
        .catch(e=> console.log('error', e))
        
    }

    return(
        <div className="background">
            <form onSubmit={onSubmit} className="form-card">
                <div className="form-title">Welcome!</div>
                <div className="form-subtitle">Напиши свое имя чтобы начать</div>
                <div className="auth">
                    <div className="auth-label">Username</div>
                    <input className="auth-input" name="username"></input>
                    <button className="auth-button" type="submit">/././</button>
                </div>
            </form>
        </div>
    )
}
export default Auth
import TSU_Logo from '../img/tsu_logo.svg'
import styles from './login.css'

export default function Login(){

    console.log(styles)

    return(
        <div className = "wrapper">
            <div className = "login-container">
                <div className = "logo-container">
                    <h1>FaceElook</h1>
                    <img alt="logo" src={TSU_Logo}/>
                </div>
                <div className = "login-btn-container"></div>
            </div>
        </div>
    )
}
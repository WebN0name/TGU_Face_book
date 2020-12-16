import TSU_Logo from '../img/tsu_logo.svg'


export default function Login(){
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
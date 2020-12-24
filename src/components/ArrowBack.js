import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'



export default function ArrowBack({link}){

    return(
        
        <div className = "arrowBack">
            <Link to={link}><FontAwesomeIcon icon={faChevronLeft} style = {{paddingTop: '17px', paddingLeft: '32px'}}/></Link>
        </div>
    )
}
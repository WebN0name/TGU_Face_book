import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

export default function ArrowBack(){
    return(
        <div className = "arrowBack">
            <FontAwesomeIcon icon={faChevronLeft} style = {{paddingTop: '17px', paddingLeft: '32px'}}/>
        </div>
    )
}
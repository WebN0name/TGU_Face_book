import ArrowBack from '../components/ArrowBack'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faChevronDown } from '@fortawesome/free-solid-svg-icons'

function PasportForm(){
    return(
        <div className="PasportFormContainer">
        <ArrowBack/>
            <div className="userFormContent">
                <div className="HeadInfo">
                    <div>
                        <h1>Данные <br /> паспорта</h1>
                    </div>
                    <div>
                        <p>Шаг 2 из 2</p>
                    </div>
                    
                </div>
                
                <div className="userFormInputs">
                    <div className="userFormInput">
                        <div className="InputTextBlock">
                            <input type="text" className="InputText" placeholder="Серия*"/>
                        </div>
                    </div>
                    <div className="userFormInput">
                        <div className="InputTextBlock">
                            <input type="text" className="InputText" placeholder="Номер"/>
                        </div>
                    </div>
                    <div className="userFormInput">
                        <div className="InputTextBlock">
                            <input type="text" className="InputText" placeholder="Кем выдан"/>
                        </div>
                    </div>
                    <div className="userFormInput">
                        <div className="InputTextBlock">
                            <input type="text" className="InputText" placeholder="Дата выдачи"/>
                        </div>
                    </div>
                    <div className="userFormInput">
                        <div className="InputTextBlock" >
                            <input type="text" className="InputText" placeholder="Дата выдачи*"/>
                        </div>
                    </div>
                    <div className="userFormInput">
                        <div className="InputTextBlock">
                            <input type="text" className="InputText" placeholder="Адрес прописки*"/>
                        </div>
                    </div>
                    <div className="nextBtn">
                        <p>Далее</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PasportForm;
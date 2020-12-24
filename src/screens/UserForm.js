import ArrowBack from '../components/ArrowBack'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function UserForm() {
    return (
        <div className="userFormContainer">
            <ArrowBack link={"/PasportForm"} />
            <div className="userFormContent">
                <h1>Заполните <br /> анкету</h1>
                <p>Шаг 1 из 2</p>
                <div className="userFormInputs">
                    <div className="userFormInput">
                        <div className="InputTextBlock">
                            <p className="desc">Фамилия*</p>
                            <p className="info">Иванов</p>
                        </div>
                        <div className="check">
                            <FontAwesomeIcon icon={faCheck} style={{ fontSize: '10px', color: 'white' }} />
                        </div>
                    </div>
                    <div className="userFormInput">
                        <div className="InputTextBlock">
                            <p className="desc">Имя*</p>
                            <p className="info">Иван</p>
                        </div>
                        <div className="check">
                            <FontAwesomeIcon icon={faCheck} style={{ fontSize: '10px', color: 'white' }} />
                        </div>
                    </div>
                    <div className="userFormInput">
                        <div className="InputTextBlock">
                            <p className="desc">Отчество*</p>
                            <p className="info">Иванович</p>
                        </div>
                        <div className="check">
                            <FontAwesomeIcon icon={faCheck} style={{ fontSize: '10px', color: 'white' }} />
                        </div>
                    </div>
                    <div className="userFormInput">
                        <div className="InputTextBlock">
                            <p className="desc">Дата рождения*</p>
                            <p className="info">16.04.1990</p>
                        </div>
                        <div className="check">
                            <FontAwesomeIcon icon={faCheck} style={{ fontSize: '10px', color: 'white' }} />
                        </div>
                    </div>
                    <div className="userFormInput">
                        <div className="InputTextBlock" style={{ justifyContent: 'center' }}>
                            <p className="info">E-mail*</p>
                        </div>
                    </div>
                    <div className="userFormInput">
                        <div className="InputTextBlock">
                            <p className="desc">Статус*</p>
                            <p className="info">Гость</p>
                        </div>
                        <div className="check" style = {{backgroundColor: '#DBDBDB'}}>
                            <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: '10px', color: '#2C2C2C' }} />
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
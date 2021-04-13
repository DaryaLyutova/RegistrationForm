import React from 'react';
import './UserEmail.css';
import cn from 'classnames';
import Button from '../Button/Button'
// import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function UserEmail({ onSubmite, ...props }) {

    // const currentUser = React.useContext(CurrentUserContext);
    //значения инпутов
    const [inputValue, setInputValue] = React.useState({
        email: ''
    });
    // наличие ошибки при вводе данных
    const [inputError, setInputError] = React.useState({
        email: true
    });
    //состояние посещения инпута
    const [inputDirty, setInputDirty] = React.useState({
        email: false
    });
    //валидность формы
    const [isValid, setIsValid] = React.useState(true);

    function blurHandler(e) {
        return setInputDirty({ ...inputDirty, email: true })
    };

    // проверка валидность всей формы
    React.useEffect(() => {
        if (
            !inputError.email
        ) {
            setIsValid(false)
        } else {
            setIsValid(true)
        }
    }, [inputError]);

    //обработчик инпута email
    function emailHandler(e) {
        setInputValue({ ...inputValue, email: e.target.value })
        const reg = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
        setInputError({ ...inputError, email: !reg.test(e.target.value) })
    };

    function handlerSubmit(e) {
        e.preventDefault();
        onSubmite(inputValue);
    };

    return (
        <section className="user-email">
            <h1 className="user-email__title">Введите адрес электронной почты</h1>
            <form className="user-email__form" onSubmit={handlerSubmit}>

                <label className="user-email__label">Email
            <input
                        className="user-email__input"
                        type="email"
                        onBlur={(e) => {
                            blurHandler(e)
                        }}
                        style={{ color: inputError.email & inputDirty.email ? 'red' : 'black' }}
                        onChange={(e) => {
                            emailHandler(e)
                        }}
                        name="email"
                        value={inputValue.email}
                        required
                    />
                </label>
                <span
                    className={cn('user-email__error', { 'user-email__error_visible': inputError.email & inputDirty.email })}>
                    Поле Email заполнено некорректно
                </span>
                <div className="user-email__line" />
                < Button isValid={isValid} messege={props.messege} />
            </form>
        </section>
    )
}

export default UserEmail;
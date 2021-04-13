import React from 'react';
import './UserPassword.css';
import cn from 'classnames';
import Button from '../Button/Button'
// import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function UserPassword({ onSubmite, ...props }) {

    // const currentUser = React.useContext(CurrentUserContext);
    //значения инпутов
    const [inputValue, setInputValue] = React.useState({
        password: '',
        passwordRepeat: '',
    });
    // наличие ошибки при вводе данных
    const [inputError, setInputError] = React.useState({
        password: true,
        passwordRepeat: true,
    });
    //состояние посещения инпута
    const [inputDirty, setInputDirty] = React.useState({
        password: false,
        passwordRepeat: false,
    });
    //валидность формы
    const [isValid, setIsValid] = React.useState(true);

    function blurHandler(e) {
        switch (e.target.name) {
            case 'password':
                return setInputDirty({ ...inputDirty, password: true })
            case 'passwordRepeat':
                return setInputDirty({ ...inputDirty, passwordRepeat: true })
            default:
                console.log('Не соответствует ни одному из вариантов')
        }
    };
    // проверка валидность всей формы
    React.useEffect(() => {
        if (
            !inputError.password &&
            !inputError.passwordRepeat) {
            setIsValid(false)
        } else {
            setIsValid(true)
        }
    }, [inputError]);

    //обработчик инпута password
    function passwordHandler(e) {
        setInputValue({ ...inputValue, password: e.target.value })
        setInputError({ ...inputError, password: e.target.value.length < 6 })
    };

    //обработчик инпута passwordRepeat
    function passwordRepeatHandler(e) {
        setInputValue({ ...inputValue, passwordRepeat: e.target.value });
        setInputError({ ...inputError, passwordRepeat: e.target.value.length < 6 })
    };

    function handlerSubmit(e) {
        e.preventDefault();
        if (inputValue.password === inputValue.passwordRepeat) {
            onSubmite(inputValue);
        } else {
            setInputError({ ...inputError, passwordRepeat: true})
        }
    };

    return (
        <section className="password">
            <h1 className="password__title">Введите пароль</h1>
            <form className="password__form" onSubmit={handlerSubmit}>
                <label className="password__label">Пароль
            <input
                        className="password__input password__input_error"
                        type="password"
                        minLength="6"
                        onBlur={(e) => {
                            blurHandler(e)
                        }}
                        style={{ color: inputError.password & inputDirty.password ? 'red' : 'black' }}
                        onChange={(e) => {
                            passwordHandler(e)
                        }}
                        name="password"
                        value={inputValue.password}
                        required
                    />
                </label>
                <span
                    className={cn('password__error', { 'password__error_visible': inputError.password & inputDirty.password })}>
                        Пароль ненадежен
                </span>
                <div className="password__line" />
                <label className="password__label">Повторите пароль
            <input
                        className="password__input"
                        type="password"
                        onBlur={(e) => {
                            blurHandler(e)
                        }}
                        style={{ color: inputError.password & inputDirty.password ? 'red' : 'black' }}
                        onChange={(e) => {
                            passwordRepeatHandler(e)
                        }}
                        name="passwordRepeat"
                        value={inputValue.passwordRepeat}
                        required
                    />
                </label>
                <span
                    className={cn('password__error', { 'password__error_visible': inputError.passwordRepeat & inputDirty.passwordRepeat })}>
                    Пароли не совпадают
                    </span>
                < Button isValid={isValid} messege={props.messege} />
            </form>
        </section>
    )
}

export default UserPassword;
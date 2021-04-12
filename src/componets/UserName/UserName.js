import React from 'react';
import './UserName.css';
import cn from 'classnames';
import Button from '../Button/Button'
// import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function UserName({ onSubmite, ...props }) {

    // const currentUser = React.useContext(CurrentUserContext);
    //значения инпутов
    const [inputValue, setInputValue] = React.useState({
        name: '',
        date: '',
    });
    // наличие ошибки при вводе данных
    const [inputError, setInputError] = React.useState({
        name: true,
        date: true,
    });
    //состояние посещения инпута
    const [inputDirty, setInputDirty] = React.useState({
        name: false,
        date: false,
    });
    //валидность формы
    const [isValid, setIsValid] = React.useState(true);

    function blurHandler(e) {
        switch (e.target.name) {
            case 'name':
                return setInputDirty({ ...inputDirty, name: true })
            case 'date':
                return setInputDirty({ ...inputDirty, date: true })
            default:
                console.log('Не соответствует ни одному из вариантов')
        }
    };
    // проверка валидность всей формы
    React.useEffect(() => {
        if (
            !inputError.name &&
            !inputError.date
        ) {
            setIsValid(false)
        } else {
            setIsValid(true)
        }
    }, [inputError]);

    //обработчик инпута имени
    function nameHandler(e) {
        setInputValue({ ...inputValue, name: e.target.value })
        setInputError({ ...inputError, name: e.target.value.length < 4 })
    };

    //обработчик инпута date
    function dateHandler(e) {
        setInputValue({ ...inputValue, date: e.target.value });
        setInputError({ ...inputError, date: false })
    };

    function handlerSubmit(e) {
        e.preventDefault();
        props.nextStep();
        onSubmite(inputValue);
    };

    return (
        <section className="user-name">
            <h1 className="user-name__title">Введите данные для регистации</h1>
            <form className="user-name__form" onSubmit={handlerSubmit}>
                <label className="user-name__label">Имя Фамилия Отчество
            <input
                        className="user-name__input user-name__input_error"
                        type="text"
                        minLength="3"
                        onBlur={(e) => {
                            blurHandler(e)
                        }}
                        style={{ color: inputError.name & inputDirty.name ? 'red' : 'black' }}
                        onChange={(e) => {
                            nameHandler(e)
                        }}
                        name="name"
                        value={inputValue.name}
                        required
                    />
                </label>
                <span
                    className={cn('user-name__error', { 'user-name__error_visible': inputError.name & inputDirty.name })}>
                    Имя заполнено некорректно
                </span>
                <div className="user-name__line" />
                <label className="user-name__label">Дата рождения
            <input
                        className="user-name__input"
                        type="date"
                        onBlur={(e) => {
                            blurHandler(e)
                        }}
                        style={{ color: inputError.date & inputDirty.date ? 'red' : 'black' }}
                        onChange={(e) => {
                            dateHandler(e)
                        }}
                        name="date"
                        value={inputValue.date}
                        required
                    />
                </label>
                <span
                    className={cn('user-name__error', { 'user-name__error_visible': inputError.date & inputDirty.date })}>
                    Проверьте дату рождения
                    </span>
                < Button isValid={isValid} messege={props.messege} />
            </form>
        </section>
    )
}

export default UserName;
import React from 'react';
import './Success.css';
import okImage from '../../images/Union.svg';

function Success() {
    console.log('OK')
    return (
        <div className="success" >
            <div className="success__container">
                <h2 className="success__title">Поздравляем, { }, вы успешно загеристрированы!</h2>
                <img src={okImage} className="success__image" alt="Знак подсказки" />
                <div className="success__block">
                    <p className="success__subtitle">Ваше имя: { }</p>
                    <p className="success__subtitle">Ваша дата рождения: { }</p>
                    <p className="success__subtitle">Ваш email: { }</p>
                </div>
            </div>
        </div>
    )
}
export default Success;
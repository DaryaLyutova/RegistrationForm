import React from 'react';
import './Success.css';
import okImage from '../../images/Union.svg';
import { observer } from 'mobx-react';
import user from '../../store/user';

const Success = observer(() => {

    return (
        <div className="success" >
            <div className="success__container">
                <h2 className="success__title">Поздравляем, {user.user.name}, вы успешно загеристрированы!</h2>
                <img src={okImage} className="success__image" alt="Знак подсказки" />
                <div className="success__block">
                    <p className="success__subtitle">Ваше имя: {user.user.name}</p>
                    <p className="success__subtitle">Ваша дата рождения: {user.user.birthDate}</p>
                    <p className="success__subtitle">Ваш email: {user.user.email}</p>
                </div>
            </div>
        </div>
    )
});
export default Success;
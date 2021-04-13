import React from 'react';
import UserName from '../UserName/UserName';
import UserEmail from '../UserEmail/UserEmail';
import UserPassword from '../UserPassword/UserPassword';
import Success from '../Success/Success';
import { observer } from 'mobx-react';
import user from '../../store/user';

const Registration = observer(() => {

    const [step, setStep] = React.useState(1);

    const nextStep = () => {
        setStep(step + 1);
    };

    const handleNameSubmite = (data) => {
        nextStep();
        user.addUserName(data);
    };
    const handleEmailSubmite = (data) => {
        nextStep();
        user.addUserEmail(data);
    };
    const handlePasswordSubmite = (data) => {
        nextStep();
        user.addUserPassword(data);
    };


    switch (step) {
        case 1:
            return (
                <UserName
                    onSubmite={handleNameSubmite}
                />
            );
        case 2:
            return (
                <UserEmail
                    onSubmite={handleEmailSubmite}
                />
            );
        case 3:
            return (
                <UserPassword
                    onSubmite={handlePasswordSubmite}
                />
            );
        case 4:
            return (
                <Success />
            );
        default:
            (console.log('Error'))
    }
});

export default Registration;
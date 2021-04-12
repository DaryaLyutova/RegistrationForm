import React from 'react';
import UserName from '../UserName/UserName';
import UserEmail from '../UserEmail/UserEmail';
import UserPassword from '../UserPassword/UserPassword';
import Success from '../Success/Success';
const Registration = () => {

    const [state, setState] = React.useState({
        step: 1,
        name: '',
        birthDate: '',
        email: '',
        password: ''
    })

    const nextStep = () => {
        setState({
            step: state.step + 1
        });
    };

    const handleNameSubmite = (data) => e => {
        setState({
            name: data.name,
            birthDate: data.date
        });
    };
    const handleEmailSubmite = (data) => e => {
        setState({
            email: data.email,
        });
    };
    const handlePasswordSubmite = (data) => e => {
        setState({
            password: data.password, ...state
        });
    };
    switch (state.step) {
        case 1:
            return (
                <UserName
                    nextStep={nextStep}
                    onSubmite={handleNameSubmite}
                />
            );
        case 2:
            return (
                <UserEmail
                    nextStep={nextStep}
                    onSubmite={handleEmailSubmite}
                />
            );
        case 3:
            return (
                <UserPassword
                    nextStep={nextStep}
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
};

export default Registration;
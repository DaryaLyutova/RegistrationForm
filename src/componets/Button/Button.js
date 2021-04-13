import React from 'react';
import './Button.css';
import cn from 'classnames';

function Button({ isValid, ...props }) {

    return (
        <>
            <button
                type="submit"
                className={cn('button', { 'button__disabled': isValid })}
                disabled={isValid}>
                Далее
            </button>
        </>
    )
}

export default Button;
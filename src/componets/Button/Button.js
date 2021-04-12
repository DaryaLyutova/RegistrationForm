import React from 'react';
import './Button.css';
import cn from 'classnames';

function Button({ isValid, ...props }) {

    return (
        <>
            {/* <span className="user-name__error user-name__error_visible"
            >{props.messege}</span> */}
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
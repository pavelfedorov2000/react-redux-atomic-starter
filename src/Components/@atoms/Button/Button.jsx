import React from 'react';
import classNames from 'classnames';

const Button = ({ onClick, className, text, bg, icon }) => {
    return (
        <button
            onClick={onClick}
            className={classNames('btn', className, {
                'button--style_bg-accent': bg === 'accent',
            })}>
            <span className="btn__text">{text}</span>
        </button>
    );
}

export default Button;
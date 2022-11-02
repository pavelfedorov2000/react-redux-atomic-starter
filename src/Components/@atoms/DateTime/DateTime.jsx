import React from 'react';

function DateTime({ date, className }) {
    return (
        <time className="datetime" dateTime={date.split('.').reverse().join('-')}>{date}</time>
    );
}

export default DateTime;
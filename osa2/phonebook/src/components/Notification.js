import React from 'react';

const Notification = (props) => {
    const { message, errorMessage } = props

    if (message === null && errorMessage === null) {
        return null;
    }
    else if (message !== null)
        return (
            <div className="message">
                {message}
            </div>
        )
    else if (errorMessage !== null) {
        return (
            <div className="error">
                {errorMessage}
            </div>
        )
    }
}

export default Notification
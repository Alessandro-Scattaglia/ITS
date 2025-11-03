import React from 'react';

export default function Button(prop) {
    return (
        <>
            <button onClick={prop.onClick}>
                {prop.title}
            </button>
        </>
    );
}


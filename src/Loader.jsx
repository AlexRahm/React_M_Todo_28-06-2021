import { commentRegex } from 'convert-source-map';
import React from 'react';

function Loader() {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                margin: '.5rem',
            }}
        >
            <div class='lds-roller'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default Loader;

import React from 'react';

function Parts(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <img src={props.imgURL} alt='partImage'/>
            <h3>{props.price}</h3>
            <h3>{props.website}</h3>
        </div>
    );
}

export default Parts;
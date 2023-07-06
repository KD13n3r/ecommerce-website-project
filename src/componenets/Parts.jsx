import React from 'react';

function Parts(props) {
    return (
        <div className='container'>
            <div className='row'>
            <div className='col-md-4'>
            <h2>{props.name}</h2>
            <img className="w-25 p-3" src={props.imgURL} alt='partImage'/>
            <h3>{props.price}</h3>
            <h3>{props.website}</h3>
            </div>
            </div>
        </div>
    );
}

export default Parts;
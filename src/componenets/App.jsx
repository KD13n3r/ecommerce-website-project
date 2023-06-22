import React from 'react';
import Parts from './Parts';
import pcParts from '../pcparts';

function createPart(pcPart) {
    return (<Parts 
        key={pcPart.id}
        name={pcPart.name}
        imgURL={pcPart.imgURL}
        price={pcPart.price}
        website={pcPart.website}
    />);
}

function App() {
    return (
        <div>
            <h1>PC Parts</h1>
            {pcParts.map(createPart)}
        </div>
    );
}

export default App;
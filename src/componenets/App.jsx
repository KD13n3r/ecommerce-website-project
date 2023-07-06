import React from 'react';
import Parts from './Parts';
import pcParts from '../pcparts';
import Navbar from './Navbar';

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
            <Navbar/>
            {pcParts.map(createPart)}
        </div>
    );
}

export default App;
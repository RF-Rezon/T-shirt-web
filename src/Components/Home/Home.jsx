import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tshirt = useLoaderData();
    return (
        <div>
            <p>Api call : {tshirt.length}</p>
        </div>
    );
};

export default Home;
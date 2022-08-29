import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home-container'>          
            <Link className='button' to='/battle'>Battle</Link>
        </div>
    );
}

export default Home;

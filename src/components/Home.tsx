import React from 'react';
import { Button } from '@mantine/core';
import './Home.css';
import bg from '../assets/bg.png';

const Home = () => {
    const skills = ['Angular', 'React']
    return (
        <div className='screen' style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover'}}>
        <div className='container'>
            <div className='title'>Product Owner</div>
            <div className='name-container'>
                <div className='name'>Krystian<br></br> Dajewski</div>
                <div className='dot'>.</div>
            </div>
            <div className='skills'>{skills.join(' | ')}</div>
        </div>
        </div>
    );
};

export default Home;
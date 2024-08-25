import { useEffect, useState } from 'react';
import './Home.css';
import bg from '../assets/bg.png';
import { useNavigate } from "react-router-dom";
import { useScrollToEnd } from '../providers/ScrollProvider';
import About from './About';
import { AvailableLanguages } from './LanguageSwitcher';
import { useLanguage } from '../providers/LanguageProvider';

const Home = () => {
    const skills = ['Angular', 'React', 'Swift']
    const { currentLanguage } = useLanguage();
    const navigate = useNavigate();
    const onScrollToEnd = useScrollToEnd();

    const homePageTexts = {
        'en': {
            'title': 'Technical Product Owner',
        },
        'de': {
            'title': 'Technische Produkt Besitzer',
        },
        'pl': {
            'title': 'Techniczny Właściciel Produktu',
        },
    }

    useEffect(() => {
        onScrollToEnd(() => {
          navigate('/about');
        });
      }, [onScrollToEnd]);

    const setTitle = (language: AvailableLanguages['language']): string => {
        return homePageTexts[language].title;
    }

    const languageProps = {
        language: currentLanguage
      }
    return (
        <div className='screen' style={{ backgroundImage: `url(${bg})`}}>
            <div className="mainContainer">
                <div className='container'>
                    <div className='title'>{setTitle(currentLanguage)}</div>
                    <div className='name-container'>
                        <div className='name'>Krystian<br></br> Dajewski</div>
                        <div className='dot'>.</div>
                    </div>
                    <div className='skills'>{skills.join(' | ')}</div>
                </div>
                <About language={currentLanguage}></About>
            </div>
        </div>
    );
};

export default Home;
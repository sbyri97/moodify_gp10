import React from 'react';
import './home.css';
import happy from '../../../public/moodsPics/happy.jpeg'
import energetic from '../../../public/moodsPics/energetic.jpeg'
import romantic from '../../../public/moodsPics/romantic.jpeg'
import serene from '../../../public/moodsPics/serene.jpeg'
import chill from '../../../public/moodsPics/chill.jpeg'
import gloomy from '../../../public/moodsPics/gloomy.jpeg'
import angry from '../../../public/moodsPics/angry.jpeg'
import heartbreak from '../../../public/moodsPics/heartbreak.jpeg'
import productive from '../../../public/moodsPics/productive.jpeg'



function Home(){
    return (
        <div>
        <div className='sidebar'>
            
        </div>
        <div className='homePageMoodCardsMainContainer'>
            <div className='homePageMoodCardsTopRow'>
            <a className='homeCards'>
                <img className='homePageIndividCard' src={happy}/>
                <div className='homeCardImageTextContainerOne'>
                    <h2 className='homeCardImageText'>Happy</h2>
                </div>
            </a>
            <a className='homeCards'>
                <img className='homePageIndividCard' src={energetic}/>
                <div className='homeCardImageTextContainerTwo'>
                    <h2 className='homeCardImageText'>Energetic</h2>
                </div>
            </a>
            <a className='homeCards'>
                <img className='homePageIndividCard' src={romantic}/>
                <div className='homeCardImageTextContainerThree'>
                    <h2 className='homeCardImageText'>Romantic</h2>
                </div>
            </a>
            </div>
            <div className='homePageMoodCardsMiddleRow'>
            <a className='homeCards'>
                <img className='homePageIndividCard' src={serene}/>
                <div className='homeCardImageTextContainerFour'>
                    <h2 className='homeCardImageText'>Serene</h2>
                </div>
            </a>
            <a className='homeCards'>
                <img className='homePageIndividCard' src={chill}/>
                <div className='homeCardImageTextContainerFive'>
                    <h2 className='homeCardImageText'>Chill</h2>
                </div>
            </a>
            <a className='homeCards'>
                <img className='homePageIndividCard' src={gloomy}/>
                <div className='homeCardImageTextContainerSix'>
                    <h2 className='homeCardImageText'>Gloomy</h2>
                </div>
            </a>
            </div>
            <div className='homePageMoodCardsBottomRow'>
            <a className='homeCards'>
                <img className='homePageIndividCard' src={angry}/>
                <div className='homeCardImageTextContainerSeven'>
                    <h2 className='homeCardImageText'>Angry</h2>
                </div>
            </a>
            <a className='homeCards'>
                <img className='homePageIndividCard' src={heartbreak}/>
                <div className='homeCardImageTextContainerEight'>
                    <h2 className='homeCardImageText'>Heartbreak</h2>
                </div>
            </a>
            <a className='homeCards'>
                <img className='homePageIndividCard' src={productive}/>
                <div className='homeCardImageTextContainerOne'>
                    <h2 className='homeCardImageText'>Happy</h2>
                </div>
            </a>
            </div>
        </div>
        </div>
    )
}

export default Home;
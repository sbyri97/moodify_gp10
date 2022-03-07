import React from 'react';
import './home.css';
import SideBar from './Sidebar';
import Moods from './moods'




function Home(){
    return (
        <div>
            <div>
                <SideBar />
            </div>
            <div>
                <Moods />
            </div>
        </div>
    )
}

export default Home;

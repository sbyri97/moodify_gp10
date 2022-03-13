import React from "react";
import { NavLink } from "react-router-dom";
import "./moods.css";

const Moods = () => {

  return (
    <div className="h3Div">
      <p className="whatsYourMood">What's your mood today?</p>
        <div className="homePageMoodCardsMainContainer">
          <NavLink className="homePageMoodCardH" to="/moods/1">
            <div className="homePageMoodCardItem">
              <div className="homePageADiv">
                <img
                  className="homePageCardHappy"
                  alt="happy"
                  src="https://images.unsplash.com/photo-1509909756405-be0199881695?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                />
              </div>
              <p className="homeCardImageText">Happy</p>
            </div>
          </NavLink>
          <NavLink className="homePageMoodCardE" to="/moods/2">
            <div className="homePageMoodCardItem">
              <div className="homePageADiv">
                <img
                  className="homePageCardEnergetic"
                  alt="energetic"
                  src="https://images.unsplash.com/photo-1621903084350-665bbd5b7f37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGVuZXJnZXRpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60"
                />
              </div>
              <p className="homeCardImageText">Energetic</p>
            </div>
          </NavLink>
          <NavLink className="homePageMoodCardR" to="/moods/3">
            <div className="homePageMoodCardItem">
              <div className="homePageADiv">
                <img
                  className="homePageCardRomantic"
                  alt="romantic"
                  src="https://w0.peakpx.com/wallpaper/537/129/HD-wallpaper-purple-love-flower-vase-wonderful-love.jpg"
                />
              </div>
              <p className="homeCardImageText">Romantic</p>
            </div>
          </NavLink>
          <NavLink className="homePageMoodCardS" to="/moods/4">
            <div className="homePageMoodCardItem">
              <div className="homePageADiv">
                <img
                  className="homePageCardSerene"
                  alt="serene"
                  src="https://images.unsplash.com/photo-1587805420704-23004be125a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zmxvd2VycyUyMGZpZWxkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60"
                />
              </div>
              <p className="homeCardImageText">Serene</p>
            </div>
          </NavLink>
          <NavLink className="homePageMoodCardCh" to="/moods/5">
            <div className="homePageMoodCardItem">
              <div className="homePageADiv">
                <img
                  className="homePageCardChill"
                  alt="chill"
                  src="https://images.unsplash.com/photo-1499810631641-541e76d678a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJlbGF4fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                />
              </div>
              <p className="homeCardImageText">Chill</p>
            </div>
          </NavLink>
          <NavLink className="homePageMoodCardG" to="/moods/6">
            <div className="homePageMoodCardItem">
              <div className="homePageADiv">
                <img
                  className="homePageCardGloomy"
                  alt="gloomy"
                  src="https://media.istockphoto.com/photos/majestic-storm-clouds-picture-id516351793?b=1&k=20&m=516351793&s=170667a&w=0&h=dNSelfEsetPTQObY4yvcRiGHtnehwwUFTTJbhMfx-S0="
                />
              </div>
              <p className="homeCardImageText">Gloomy</p>
            </div>
          </NavLink>
          <NavLink className="homePageMoodCardA" to="/moods/7">
            <div className="homePageMoodCardItem">
              <div className="homePageADiv">
                <img
                  className="homePageCardAngry"
                  alt="angry"
                  src="https://t3.ftcdn.net/jpg/00/61/36/50/360_F_61365093_Q0egjt7vzb6mkuNbcO1JMSrud4z2Vuhm.jpg"
                />
              </div>
              <p className="homeCardImageText">Angry</p>
            </div>
          </NavLink>
          <NavLink className="homePageMoodCardHeart" to="/moods/8">
            <div className="homePageMoodCardItem">
              <div className="homePageADiv">
                <img
                  className="homePageCardHeartbreak"
                  alt="heartbreak"
                  src="https://cdn1.photostockeditor.com/c/2311/pug-covered-with-blanket-on-bedspread-pug-animal.jpg"
                />
              </div>
              <p className="homeCardImageText">Heartbreak</p>
            </div>
          </NavLink>
          <NavLink className="homePageMoodCardP" to="/moods/9">
            <div className="homePageMoodCardItem">
              <div className="homePageADiv">
                <img
                  className="homePageCardProductive"
                  alt="productive"
                  src="https://images.unsplash.com/photo-1593062096033-9a26b09da705?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                />
              </div>
              <p className="homeCardImageText">Productive</p>
            </div>
          </NavLink>
      </div>
    </div>
  );
};

export default Moods;

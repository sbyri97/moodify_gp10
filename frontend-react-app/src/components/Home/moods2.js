// import React, {useEffect} from 'react';
// import './moods.css';
// import { NavLink, useParams } from 'react-router-dom';
// import { getMoodPlaylists } from "../../store/playlist";
// import { useDispatch, useSelector } from 'react-redux';


// const Moods = () => {

//     const mood = useParams();
//     const dispatch = useDispatch();
//     const moodId = Number(mood.moodId);
//     // const moodInfo = useSelector((state) => state?.playlist?.mood);

//     useEffect(() => {
//         dispatch(getMoodPlaylists(moodId));
    
//       }, [dispatch, moodId]);

//     return (
//         <div className="h3Div">
//             <p className="whatsYourMood">What's your mood today?</p>
//         <div className='homePageMoodCardsMainContainer'>
//             <div className='homePageMoodCardH'>
//                 <div className='homePageMoodCardItem'>
//                 <div className='homePageADiv'>
//                 <NavLink to={`/moods/${moodId}`}>
//                     <div className='homeCards'>
//                         <img className='homePageCardHappy' alt='happy' src='https://images.unsplash.com/photo-1509909756405-be0199881695?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'/>
//                     </div>
//                 </NavLink>
//                 </div>
//                 </div>
//                     <p className='homeCardImageText'>Happy</p>
//             </div>
//             <div className='homePageMoodCardE'> 
//                 <div className='homePageMoodCardItem'>
//                 <div className='homePageADiv'>
//                 <a className='homeCards' href='/moods/2'>
//                     <img className='homePageCardEnergetic' alt='energetic' src='https://images.unsplash.com/photo-1621903084350-665bbd5b7f37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGVuZXJnZXRpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60'/>
//                 </a>
//                 </div>
//                 </div>
//                     <p className='homeCardImageText'>Energetic</p>
//             </div>
//             <div className='homePageMoodCardR'>
//                 <div className='homePageMoodCardItem'>
//                 <div className='homePageADiv'>
//                 <a className='homeCards' href='/moods/3'>
//                     <img className='homePageCardRomantic' alt='romantic' src='https://w0.peakpx.com/wallpaper/537/129/HD-wallpaper-purple-love-flower-vase-wonderful-love.jpg'/>
//                 </a>
//                 </div>
//                 </div>
//                     <p className='homeCardImageText'>Romantic</p>
//             </div>
//             <div className='homePageMoodCardS'>
//                 <div className='homePageMoodCardItem'>
//                 <div className='homePageADiv'>
//                 <a className='homeCards' href='/moods/4'>
//                     <img className='homePageCardSerene' alt='serene' src='https://images.unsplash.com/photo-1587805420704-23004be125a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zmxvd2VycyUyMGZpZWxkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60'/>
//                 </a>
//                 </div>
//                 </div>
//                     <p className='homeCardImageText'>Serene</p>
//             </div>
//             <div className='homePageMoodCardCh'>
//                 <div className='homePageMoodCardItem'>
//                 <div className='homePageADiv'>
//                 <a className='homeCards' href='/moods/5'>
//                     <img className='homePageCardChill' alt='chill' src='https://images.unsplash.com/photo-1499810631641-541e76d678a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJlbGF4fGVufDB8fDB8fA%3D%3D&w=1000&q=80'/>
//                 </a>
//                 </div>
//                 </div>
//                     <p className='homeCardImageText'>Chill</p>
//             </div>
//             <div className='homePageMoodCardG'>
//                 <div className='homePageMoodCardItem'>
//                 <div className='homePageADiv'>
//                 <a className='homeCards' href='/moods/6'>
//                     <img className='homePageCardGloomy' alt='gloomy' src='https://media.istockphoto.com/photos/majestic-storm-clouds-picture-id516351793?b=1&k=20&m=516351793&s=170667a&w=0&h=dNSelfEsetPTQObY4yvcRiGHtnehwwUFTTJbhMfx-S0='/>
//                 </a>
//                 </div>
//                 </div>
//                     <p className='homeCardImageText'>Gloomy</p>
//             </div>
//             <div className='homePageMoodCardA'>
//                 <div className='homePageMoodCardItem'>
//                 <div className='homePageADiv'>
//                 <a className='homeCards' href='/moods/7'>
//                     <img className='homePageCardAngry' alt='angry' src='https://t3.ftcdn.net/jpg/00/61/36/50/360_F_61365093_Q0egjt7vzb6mkuNbcO1JMSrud4z2Vuhm.jpg'/>
//                 </a>
//                 </div>
//                 </div>
//                     <p className='homeCardImageText'>Angry</p>
//             </div>
//             <div className='homePageMoodCardHeart'>
//                 <div className='homePageMoodCardItem'>
//                 <div className='homePageADiv'>
//                 <a className='homeCards' href='/moods/8'>
//                     <img className='homePageCardHeartbreak' alt='heartbreak' src='https://cdn1.photostockeditor.com/c/2311/pug-covered-with-blanket-on-bedspread-pug-animal.jpg'/>
//                 </a>
//                 </div>
//                 </div>
//                     <p className='homeCardImageText'>Heartbreak</p>
//             </div>
//             <div className='homePageMoodCardP'>
//                 <div className='homePageMoodCardItem'>
//                 <div className='homePageADiv'>
//                 <a className='homeCards' href='/moods/9'>
//                     <img className='homePageCardProductive' alt='productive' src='https://images.unsplash.com/photo-1593062096033-9a26b09da705?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'/>
//                 </a>
//                 </div>
//                 </div>
//                     <p className='homeCardImageText'>Productive</p>
//             </div>
//         </div>
//         </div>
//     )
// }

// export default Moods;
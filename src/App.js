import React, { useState } from'react';
import './App.css';
// import MyButton from './components/MyButton';
import Header from './components/Header';
import SignIn from './components/SignIn';
import OnlineMode from './components/OnlineMode';
import MasterVolume from './components/MasterVolume';
import SoundQuality from './components/SoundQuality';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOnline, setIsOnline] = useState(false);
  const [isVolume, setIsVolume] = useState(20);
  const [musicQuality, setMusicQuality] = useState('');


  return (
    <div className="App">

      <Header />

      {isLoggedIn ? (
        
        <>
        <h1>Welcome User!</h1> 
        <div className='cards'>
        <OnlineMode isOnline={isOnline} setIsOnline={setIsOnline} />
        <MasterVolume isVolume={isVolume} setIsVolume={setIsVolume} />
        <SoundQuality musicQuality={musicQuality} setMusicQuality={setMusicQuality} />
        </div>

        <div className='notifications'>
      <h3>System Notifications</h3>
      {!isOnline && 
         <p>Your application is offline. You won't be able to share or stream music to other devices.</p>
         }
         {isVolume >= 80 &&
        <p>Listening to music at a high volume could cause long-term hearing loss.</p>
        }
        {musicQuality === 1 && 
        <p>Music quality is degraded. Increase quality if your connection allows it.</p>
        }
        </div>
         
         
      </>
      

            // Because isLoggedIn is false, only the SignIn component will be rendered.
        ): (<SignIn setIsLoggedIn={setIsLoggedIn} />
      )}


      



    </div>
  );
}

export default App;

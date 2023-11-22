
import {useTypewriter,Cursor} from 'react-simple-typewriter';

import videofile from './video/ai.2.mp4';
import videofile2 from './video/ai.3.mp4';

import videofile3 from './video/ai.mp4';

import videofile4 from './video/ai.4.mp4';

import React, { useState, useEffect} from 'react';
import './App.css';
import logo from './video/metaverseimage.png';
import menubar from './video/menu-bar.png';

function App() {


const {Text} = useTypewriter({
  words: [ 'FOR REALTIME', 'UPDATES'],

loop: {},

typeSpeed: 120,
delaySpeed:50,
});
 
useEffect(() => {
  console.log('Text:', Text);
}, [Text]);



  const [isHeaderOpen, setHeaderOpen] = useState(false);
  
  

  const toggleHeader = () => {
    setHeaderOpen(!isHeaderOpen);
    
  };


  return (
    <div className="App">

    
      <video muted preload playsInline autoPlay>
        <source src={videofile} type="video/mp4" />
      </video>

      <video muted preload playsInline autoPlay className='video1'>
        <source src={videofile2} type="video/mp4" />
      </video>

      <video muted preload playsInline autoPlay style={{marginTop:'-4px'}}>
        <source src={videofile3} type="video/mp4" />
      </video>

   
      <video muted preload playsInline autoPlay style={{ marginTop:'-3px'}}>
        <source src={videofile4} type="video/mp4" />
      </video>
     
      <div>


      
        <h1>
          
        
            
            SUBSCRIBE FOR REALTIME UPDATES
            
            <span style={{fontWeight:'bold'}}>
            {Text}
            </span>
          <Cursor cursorStyle = '!' cursorColor='red'/>
          <span style={{color:'red'}}>
            
            <Cursor cursorStyle= '!'/>
          </span>
          
         
        </h1 >
        </div>   

<div className='sh'>
        <h3 id='info'>Join the future of virtual worlds!</h3>
        </div>


<div className='sh2'>
<h3 id='info2'>Subscribe to Cobox Metaverse for the latest news, events, and
</h3>
</div>


<div className='sh3'>
<h3 id='info3'>exclusive opportunities. Don't miss out on the ultimate immersive experience.
</h3>






<div className='sh4'>
<h3 id='info4'>Sign up now!
</h3>
</div>



</div>


<div>
  <input id='input'>
  </input>

      </div>
      <form action="">
      <div>
        
        <label for="email"><input id='input' type='email' name='email'  required placeholder='ENTER YOUR EMAIL HERE' /></label>
        


        <div className='shake'>
  
      <button className='sub'>SUBSCRIBE</button>
      
      </div>
       
      </div>
      </form>

      
      <h3 className='ecom'>E-commerce</h3>

      <div className="read-more-box">
      <a href="rm1"><h4 id="rm1">Read More</h4></a>
      </div>
      <h3 className='well'>Wellness</h3>

      <div className="read-more-box2">

      <a href="rm2"><h4 id="rm2">Read More</h4></a>

</div>

      <h3 className='arc'>Architecture</h3>
      <div className="read-more-box3">
      <a href="rm3"><h4 id="rm3">Read More</h4></a>
      </div>

      {isHeaderOpen ? null:<img src={logo} alt='logo' />}

      <a href='#/header' onClick={toggleHeader}><img className='menu' src={menubar} alt='menu-bar' /></a>

      {isHeaderOpen && (
        <header id='header' className={isHeaderOpen ? 'sticky' : ''}>
          <nav>
            <ul><a href='home'>
              <li id='home'>
                HOME
              </li>
              </a>
            </ul>
            

            <ul>
              <a href='eco'>
    <li id='eco'>
    ECOSYSTEM
    </li>
    </a>
  </ul>


  <ul>
    <a href='wp'>
    <li id='wp'>
    WHITEPAPER
    </li>
    </a>
  </ul>


  <ul>
    <a href='rdm'>
    <li id='rdm'>
      ROADMAP
    </li>
    </a>
  </ul>



  <ul>
    <a href='com'>
    <li id='com'>
      COMMUNITY
    </li>
    </a>
  </ul>



  <ul>
    <a href='bp'>
    <li id='bp'>
      BECOME A PARTNER
    </li>
    </a>
  </ul>


  <ul>
    <a href='ai'>
    <li id='ai'>
    AI POWER
    </li>
    </a>
  </ul>
            

          </nav>
        </header>
      )}












    </div>
  );
}

export default App;


  









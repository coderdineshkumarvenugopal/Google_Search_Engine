import logo from './assests/google doodle.jpg';
import './App.css';
import gcam from './assests/google camera.svg';
import gmic from './assests/google mic.png';
import gacc from './assests/google account.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="classname">
      <p className="gmail">Gmail</p>
        <p className="images">Images</p>
        
      <img src={gacc} className="gacc" alt="logo" />
      </div>
        <img src={logo} className="App-logo" alt="logo" />
        <img src={gcam} className="gcam" alt="logo" />
        <img src={gmic} className="gmic" alt="logo" />
        <input  className="App-search" type='search' value=''/>  
        
        <button className='googlesearch'>Google Search</button>    
        <button className='feelinglucky'>I'm Feeling Lucky</button>
        
      </header>
      <body>
  
      <p className="offer">Google offered in: </p>
      <div className="language">
      <a href="https://www.google.co.in/setprefs?sig=0_hsOSebKxXWGta2i00F66c6-iyxc%3D&hl=hi&source=homepage&sa=X&ved=0ahUKEwid7um9ka37AhX7zXMBHXHhDB0Q2ZgBCBE"><p className="l1">हिन्दी</p></a>
      <a href="https://www.google.co.in/setprefs?sig=0_hsOSebKxXWGta2i00F66c6-iyxc%3D&hl=bn&source=homepage&sa=X&ved=0ahUKEwifxo2Hkq37AhWY7XMBHbCRBWUQ2ZgBCBI"><p className="l1">বাংলা </p></a>
      <a href="https://www.google.co.in/setprefs?sig=0_hsOSebKxXWGta2i00F66c6-iyxc%3D&hl=te&source=homepage&sa=X&ved=0ahUKEwifxo2Hkq37AhWY7XMBHbCRBWUQ2ZgBCBM"><p className="l1">తెలుగు</p></a>
      <a href="https://www.google.co.in/setprefs?sig=0_hsOSebKxXWGta2i00F66c6-iyxc%3D&hl=mr&source=homepage&sa=X&ved=0ahUKEwifxo2Hkq37AhWY7XMBHbCRBWUQ2ZgBCBQ"><p className="l1">मराठी</p></a>
      <a href="https://www.google.co.in/setprefs?sig=0_hsOSebKxXWGta2i00F66c6-iyxc%3D&hl=ta&source=homepage&sa=X&ved=0ahUKEwifxo2Hkq37AhWY7XMBHbCRBWUQ2ZgBCBU"><p className="l1">தமிழ்</p></a>
      <a href="https://www.google.co.in/setprefs?sig=0_hsOSebKxXWGta2i00F66c6-iyxc%3D&hl=gu&source=homepage&sa=X&ved=0ahUKEwifxo2Hkq37AhWY7XMBHbCRBWUQ2ZgBCBY"><p className="l1">ગુજરાતી</p></a>
      <a href="https://www.google.co.in/setprefs?sig=0_hsOSebKxXWGta2i00F66c6-iyxc%3D&hl=kn&source=homepage&sa=X&ved=0ahUKEwifxo2Hkq37AhWY7XMBHbCRBWUQ2ZgBCBc"><p className="l1"> ಕನ್ನಡ</p></a>
      </div>               
      </body>
    </div>
  );
}

export default App;

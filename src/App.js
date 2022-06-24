import { useState, useEffect } from 'react'
import logo from './logo.svg';
import lines from './three.svg';
import './App.css';

function App() {
  const [menu, setMenu] = useState(false);
  
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    }
  }

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className="overviewer-nav">

        <div style={{ paddingRight: 5, paddingLeft: '2rem' }}>
          <svg onClick={() => window.open("https://discord.gg/gridcraft")} style={{ paddingLeft: '1rem', paddingRight: '1rem' }} width="30" height="23" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.3963 2.04823C23.4842 1.17992 21.4337 0.540181 19.2899 0.173778C19.2508 0.166707 19.2118 0.184379 19.1917 0.219723C18.928 0.68391 18.6359 1.28948 18.4314 1.76545C16.1255 1.4238 13.8315 1.4238 11.5729 1.76545C11.3683 1.2789 11.0656 0.68391 10.8007 0.219723C10.7806 0.185558 10.7416 0.167886 10.7026 0.173778C8.55989 0.53901 6.50945 1.17874 4.59617 2.04823C4.57961 2.0553 4.56541 2.06709 4.55599 2.08239C0.66674 7.83298 -0.398688 13.4422 0.123975 18.9819C0.12634 19.009 0.141712 19.0349 0.162998 19.0514C2.72901 20.9164 5.21463 22.0487 7.6541 22.7991C7.69314 22.8109 7.73451 22.7968 7.75935 22.765C8.33641 21.985 8.8508 21.1627 9.29185 20.2979C9.31787 20.2473 9.29303 20.1872 9.23983 20.1671C8.42391 19.8608 7.647 19.4873 6.89966 19.0632C6.84055 19.029 6.83582 18.9454 6.8902 18.9053C7.04747 18.7887 7.20477 18.6673 7.35494 18.5448C7.38211 18.5224 7.41997 18.5177 7.45192 18.5318C12.3616 20.7503 17.6769 20.7503 22.5287 18.5318C22.5606 18.5165 22.5985 18.5212 22.6268 18.5436C22.7771 18.6661 22.9343 18.7887 23.0928 18.9053C23.1472 18.9454 23.1436 19.029 23.0845 19.0632C22.3372 19.4956 21.5602 19.8608 20.7431 20.166C20.6899 20.186 20.6663 20.2473 20.6923 20.2979C21.1428 21.1615 21.6572 21.9838 22.2236 22.7638C22.2473 22.7968 22.2898 22.8109 22.3289 22.7991C24.7802 22.0487 27.2658 20.9164 29.8318 19.0514C29.8543 19.0349 29.8685 19.0102 29.8708 18.9831C30.4964 12.5786 28.8231 7.01535 25.4353 2.08356C25.427 2.06709 25.4128 2.0553 25.3963 2.04823ZM10.025 15.6088C8.54687 15.6088 7.32892 14.2657 7.32892 12.6163C7.32892 10.9669 8.52325 9.6238 10.025 9.6238C11.5386 9.6238 12.7448 10.9787 12.7211 12.6163C12.7211 14.2657 11.5268 15.6088 10.025 15.6088ZM19.9934 15.6088C18.5153 15.6088 17.2974 14.2657 17.2974 12.6163C17.2974 10.9669 18.4917 9.6238 19.9934 9.6238C21.507 9.6238 22.7132 10.9787 22.6896 12.6163C22.6896 14.2657 21.507 15.6088 19.9934 15.6088Z" fill="white"/>
          </svg>

          <svg onClick={() => window.open("https://www.twitter.com/gridcraft")} style={{ paddingLeft: '2rem', paddingRight: '1rem' }} width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.9714 6.72011C26.9895 6.98533 26.9895 7.25055 26.9895 7.51822C26.9895 15.674 20.8841 25.0802 9.72021 25.0802V25.0753C6.42235 25.0802 3.193 24.1195 0.416748 22.3082C0.896283 22.3669 1.37822 22.3962 1.86136 22.3974C4.59435 22.3999 7.24922 21.4673 9.39931 19.7501C6.80213 19.7 4.52464 17.9779 3.72902 15.4638C4.63882 15.6423 5.57625 15.6056 6.46922 15.3575C3.63768 14.7757 1.60056 12.2457 1.60056 9.30754C1.60056 9.28065 1.60056 9.25498 1.60056 9.22931C2.44426 9.7072 3.3889 9.97242 4.35518 10.0018C1.6883 8.18921 0.866237 4.58124 2.4767 1.76038C5.55823 5.61646 10.1048 7.96066 14.9855 8.20877C14.4963 6.06501 15.1645 3.81858 16.7414 2.31159C19.1859 -0.0252743 23.0306 0.0945025 25.3285 2.57926C26.6878 2.30671 27.9906 1.79949 29.1828 1.08083C28.7297 2.50959 27.7815 3.72325 26.5147 4.49447C27.7178 4.35024 28.8932 4.02269 30.0001 3.52281C29.1852 4.76457 28.1589 5.84623 26.9714 6.72011Z" fill="white"/>
          </svg>
        </div>

        <div style={{ display: 'grid', position: 'absolute', left: '45%', right: '45%', marginLeft: 'auto', marginRight: 'auto' }}>
          <svg style={{ filter: 'drop-shadow(0px -3.8px 0px #A4DCFE)' }} width="3.8vh" height="3.8vh" viewBox="0 0 66 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.0392 53.9848V10.72H66V0.704468H16.0392H0V10.72V53.9848V58.9926V64H66V61.0757V53.9848V42.7507V35.5977V32.7355H29.9399V42.7507H43.243V53.9848H16.0392Z" fill="white"/>
          </svg>
        </div>

        <div style={{ color: 'white', display: 'flex', alignItems: 'center', display: 'flex', marginLeft: 'auto', paddingRight: 55 }}>

          {windowDimensions.width >= 1001 && (
            <>
              <div alt="wiki" onClick={() => window.open("https://gridcraft.gitbook.io/gridcraft-documentation/")} style={{ paddingLeft: '2rem' }}>
                WIKI
              </div>

              <div onClick={() => window.open("https://grid-map.vercel.app/")} style={{ paddingLeft: '2rem' }}>
                MAP
              </div>

              <div onClick={() => window.open("https://gridcraft.net/")} style={{ paddingLeft: '2rem' }}>
                PARTNERS
              </div>

              <button className="connect-button">
                CONNECT WALLET
              </button>
            </>
          )}

          {windowDimensions.width <= 1000 && (
            <button onClick={() => setMenu(!menu)} className="mini-button">
              <div>
                <img style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 'auto', marginRight: 'auto' }} height={15} src={lines}></img>
              </div>
            </button>
          )}

        </div>

      </div>

      <iframe
        className="map"
        src="https://grid-overviewer-staging.projecki.com/#/820/64/-249/-5/minecraft%20-%20overworld/day"
      >
      </iframe>
      
      {menu && (
        <>
          <div className="menu-nav" style={{ display: 'grid', justifyContent: 'center', alignItems: 'center', textAlign: 'center', position: 'absolute', top: '7.50vh', right: 0, width: 250, height: 200, zIndex: 999999, color: 'white' }}>
            
            <button className="mini-connect-button">
              <div>
                CONNECT WALLET    
              </div>
            </button>

            <div>WIKI</div>
            <div>MAP</div>
            <div>PARTNERS</div>

          </div>
        </>
      )}

    </>
  );
}

export default App;

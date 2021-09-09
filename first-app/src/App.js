import logo from './logo.svg';
import './App.css';
import imageSrc from './images/f.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="circle"></div>
          <div className="menu">
            <a id="home" href="">Home</a>
            <a id="blog" href="">Blog</a>
            <a id="features" href="">Features</a>
            <a id="pricing" href="">Pricing</a>
            <a id="doc" href="">Documentation</a>
            <img className="photo" src="/images/nav/facebook.png"></img>
            <img className="photo" src="/images/nav/telegram.png"></img>
            <img className="photo" src="/images/nav/twitter.png"></img>
            <img className="photo" src="/images/nav/M.png"></img>
          </div>
          <div>
            <div className="rectangle2"></div>
            <button className="rectangle1">
              Get started
            </button>
          </div>
      </header>
      <main>
        <hr/>
          <div className="texts">        
            <p className= "text1">PLAN YOUR LIFE</p>
            <p className= "text2">Increase your <b>productivity</b></p>
            <p className= "text3">Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. 
              Usu atqui laudem an, insolens gubergren similique est cu. 
              Et vel modus congue vituperata.</p>
          </div>  
          <div className="clouds">
            <div className="cloud1"></div>
            <div className="cloud2"></div>
            <div className="cloud3"></div>
            <div className="cloud4"></div>
            <div className="cloud5"></div>
            <div className="cloud6"></div>
            <div className="cloud7"></div>
            <div className="cloud8"></div>
            <div className="cloud9"></div>
            <div className="cloud10"></div>
            <div className="cloud11"></div>
            <div className="cloud12"></div>
          </div>
            <div className="play"></div>
            <div className="polygon"></div>
          <div className="chart">
            <div className="lines">
              <div className="g1">
                <div className="ell1"></div>
                <div className="l1"></div>
              </div>
            </div>
            <div className="line"></div> 
            <div className="line2"></div>
          </div>
          <div className="customers">
            <div className="rect">
              <img src="/images/customers/1.png"></img>
              <img src="/images/customers/2.png"></img>
              <img src="/images/customers/3.png"></img>
              <img src="/images/customers/4.png"></img>
            </div>
          </div>
          <div className="block-2">
            <p className="p1">DESKTOP AND MOBILE AP</p>
            <p className="p2"><b>Plan</b> and <b>manage</b></p>
            <p className="p3">Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. 
              Usu atqui laudem an, insolens gubergren similique est cu. 
              Et vel modus congue vituperata. Solum patrioque no sea. 
              Mea ex malis mollis oporteat. Eum an expetenda consequat.</p>
          </div>
          <div className="buttons">
            <button className="left_b">View video</button>
            <img src="./images/f.png"></img>
            <button className="right_b">See features</button>
          </div>
          <div className="ill">
            <div className="screen">
              <img src=""></img>
            </div>
            <div className="j"></div>
            <div className="phone">
              <img src=""></img>
            </div>
            <div className="phone2">
              <img src=""></img>
            </div>
          </div>

      </main>
    </div>
  );
}

export default App;

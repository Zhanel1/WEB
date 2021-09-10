import logo from './logo.svg';
import './App.css';
import {icons} from './utils/icons'

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
            <img className="photo1" src={icons.f}></img>
            <img className="photo2" src={icons.telegram}></img>
            <img className="photo3" src={icons.twitter}></img>
            <img className="photo4" src={icons.M}></img>
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
               <img className="photo8" src={icons.bitbucket}></img>
               <img className="photo9" src={icons.apple}></img>
               <img className="photo10" src={icons.facebook}></img>
               <img className="photo11" src={icons.atlassian}></img>
               <img className="photo12" src={icons.audi}></img>
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
            <button className="left_b">View video<img className="l" src={icons.Polygon}></img></button>
            <button className="right_b">See features</button>
          </div>
          <div className="ill">
            <div className="screen">
             <img className="n" src={icons.note}></img> 
            </div>
            <div className="j"></div>
            <div className="phone">
              <img className="ph1" src={icons.phone1}></img>
            </div>
            <div className="phone2">
              <img className="ph2" src={icons.phone2}></img>
            </div>
          </div>
          <div className="block-3">
            <p className="about">ABOUT US</p>
            <p className="read">Read about our app</p>
            <div className="clouds2">
              <div id="cl1"></div>
              <div id="cl2"></div>
              <div id="cl3"></div>
              <div id="cl4"></div>
              <div id="cl5"></div>
              <div id="cl6"></div>
              <div className="group7">
              <div id="cl7"></div>
              <div id="cl8"></div>
              <div id="cl9"></div>
              <div id="cl10"></div>
              </div>
            </div>
            <div class="buttons2">
              <button className="left_button">Read more</button>
              <p id="or">OR</p>
              <button className="right_button">Get Started</button>
            </div>
            <div className="overview">
              <div id="circles"></div>
              <img id="vectors" src={icons.Vector}></img>
              <p id="over">Overview </p>
              <p id="view">Brute laoreet efficiendi id his, ea illum nonumes luptatum pro.</p>
            </div>
            <div className="files">
              <div id="circles"></div>
              <img id="vectors" src={icons.Vector4}></img>
              <p id="file1">Files </p>
              <p id="file2">No vim nulla vitae intellegat. Ei enim error ius, solet atomorum conceptam ex has.</p>
            </div>
            <div className="meeting">
              <div id="circles"></div>
              <img id="vectors" src={icons.Vector5}></img>
              <p id="meet">Meeting chats </p>
              <p id="chats">Vim ne tacimates neglegentur. Erat diceret omittam at est.</p>
            </div>
            <div className="save">
              <div id="circles"></div>
              <img id="vectors" src={icons.Vector6}></img>
              <p id="sav">Save events </p>
              <p id="events">Nisl idque mel ea, nominati voluptatum.</p>
            </div>
          </div>
      </main>
    </div>
  );
}

export default App;

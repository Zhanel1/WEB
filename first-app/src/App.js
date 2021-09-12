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
        <hr id="after-header"/>
      </header>
      <div className="content"> 
          <div className="block-1">        
            <p className= "text1">PLAN YOUR LIFE</p>
            <p className= "text2">Increase your <b>productivity</b></p>
            <p className= "text3">Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. 
              Usu atqui laudem an, insolens gubergren similique est cu. 
              Et vel modus congue vituperata.</p>
          </div>  
          <img id="background-img" src={icons.Vectors}></img>
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
            <div className="cloud13"></div>
          </div>
            <div className="play"></div>
              <img className="polygon" src={icons.button}></img>
          <div className="chart">
            <div id="group1"><img src={icons.group1} width="92" height="82" ></img></div>
            <img id="point1" src={icons.point1}></img>
            <div className="lines">
              <div className="g1">
                <div className="ell1"></div>
                <div className="l1"></div>
              </div>
              <div className="g2">
                <div className="ell2"></div>
                <div className="l2"></div>
              </div>
              <div className="g3">
                <div className="ell3"></div>
                <div className="l3"></div>
              </div>
              <div className="g3">
                <div className="ell3"></div>
                <div className="l3"></div>
              </div>
              <div className="g4">
                <div className="ell4"></div>
                <div className="l4"></div>
              </div>
            </div>
            <hr id="after-block-1"/>
          </div>
          <div className="customers">
            <div className="customers-body">
               <img className="photo8" src={icons.bitbucket}></img>
               <img className="photo9" src={icons.apple}></img>
               <img className="photo10" src={icons.facebook}></img>
               <img className="photo11" src={icons.atlassian}></img>
               <img className="photo12" src={icons.audi}></img>
            </div>
          </div>
          <hr id="after-customers"/>
          <div className="block-2">
            <p className="p1">DESKTOP AND MOBILE AP</p>
            <p className="p2"><b>Plan</b> and <b>manage</b></p>
            <p className="p3">Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. 
              Usu atqui laudem an, insolens gubergren similique est cu. 
              Et vel modus congue vituperata. Solum patrioque no sea. 
              Mea ex malis mollis oporteat. Eum an expetenda consequat.</p>
              <button className="left_b">View video<img className="l" src={icons.Polygon}></img></button>
              <button className="right_b">See features</button>
            <div id="screens">
              <div className="screen">
                <img className="n" src={icons.note}></img> 
              </div>
              <div className="phone">
              <img className="phone-1" src={icons.phone1}></img>
              </div>
              <div className="phone2">
                <img className="phone-2" src={icons.phone2}></img>
              </div>
            </div>
          </div>
          <hr id="after-block-2"/>
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
            <div className="buttons2">
              <button className="left-button">Read more</button>
              <p id="or">OR</p>
              <button className="right-button">Get Started</button>
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
          <hr id="after-block-3"/>
          <div className="block-4">
            <div className="block-body">
              <div className="left-part">
              <img id="left-icon" src={icons.group2}></img>
                <div className="left-part-text">
                  <p id="left-number">89%</p>
                  <p id="left-text">Customers who have increased their productivity</p>
                </div>
              </div>
              <div className="right-part">
                <div className="patterns">
                  <div id="pattern-circle"></div>
                  <img id="pattern-semicircle" src={icons.Ellipse2}></img>
                  <div id="mini-circle"></div>
                  <img id="mini-semicircle" src={icons.Ellipse1}></img>
                  <div className="right-part-text">
                    <p id="right-number">3123</p>
                    <p id="right-text">Users who have used our application</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr id="after-block-4"/>
          <div className="block-5">
            <p id="block-text-1">OUR RESOURCES</p>
            <p id="block-text-2">Start reading our blog</p>
            <img id="arrow-left" src={icons.img1}></img>
            <div className="block-5-body">
              <img id="block-5-3" src={icons.img3}></img>
              <div id="block-circle"><img src={icons.img6}></img></div>
              <img id="block-5-4" src={icons.img4}></img>
              <img id="block-5-5" src={icons.img5}></img>
            </div>
            <img id="arrow-right" src={icons.img2}></img>
            <p id="block5-text-1">How to start planning</p>
            <p id="block5-text-2">Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. 
            Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti. 
            Natum petentium principes mei ea. Tota everti periculis vis ei, quas tibique pro at, 
            eos ut decore ...</p>
            <button className="block5-left-button">Read now</button>
            <button className="block5-right-button">Add to your bookmarks</button>
            <img id="point2" src={icons.point1}></img>
          </div>
          <hr id="after-block-5"/>
          <div className="block-6">
            <p id="block6-text-1">TESTIMONIALS</p>
            <p id="block6-text-2">Customers's quotes</p>
            <p id="block6-text-3">Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an.</p>
            <div className="block6-right">
              <p id="block6-text-4">Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. 
                Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.</p>
              <img id="face" src={icons.face}></img>
            </div>
            <img id="point2" src={icons.group}></img>
            <div id="block6-2">
              <p id="block6-text-5">Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. 
                Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.</p>
            </div>
          </div>
          <hr id="after-block-6"/>
          <div className="block-7">
            <div className="block-7-body">
              <p id="block7-text-1">Customer help</p>
              <p id="block7-text-2">Frequently asked questions</p>
              <div className="block7-1">
                <img className="arrow-up-1" src={icons.Vector7}></img>
                <p className="block7-text-1">Reque insolens in vel?</p>
                <hr id="block7-hr-1"/>
              </div>
              <div className="block7-2">
                <img className="arrow-up-2" src={icons.Vector7}></img>
                <p className="block7-text-2">Vis rebum error graecis ea, id sit postea accusamus?</p>
                <hr id="block7-hr-2"/>
              </div>
              <div className="block7-3">
                <img className="arrow-up-3" src={icons.Vector8}></img>
                <p className="block7-text-3"><b>Lorem repudiandae ne nec?</b></p>
                <p className="block7-text-4">Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. 
                  Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.</p>
                <hr id="block7-hr-3"/>
                <button id="block7-button">Go to documentation</button>
              </div>
              <div className="block7-4">
                <img className="arrow-up-4" src={icons.Vector7}></img>
                <p className="block7-text-5">Ad dicit numquam vel. Et eos iudico feugait percipitur?</p>
                <hr id="block7-hr-4"/>
              </div>
              <div className="block7-5">
                <img className="arrow-up-5" src={icons.Vector7}></img>
                <p className="block7-text-6">Sea no dico percipitur. Fierent constituam definitiones id eum?</p>
                <hr id="block7-hr-5"/>
              </div>
            </div>
          </div>
          <hr id="after-block-7"/>
          <div className="block-8">
            <img id="block8-clouds" src={icons.clouds}></img>
            <p id="block8-text-1">PLAN YOUR LIFE</p>
            <p id="block8-text-2">Get <b>started</b> now</p>
            <p id="block8-text-3">Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. 
              Usu atqui laudem an, insolens gubergren similique est cu. Et vel modus congue vituperata.</p>
            <button className="block8-left">View pricing</button>
            <button className="block8-right">Read documentation</button>
          </div>
          <hr id="after-block-8"/>
          <div className="block-9">
            <p id="block9-text-1">Sign up for newsletter</p>
            <p id="block9-text-2">Cu qui soleat partiendo urbanitas. 
            Eum aperiri indoctum eu, homero alterum.</p>
            <form><input className="block9-left" type="text" name="name" placeholder="Email address"/></form>
            <button className="block9-right"><b>Save me</b></button>
          </div>
          <hr id="after-block-9"/>
      </div>
      <footer>
        <div id="circle"></div>
          <a id="home" href="">Home</a>
          <a id="blog" href="">Blog</a>
          <a id="features" href="">Features</a>
          <a id="pricing" href="">Pricing</a>
          <a id="doc" href="">Documentation</a> 
          <img className="photo1" src={icons.f}></img>
          <img className="photo2" src={icons.telegram}></img>
          <img className="photo3" src={icons.twitter}></img>
          <img className="photo4" src={icons.M}></img>
        <div className="rectangle2"></div>
        <button className="rectangle1">Get started</button>
        <p id="footer-text">Copyright © 2018 by Random site</p>
      </footer>
    </div>
  );
}

export default App;

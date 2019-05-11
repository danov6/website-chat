import React from 'react';
import './App.css';

function App() {
  return (
    <div classNameName="App">
      <div className="site-wrap">

<div className="site-mobile-menu site-navbar-target">
  <div className="site-mobile-menu-header">
    <div className="site-mobile-menu-close mt-3">
      <span className="icon-close2 js-menu-toggle"></span>
    </div>
  </div>
  <div className="site-mobile-menu-body"></div>
</div>


<header className="site-navbar py-4 js-sticky-header site-navbar-target" role="banner">
  
  <div className="container-fluid">
    <div className="d-flex align-items-center">
      <div className="site-logo"><a href="index.html">Amplify</a></div>
      <div>
        <nav className="site-navigation position-relative text-right" role="navigation">
          <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
            <li><a href="#home-section" className="nav-link">Home</a></li>
            <li><a href="#work-section" className="nav-link">Work</a></li>
            <li><a href="#process-section" className="nav-link">Process</a></li>
            <li><a href="#services-section" className="nav-link">Services</a></li>
          </ul>
        </nav>
      </div>
      <div className="ml-auto">
        <nav className="site-navigation position-relative text-right" role="navigation">
          <ul className="site-menu main-menu site-menu-dark js-clone-nav mr-auto d-none d-lg-block">
            <li className="cta"><a href="#contact-section" className="nav-link"><span className="rounded border border-primary">Contact</span></a></li>
          </ul>
        </nav>
        <a href="#" className="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black float-right"><span className="icon-menu h3"></span></a>
      </div>
    </div>
  </div>
  
</header>

<div className="intro-section" id="home-section">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-4 mr-auto" data-aos="fade-up">
        <h1>We do things right.</h1>
        <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa nulla sed quis rerum amet natus quas necessitatibus.</p>
        <p><a href="#" className="btn btn-outline-light py-3 px-5">Get Started</a></p>

      </div>
      <div className="col-lg-2 ml-auto"  data-aos="fade-up" data-aos-delay="100">
        <figure className="img-absolute">
          <img src="images/person_1.jpg" alt="Image" className="img-fluid" />
        </figure>
      </div>
    </div>
  </div>
</div>


<div className="site-section section-1">
  

  <div className="container">
    <div className="row">
      <div className="col-lg-5 mr-auto mb-5">

        <div className="mb-5">
          <span className="section-sub-title d-block">About Amplify</span>
          <h2 className="section-title">We Value More on Quality and not in Quantity.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
        </div>

        <div className="row">
          <div className="col-lg-6">
            
            <div className="counter d-flex align-items-start mb-5" data-aos="fade-up" data-aos-delay="">
              <div className="icon-wrap"><span className="flaticon-reload text-primary"></span></div>
              <div className="counter-text">
                <strong>260</strong>
                <span>Fast Loading</span>
              </div>
            </div>

            <div className="counter d-flex align-items-start" data-aos="fade-up" data-aos-delay="100">
              <div className="icon-wrap"><span className="flaticon-download text-primary"></span></div>
              <div className="counter-text">
                <strong>2,500</strong>
                <span>No. of Downloads </span>
              </div>
            </div>

          </div>
          <div className="col-lg-6">
            
            <div className="counter d-flex align-items-start mb-5" data-aos="fade-up" data-aos-delay="200">
              <div className="icon-wrap"><span className="flaticon-monitor text-primary"></span></div>
              <div className="counter-text">
                <strong>87</strong>
                <span>Number of Person</span>
              </div>
            </div>

            <div className="counter d-flex align-items-start" data-aos="fade-up" data-aos-delay="300">
              <div className="icon-wrap"><span className="flaticon-chat text-primary"></span></div>
              <div className="counter-text">
                <strong>920</strong>
                <span>Chat Room</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="col-lg-6">
        <div className="image-absolute-box" >
          <div className="box" data-aos="fade-up">
            <div className="icon-wrap"><span className="flaticon-vector"></span></div>
            <h3>Creativity is the key</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati commodi aspernatur eum eius inventore facilis.</p>
          </div>
          <img src="images/about_1.jpg" alt="Image" className="img-fluid"/>
        </div>
      </div>
    </div>
  </div>

</div>

<div className="site-section section-2" id="work-section">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 mb-5">
        <span className="section-sub-title d-block">Excellent Work</span>
        <h2 className="section-title">Our Works</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
      </div>
    </div>

  </div>
    




  <div className="owl-carousel nonloop-block-13">

      <a className="work-thumb" href="images/about_1.jpg" data-fancybox="gallery">
        <div className="work-text">
          <h3>Work Name Here</h3>
          <span className="category">Website</span>
        </div>
        <img src="images/about_1.jpg" alt="Image" className="img-fluid" />
      </a> 
      
      <a className="work-thumb" href="images/slide_1.jpg"  data-fancybox="gallery">
        <div className="work-text">
          <h3>Work Name Here</h3>
          <span className="category">Illustration</span>
        </div>
        <img src="images/slide_1.jpg" alt="Image" className="img-fluid" />
      </a>

      <a className="work-thumb" href="images/slide_2.jpg"  data-fancybox="gallery">
        <div className="work-text">
          <h3>Work Name Here</h3>
          <span className="category">Branding</span>
        </div>
        <img src="images/slide_2.jpg" alt="Image" className="img-fluid"/>
      </a>

      <a className="work-thumb" href="images/slide_3.jpg"  data-fancybox="gallery">
        <div className="work-text">
          <h3>Work Name Here</h3>
          <span className="category">Web Development</span>
        </div>
        <img src="images/slide_3.jpg" alt="Image" className="img-fluid" />
      </a>

      <a className="work-thumb" href="images/slide_4.jpg"  data-fancybox="gallery">
        <div className="work-text">
          <h3>Work Name Here</h3>
          <span className="category">Design</span>
        </div>
        <img src="images/slide_4.jpg" alt="Image" className="img-fluid"/>
      </a>
  </div>

</div>


<div className="site-section section-2" id="process-section" >
  <div className="container">
    <div className="row">
      <div className="col-lg-6 mb-5">
        <span className="section-sub-title d-block">Our Process</span>
        <h2 className="section-title">Our Process</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4" data-aos="fade-up" data-aos-delay="">
        <div className="process p-3">
          <span className="number">01</span>
          <div>
            <span className="flaticon-glasses display-4 text-primary mb-4 d-inline-block"></span>
            <h3>Research</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
          </div>

        </div>
      </div>
      <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
        <div className="process p-3">
          <span className="number">02</span>
          <div>
            <span className="flaticon-vector display-4 text-primary mb-4 d-inline-block"></span>
            <h3>Building</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
          </div>

        </div>
      </div>
      <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
        <div className="process p-3">
          <span className="number">03</span>
          <div>
            <span className="flaticon-monitor display-4 text-primary mb-4 d-inline-block"></span>
            <h3>Launch</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
          </div>

        </div>
      </div>
    </div>
  </div>
</div>


<div className="site-section bg-light" id="services-section">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 mb-5">
        <span className="section-sub-title d-block">Services</span>
        <h2 className="section-title">Services</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
      </div>
    </div>

  </div>
    
  <div className="owl-carousel nonloop-block-14">
    
    <div className="service">
      <div>
        <span className="flaticon-reload display-4 text-primary mb-4 d-inline-block"></span>
        <h3>Auto Reload</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
      </div>
    </div>


    <div className="service">
      <div>
        <span className="flaticon-download display-4 text-primary mb-4 d-inline-block"></span>
        <h3>Download Videos</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
      </div>
    </div>

    <div className="service">
      <div>
        <span className="flaticon-monitor display-4 text-primary mb-4 d-inline-block"></span>
        <h3>Web Development</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
      </div>
    </div>

    <div className="service">
      <div>
        <span className="flaticon-chat display-4 text-primary mb-4 d-inline-block"></span>
        <h3>24/7 Support</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
      </div>
    </div>

    <div className="service">
      <div>
        <span className="flaticon-glasses display-4 text-primary mb-4 d-inline-block"></span>
        <h3>Research</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
      </div>
    </div>

    <div className="service">
      <div>
        <span className="flaticon-vector display-4 text-primary mb-4 d-inline-block"></span>
        <h3>Creative Design</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
      </div>
    </div>



  </div>

</div>


<div className="site-section" id="contact-section">
  <div className="container">

    <div className="row justify-content-center">
      <div className="col-md-7">


        
        <h2 className="section-title mb-3">Message Us</h2>
        <p className="mb-5">Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
      
        <form method="post" data-aos="fade">
          <div className="form-group row">
            <div className="col-md-6 mb-3 mb-lg-0">
              <input type="text" className="form-control" placeholder="First name" />
            </div>
            <div className="col-md-6">
              <input type="text" className="form-control" placeholder="Last name" />
            </div>
          </div>

          <div className="form-group row">
            <div className="col-md-12">
              <input type="text" className="form-control" placeholder="Subject" />
            </div>
          </div>

          <div className="form-group row">
            <div className="col-md-12">
              <input type="email" className="form-control" placeholder="Email" />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-md-12">
              <textarea className="form-control" id="" cols="30" rows="10" placeholder="Write your message here."></textarea>
            </div>
          </div>

          <div className="form-group row">
            <div className="col-md-6">
              
              <input type="submit" className="btn btn-primary py-3 px-5 btn-block" value="Send Message" />
            </div>
          </div>

        </form>
      </div>
    </div>
  </div>
</div>


 
<footer className="footer-section">
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <h3>About Amplify</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro consectetur ut hic ipsum et veritatis corrupti. Itaque eius soluta optio dolorum temporibus in, atque, quos fugit sunt sit quaerat dicta.</p>
      </div>

      <div className="col-md-3 ml-auto">
        <h3>Links</h3>
        <ul className="list-unstyled footer-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Work</a></li>
          <li><a href="#">Process</a></li>
          <li><a href="#">Services</a></li>
        </ul>
      </div>

      <div className="col-md-4">
        <h3>Subscribe</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt incidunt iure iusto architecto? Numquam, natus?</p>
        <form action="#">
          <div className="d-flex mb-5">
            <input type="text" className="form-control rounded-0" placeholder="Email" />
            <input type="submit" className="btn btn-primary rounded-0" value="Subscribe" />
          </div>
        </form>
      </div>

    </div>

    <div className="row pt-5 mt-5 text-center">
      <div className="col-md-12">
        <div className="border-top pt-5">
        <p>
    Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" >Colorlib</a>
  </p>
        </div>
      </div>
      
    </div>
  </div>
</footer>



</div>
    </div>
  );
}

export default App;

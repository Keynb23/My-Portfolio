import SplineAnimation from './components/SplineAnimation';


export const LandingPage = () => {
  return (
    <div className="LandingPage"> 
      <div className="layer-blur"></div>

      <div className="container">
        <header>
          <h1 data-aos="fade-down" data-aos-duration="1500" className="logo">Key'n Brosdahl</h1>
          <nav>
            <a data-aos="fade-down" data-aos-duration="1500" href="#">HOME</a>
            <a data-aos="fade-down" data-aos-duration="2000" href="#">Projects</a>
            <a data-aos="fade-down" data-aos-duration="2500" href="#">Expierence</a>
            <a data-aos="fade-down" data-aos-duration="3000" href="#">CONTACT</a>
          </nav>
          <button data-aos="fade-down" data-aos-duration="1500" className="btn-signing">Placeholder text</button>
        </header>

        <main>
          <div className="content">
            <div data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0" data-aos-duration="500" className="tag-box">
              <div className="tag">Hello</div>
            </div>

            <h1 data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0" data-aos-duration="500">I'm a Software Engineer.<br/>I like web design</h1>
            
            <p data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0" data-aos-duration="1000" className="description">
            I made a bold career shift in my mid-20s, starting over to pursue my passion for game development.  
            Though I had dabbled in Python for a few years, I never took it seriously—until one day, I committed.  
            Enrolling in a coding bootcamp marked the beginning of my journey into the worlds of software engineering, web, and game development.  
            </p>

            <div data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0" data-aos-duration="2000" className="buttons">
              <a href="#" className="btn-get-started">Placeholder text &gt;</a>
              <a href="#" className="btn-signing-main">Placeholder text &gt;</a>
            </div>

            <div data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0" data-aos-duration="1500" className="tag-box">
              <div className="tag">Placeholder text</div>
            </div>
          </div>
        </main>

        <SplineAnimation 
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0" 
          data-aos-duration="1000" 
          className="robot-3d" 
          splineUrl="https://prod.spline.design/oREz2CdvYa60O3ht/scene.splinecode" 
        />
      </div>
    </div>
  )
}
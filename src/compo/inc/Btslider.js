import React from 'react'
import Slider_1 from '/Users/mdshash13/MERN Stack/React Course/react-website/src/compo/img/Slider_1.jpg';
import Slider_2 from '/Users/mdshash13/MERN Stack/React Course/react-website/src/compo/img/Slider_2.jpg'
import Slider_3 from '/Users/mdshash13/MERN Stack/React Course/react-website/src/compo/img/Slider_3.jpg'

function Btslider  () {
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Slider_1} class="d-block w-100" height="800px" alt="Slider 1"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Inspiring Quotes</h5>
        <p>If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={Slider_2} class="d-block w-100" height="800px" alt="Slider 2"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Great Personalities</h5>
        <p>“An ounce of patience is worth more than a tonne of preaching.- Mahatma Gandhi”</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={Slider_3} className="d-block w-100" height="800px" alt="Slider 3"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Life Philosophy</h5>
        <p>“One day, in retrospect, the years of struggle will strike you as the most beautiful.” - Sigmund Freud</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Btslider

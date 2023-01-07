import React from 'react'
import "./Home.css"
import fotoGrupal from "./et/fotoGrupal.jfif"
import fotoGrupal2 from "./et/fotoGrupal2.jfif" 
import tocandoVidas from "./et/tocandoVidas.jfif" 
import logo from "./et/logo.jpg"
import tocandoVidas2 from "./et/tocandoVidas.jfif"
import vision from "./et/vision.jfif"
import collage1 from "./et/collage1.jfif"
import collage2 from "./et/collage2.jfif"

export default function Home() {
  return (
    <div>
      <br></br>
      <br></br>
      

      {/* carousel */}
      <div id="carouselExampleIndicators" className="carousel slide">
          <br></br>
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
       </div>
        <div id='cont-habi' className="carousel-inner">
          <div id='habi1' className="carousel-item active" >
            <img src={fotoGrupal2} className="carousel-img1" alt="..." />
          </div>
          <div id='habi2' className="carousel-item">
           <img src={fotoGrupal} className="carousel-img2" alt="..." />
          </div>
         <div id='habi3' className="carousel-item">
          
            <img src={tocandoVidas} className="carousel-img3" alt="..." />
          </div>
       </div>
        <button className="carousel-control-prev text-light" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
       <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
       </button>
       <div >
        <img className='homeLogo' src={logo} alt="..." />
       </div>
      </div>
{/* --------------------------------------------------------------------------- */}
<br></br>
<br></br>
<br></br>

      <div className='visionMision'  >
    
      <ul class="cardsVisionMision">
  <li>
    <a href="" class="cardVisionMision">
      <img src={vision} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img class="card__thumb" src={collage2} alt="" />
          <div class="card__header-text">
            <h3 class="card__title">vision</h3>            
            <span class="card__status">E.T.</span>
          </div>
        </div>
        <p class="card__description"> Se visiona como una organización en líder en educación tecnológica, profesional y en formación integral a jóvenes, promoviendo el desarrollo del ser, la innovación y empoderamiento juvenil.
        <br></br>
        Aportando herramientas y oportunidades de integración académica y laboral que permitan disminuir las brechas de desigualdad, impactando el tejido social con proyección al futuro. </p>
      </div>
    </a>      
  </li>
  <li>
    <a href="" class="cardVisionMision">
      <img src={tocandoVidas2} class="card__image" alt="" />
      <div class="card__overlay">        
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
          <img class="card__thumb" src={collage1} alt="" />
          <div class="card__header-text">
            <h3 class="card__title">¿Quienes somos?</h3>
            <span class="card__status">E.T.</span>
          </div>
        </div>
        <p class="card__description">
          somos una organización sin ánimo de lucro que busca generar el cambio socialo a partir del desarrollo de los proyectos de formacion integral en jóvenes colombianos. Con el fin de que genere en ellos herramientas cognitivas, laborales y psicosociales que transformaran sus vidas y la de sus familias, bajo el propósito de la construcción de una sociedad y de un futuro mejor. 
        </p>
      </div>
    </a>
  </li>
      
</ul>
          
        

      </div>


<br></br>
    </div> 
  )
}

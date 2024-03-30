import React from 'react'
import { useDataProvider } from '../context/DataContext'

export default function Hero() {

  const {profile} = useDataProvider();
  const profileData = profile?.data[0].attributes;
  console.log("profile", profileData)
  return (
    <section id="hero" className="section hero w-100">
  <img className="extend-icon" src="images/responsive.png" alt="/" />
  <div className="hero-center">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center text-lg-start">
          <div className="hero-image d-inline-block d-lg-none">
            <img src="images/profile-img.jpg" alt="/" />
          </div>
          <div className="hero-content mt-4 mx-auto mx-lg-0 text-lg-left mt-lg-none">
            <p className="base-color text-uppercase">{profileData?.role}</p>
            <h2>
              Hello , I’m <span className="base-color">{profileData?.name} </span>
              Welcome to my World.{" "}
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="hero-footer d-block d-lg-none">
    <a
      className="download-cv primary-button mt-3 mb-4 d-lg-none"
      href="javascript:void(0);"
    >
      Download CV
    </a>
    <div className="social d-lg-none mb-4 d-block">
      <a href="javascript:void(0);" className="d-inline-block">
        <i className="bi bi-whatsapp t-green" />
      </a>
      <a href="javascript:void(0);" className="d-inline-block mx-4">
        <i className="bi bi-instagram t-purple" />
      </a>
      <a href="javascript:void(0);" className="d-inline-block">
        <i className="bi bi-dribbble t-red" />
      </a>
    </div>
  </div>
</section>

  )
}

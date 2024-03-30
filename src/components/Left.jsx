import React from "react";
import { useDataProvider } from "../context/DataContext";

export default function Left() {
  const {profile} = useDataProvider();

  const profileData = profile?.data[0].attributes;

  return (
    <div className="left-side  nav-close">
      <div className="menu-content-align">
        <div className="left-side-image">
          <img src={profileData?.image.data.attributes.url} alt="/" />
        </div>
        <h1 className="mt-1">{profileData?.name}</h1>
        <a
          className="download-cv primary-button d-none d-lg-inline-block"
          href="javascript:void(0);"
        >
          Download CV
        </a>
        <div className="container d-lg-none d-inline-block">
          <div className="row">
            <div className="col-12 text-center">
              <p className="text-muted mb-0">Web Designer</p>
            </div>
          </div>
        </div>
      </div>
      <div className="menu-align">
        <ul className="list-group menu text-center " id="menu">
          <li className="list-group-item">
            <a href="#hero">
              <i className="bi bi-house" />
              <span>home</span>
            </a>
          </li>
          <li className="list-group-item">
            <a href="#about" className="custom-btn">
              <i className="bi bi-person" />
              <span>about</span>
            </a>
          </li>
          <li className="list-group-item">
            <a href="#resume">
              <i className="bi bi-clipboard-check" />
              <span>resume</span>
            </a>
          </li>
          <li className="list-group-item">
            <a href="#portfolio">
              <i className="bi bi-collection" />
              <span>works</span>
            </a>
          </li>
          {/* <li className="list-group-item">
            <a href="#blog">
              <i className="bi bi-book" />
              <span>blog</span>
            </a>
          </li>
          <li className="list-group-item">
            <a href="#contact">
              <i className="bi bi-geo-alt" />
              <span>contact</span>
            </a>
          </li> */}
        </ul>
        <div className="menu-footer">
          <a
            className="download-cv primary-button mt-3 mb-4 d-lg-none"
            href="javascript:void(0);"
          >
            Download CV
          </a>
          <div className="social d-lg-none d-block">
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
      </div>
    </div>
  );
}

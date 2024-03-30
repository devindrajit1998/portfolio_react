import React from "react";

export default function Common() {
  return (
    <>
      {/*  Mobile Next and Prev Button Start */}
      <div className="next-prev-page d-block d-lg-none">
        <button type="button" className="prev-page bg-base-color hstack">
          <i className="bi bi-chevron-compact-left mx-auto" />
        </button>
        <button
          type="button"
          className="next-page bg-base-color mt-1 mt-lg-3 hstack"
        >
          <i className="bi bi-chevron-compact-right mx-auto" />
        </button>
      </div>
      {/*  Mobile Next and Prev Button End */}
      {/*  Navbar Button Mobile Start */}
      <div className="menu-toggle">
        <span />
        <span />
        <span />
      </div>
      {/*  Navbar Button Mobile End */}
      {/*  Background Shapes Start  */}
      <div className="area">
        <ul className="circles">
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </div>
      {/*  Background Shapes End  */}

      <div class="m-magic-cursor mmc-outer"></div>
      <div class="m-magic-cursor mmc-inner"></div>
    </>
  );
}

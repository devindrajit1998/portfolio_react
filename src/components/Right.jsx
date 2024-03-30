import React from "react";

export default function Right() {
  return (
    <div className="right-side d-none d-lg-block">
      <div id="date" />
      <div className="social-box">
        <div className="follow-label">
          <span>Follow Me</span>
        </div>
        <div className="social d-none d-lg-block">
          <a href="javascript:void(0);">
            <i className="bi bi-whatsapp t-green" />
          </a>
          <a href="javascript:void(0);">
            <i className="bi bi-instagram t-purple" />
          </a>
          <a href="javascript:void(0);">
            <i className="bi bi-dribbble t-red" />
          </a>
        </div>
      </div>
      <div className="next-prev-page">
        <button type="button" className="prev-page bg-base-color hstack">
          <i className="bi bi-chevron-compact-up mx-auto" />
        </button>
        <button type="button" className="next-page bg-base-color mt-3 hstack">
          <i className="bi bi-chevron-compact-down mx-auto" />
        </button>
      </div>
    </div>
  );
}

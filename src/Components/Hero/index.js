import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function index() {
  const notify = () => toast("Kimkim du dragon !");
    return (
      <section id="hero">
        <div className="container">
          <div className="hero-content">
            <h1>SUFRANJ Naweed</h1>
            <h2>Développeur FullStack Javascript</h2>
            <p>
              <span>M</span>ongodb - <span>E</span>xpressJS - <span>R</span>eactJS - <span>N</span>odeJS 
            </p>
            <div className="container-btn">
              <a className="btn-gradient-cta" onClick={notify} href="#">PROJET</a> 
              <ToastContainer />
            </div>
          </div>
        </div>

        <div id="topBlob">
          <svg width="384" height="496" viewBox="0 0 384 496" fill="none">
          <path d="M6.49636 -12.3001C30.9609 -28.3166 171.328 23.2957 276.666 9.08202C381.95 -5.32867 452.434 -85.6281 485.72 -85.6293C519.006 -85.6305 515.148 -5.13649 497.18 50.8333C479.387 106.543 447.486 137.729 434.588 212.223C421.691 286.718 427.797 404.521 394.939 424.106C361.799 443.556 289.695 364.787 244.788 306.113C200.111 247.377 182.401 208.798 127.996 147.851C73.5914 86.9046 -17.7927 3.45647 6.49636 -12.3001Z" fill="url(#paint0_linear)"/>
          <defs>
          <linearGradient id="paint0_linear" x1="69.276" y1="241.919" x2="493.039" y2="51.5254" gradientUnits="userSpaceOnUse">
          <stop stop-color="#2191F9"/>
          <stop offset="0.479167" stop-color="#8B7BB7"/>
          <stop offset="1" stop-color="#E95152"/>
          </linearGradient>
          </defs>
          </svg>
        </div>
        <div id="bottomBlob">
          <svg width="401" height="321" viewBox="0 0 401 321" fill="none">
          <path d="M255.982 157.138C298.158 204.755 353.787 233.175 381.602 289.56C409.416 345.794 409.265 429.994 367.241 475.797C325.217 521.601 241.017 529.31 158.782 527.496C76.3962 525.682 -4.02444 514.496 -54.2118 468.692C-104.399 422.738 -124.051 342.317 -125.865 259.931C-127.679 177.697 -111.504 93.4967 -61.3166 45.8792C-11.2804 -1.73832 72.9194 -12.7735 129.153 15.0412C185.539 42.7047 213.958 109.52 255.982 157.138Z" fill="url(#paint0_linear)"/>
          <defs>
          <linearGradient id="paint0_linear" x1="137.448" y1="0" x2="137.448" y2="527.735" gradientUnits="userSpaceOnUse">
          <stop stop-color="#2191F9"/>
          <stop offset="1" stop-color="#E95152"/>
          </linearGradient>
          </defs>
          </svg>
        </div>
        
      </section>
    )
}

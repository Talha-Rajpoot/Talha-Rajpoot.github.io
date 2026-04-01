import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="hero">
          {/* Background glow effects */}
          <div className="hero__glow hero__glow--1"></div>
          <div className="hero__glow hero__glow--2"></div>

          <div className="hero__content">
            {/* Profile photo */}
            <div className="hero__avatar-wrapper">
              <div className="hero__avatar-ring"></div>
              <img
                className="hero__avatar"
                src={introdata.your_img_url}
                alt={meta.title}
              />
              <div className="hero__status">
                <span className="hero__status-dot"></span>
                Available for work
              </div>
            </div>

            {/* Greeting */}
            <p className="hero__greeting">{introdata.title}</p>

            {/* Big typewriter heading */}
            <h1 className="hero__heading">
              <Typewriter
                options={{
                  strings: [
                    introdata.animated.first,
                    introdata.animated.second,
                    introdata.animated.third,
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 10,
                }}
              />
            </h1>

            {/* Description */}
            <p className="hero__desc">{introdata.description}</p>

            {/* Tech stack pills */}
            <div className="hero__stack">
              <span className="hero__stack-pill">Flutter</span>
              <span className="hero__stack-pill">React Native</span>
              <span className="hero__stack-pill">Node.js</span>
              <span className="hero__stack-pill">FastAPI</span>
            </div>

            {/* CTAs */}
            <div className="hero__actions">
              <Link to="/portfolio" className="text_2">
                <div id="button_p" className="ac_btn btn">
                  My Portfolio
                </div>
              </Link>
              <Link to="/contact">
                <div id="button_h" className="ac_btn btn">
                  Contact Me
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};

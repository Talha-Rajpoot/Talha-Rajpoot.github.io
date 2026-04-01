import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home-3d">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <motion.div
          className="hero-3d"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Avatar */}
          <motion.div
            className="hero-3d__avatar"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
          >
            <div className="hero-3d__avatar-glow"></div>
            <img src={introdata.your_img_url} alt={meta.title} />
            <div className="hero-3d__status">
              <span className="hero-3d__status-dot"></span>
              Available for work
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.p
            className="hero-3d__label"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {introdata.title}
          </motion.p>

          {/* Typewriter */}
          <motion.h1
            className="hero-3d__heading"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
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
          </motion.h1>

          {/* Description */}
          <motion.p
            className="hero-3d__desc"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {introdata.description}
          </motion.p>

          {/* Tech pills */}
          <motion.div
            className="hero-3d__stack"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {["Flutter", "React Native", "Node.js", "FastAPI"].map((t, i) => (
              <span key={i} className="hero-3d__pill">{t}</span>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            className="hero-3d__actions"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <Link to="/portfolio" className="hero-3d__btn hero-3d__btn--primary">
              My Portfolio
            </Link>
            <Link to="/contact" className="hero-3d__btn hero-3d__btn--secondary">
              Contact Me
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </HelmetProvider>
  );
};

import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

export const About = () => {
  return (
    <HelmetProvider>
      <div className="about-3d">
        <Helmet>
          <meta charSet="utf-8" />
          <title>About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <div className="about-3d__container">
          <motion.h1
            className="about-3d__title"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            About Me
          </motion.h1>

          {/* About */}
          <motion.div
            className="about-3d__section"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
          >
            <h3 className="about-3d__label">{dataabout.title}</h3>
            <p className="about-3d__text">{dataabout.aboutme}</p>
          </motion.div>

          {/* Timeline */}
          <motion.div
            className="about-3d__section"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
          >
            <h3 className="about-3d__label">Work Timeline</h3>
            <div className="about-3d__timeline">
              {worktimeline.map((data, i) => (
                <motion.div
                  key={i}
                  className="about-3d__timeline-item"
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  custom={3 + i}
                >
                  <div className="about-3d__timeline-dot"></div>
                  <div className="about-3d__timeline-content">
                    <h4>{data.jobtitle}</h4>
                    <p>{data.where}</p>
                    <span>{data.date}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            className="about-3d__section"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={4}
          >
            <h3 className="about-3d__label">Skills</h3>
            <div className="about-3d__skills">
              {skills.map((data, i) => (
                <motion.div
                  key={i}
                  className="about-3d__skill"
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  custom={5 + i}
                >
                  <div className="about-3d__skill-header">
                    <span className="about-3d__skill-name">{data.name}</span>
                    <span className="about-3d__skill-value">{data.value}%</span>
                  </div>
                  <div className="about-3d__skill-bar">
                    <motion.div
                      className="about-3d__skill-fill"
                      initial={{ width: 0 }}
                      animate={{ width: `${data.value}%` }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            className="about-3d__section"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={8}
          >
            <h3 className="about-3d__label">Services</h3>
            <div className="about-3d__services">
              {services.map((data, i) => (
                <motion.div
                  key={i}
                  className="about-3d__service-card"
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  custom={9 + i}
                  whileHover={{ y: -5, borderColor: "rgba(227,255,57,0.3)" }}
                >
                  <h4>{data.title}</h4>
                  <p>{data.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </HelmetProvider>
  );
};

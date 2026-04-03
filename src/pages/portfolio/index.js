import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { dataportfolio, meta } from "../../content_option";
import { motion } from "framer-motion";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <div className="portfolio-3d">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Projects | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <div className="portfolio-3d__container">
          <motion.h1
            className="portfolio-3d__title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Projects
          </motion.h1>
          <motion.p
            className="portfolio-3d__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            A selection of projects I've built — from concept to deployment.
          </motion.p>

          <div className="portfolio-3d__grid">
            {dataportfolio.map((data, i) => (
              <motion.a
                key={i}
                href={data.link}
                className="portfolio-3d__card"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="portfolio-3d__card-number">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="portfolio-3d__card-img">
                  <img src={data.img} alt={data.title} />
                </div>
                <div className="portfolio-3d__card-body">
                  <div className="portfolio-3d__card-tags">
                    {data.tags && data.tags.map((tag, j) => (
                      <span key={j} className="portfolio-3d__tag">{tag}</span>
                    ))}
                  </div>
                  <h3 className="portfolio-3d__card-title">{data.title}</h3>
                  <p className="portfolio-3d__card-desc">{data.description}</p>
                  <div className="portfolio-3d__card-cta">
                    <span>View Project</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

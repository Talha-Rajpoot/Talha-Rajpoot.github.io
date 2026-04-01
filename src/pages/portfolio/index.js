import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import { ScrollReveal } from "../../hooks/useScrollReveal";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <ScrollReveal>
              <h1 className="display-4 mb-3"> Portfolio </h1>
              <p className="po_subtitle">
                A selection of projects I've built — from concept to deployment.
              </p>
            </ScrollReveal>
          </Col>
        </Row>
        <div className="po_grid">
          {dataportfolio.map((data, i) => {
            return (
              <ScrollReveal key={i} delay={i * 120}>
                <a href={data.link} className="po_card" target="_blank" rel="noopener noreferrer">
                  <div className="po_card__number">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="po_card__img">
                    <img src={data.img} alt={data.title} />
                  </div>
                  <div className="po_card__body">
                    <div className="po_card__tags">
                      {data.tags && data.tags.map((tag, j) => (
                        <span key={j} className="po_tag">{tag}</span>
                      ))}
                    </div>
                    <h3 className="po_card__title">{data.title}</h3>
                    <p className="po_card__desc">{data.description}</p>
                    <div className="po_card__arrow">
                      <span>View Project</span>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};

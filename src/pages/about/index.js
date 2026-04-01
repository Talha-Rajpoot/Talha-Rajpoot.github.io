import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";
import { ScrollReveal } from "../../hooks/useScrollReveal";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <ScrollReveal>
              <h1 className="display-4 mb-4">About me</h1>
              <hr className="t_border my-4 ml-0 text-left" />
            </ScrollReveal>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <ScrollReveal>
              <h3 className="color_sec py-4">{dataabout.title}</h3>
            </ScrollReveal>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <ScrollReveal delay={200}>
              <p>{dataabout.aboutme}</p>
            </ScrollReveal>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <ScrollReveal>
              <h3 className="color_sec py-4">Work Timeline</h3>
            </ScrollReveal>
          </Col>
          <Col lg="7">
            <ScrollReveal delay={200}>
              <table className="table caption-top">
                <tbody>
                  {worktimeline.map((data, i) => {
                    return (
                      <tr key={i}>
                        <th scope="row">{data.jobtitle}</th>
                        <td>{data.where}</td>
                        <td>{data.date}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </ScrollReveal>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <ScrollReveal>
              <h3 className="color_sec py-4">Skills</h3>
            </ScrollReveal>
          </Col>
          <Col lg="7">
            {skills.map((data, i) => {
              return (
                <ScrollReveal key={i} delay={i * 100}>
                  <div>
                    <h3 className="progress-title">{data.name}</h3>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        style={{
                          width: `${data.value}%`,
                        }}
                      >
                        <div className="progress-value">{data.value}%</div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <ScrollReveal>
              <h3 className="color_sec py-4">Services</h3>
            </ScrollReveal>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <ScrollReveal key={i} delay={i * 150}>
                  <div className="service_ py-4">
                    <h5 className="service__title">{data.title}</h5>
                    <p className="service_desc">{data.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};

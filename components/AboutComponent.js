import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/Home.module.css";

function AboutComponent() {
    return (
        <div className={styles.aboutComponentBg}>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <img
                            className="img-fluid service-img"
                            src="/assets/grow.jpg"
                        />
                    </Col>
                    <Col xs={12} md={6} className={styles.aboutDetails}>
                        <div>
                            <h2>Best Offer</h2>
                            <b> Lorem ipsum dolor sit amet, cons dolore</b>
                            <br />
                            <br />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore
                            </p>
                            <button className="btn btn-custom">
                                Explore More
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AboutComponent;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/TopComponent.module.css";

function TopComponent() {
    return (
        <>
            <div className={styles.background}></div>
            <div className={styles.texture}>
                <Container className={styles.containerTop}>
                    <Row className={styles.sectionTop}>
                        <Col xs={12} md={6}>
                            <img
                                className="img-fluid"
                                src="/assets/phone.png"
                            />
                        </Col>
                        <Col xs={12} md={6} className={styles.sectionTopRight}>
                            <h6>XYZ</h6>
                            <h2>Some random Text</h2>
                            <h1>XYZ</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore
                            </p>
                            <button className="btn btn-custom">
                                Download App
                            </button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default TopComponent;

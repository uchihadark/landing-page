import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/ServiceComponent.module.css";

function ServiceComponent() {
    return (
        <div className={styles.serviceComponentBg}>
            <Container className={styles.serviceContainer}>
                <Row>
                    <Col xs={12} md={4}>
                        <img
                            className="img-fluid "
                            src="/assets/service1.jpg"
                        />
                        <h2>Service 1</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore
                        </p>
                    </Col>
                    <Col xs={12} md={4}>
                        <img className="img-fluid" src="/assets/service2.jpg" />
                        <h2>Service 2</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore
                        </p>
                    </Col>
                    <Col xs={12} md={4}>
                        <img className="img-fluid" src="/assets/service1.jpg" />
                        <h2>Service 3</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ServiceComponent;

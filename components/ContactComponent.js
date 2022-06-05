import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/Home.module.css";

function ContactComponent() {
    return (
        <div className={styles.contactComponentBg}>
            <Container className={styles.contactComponent}>
                <Row>
                    <Col xs={12} md={6}>
                        <h1>XYZ</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore
                        </p>
                        <div>
                            <i class="fa fa-facebook"></i>
                            <i class="fa fa-twitter"></i>
                            <i class="fa fa-instagram"></i>
                            <i class="fa fa-linkedin"></i>
                        </div>
                    </Col>
                    <Col xs={12} md={3}>
                        <b>Links</b>
                        <br />
                        <br />
                        <h6>Link1</h6>
                        <h6>Link2</h6>
                        <h6>Link3</h6>
                    </Col>
                    <Col xs={12} md={3}>
                        <b>Overview</b>
                        <br />
                        <br />
                        <h6>Link1</h6>
                        <h6>Link2</h6>
                        <h6>Link3</h6>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ContactComponent;

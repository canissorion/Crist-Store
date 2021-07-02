import React, { Component } from 'react'
import { Row, Card, Col } from 'react-bootstrap';

export default class Home extends Component {
    render() {
        return (
            <Row className=" p-5 text-center">
                <Col style={{padding:"20% 0 0 0"}}><h2 className="text-uppercase">CristStore</h2>
                    <p className="text-primary">¡Skin Care!</p></Col>
                <Col>
                    <Card.Img style={{width:"347px",margin:"0 0 0 20%"}} src={"https://www.estilovecci.cl/wp-content/uploads/2019/11/Skin-Care-Myths-1080x670.jpg"} />
                </Col>
            </Row>
        )
    }
}
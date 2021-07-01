import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { Col, Row } from 'react-bootstrap';
import ReactPlayer from "react-player";


const ItemDetail = (props) => (
    <Row>
        <Col>
            <h2>Desafio API</h2>
            <Card className="mt-2 mb-2" style={{ width: '50%' }}>
                <Card.Body>
                    <Card.Img src={props.data.image} ></Card.Img>
                    <Card.Title>{props.data.title}</Card.Title>
                    <Card.Text className="text-justify">
                        {props.data.description}
                        <br></br>
                        <br></br>
                        <span className='date'>Precio: {props.data.price}</span>
                    </Card.Text>
                    <Button variant="primary">Mas Detalles</Button>
                </Card.Body>
            </Card>
        </Col>
    </Row>
);

export default ItemDetail;


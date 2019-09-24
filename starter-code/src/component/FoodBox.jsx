import React, { Component } from "react";

import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

export default class FoodBox extends Component {
  render() {
    const food = this.props.food;

    return (
      <div>
        <CardDeck>
          <Container>
            <Card>
              <Row>
                <Col xs={5} md={3}>
                  <Image src={food.image} width="100" height="50" />
                </Col>
                <Col xs={5} md={3}>
                  <p>
                    <strong>{food.name}</strong> <br />
                    <small>{food.calories} cal</small>
                  </p>
                </Col>
                <Col xs={5} md={3}>
                  <InputGroup size="lg">
                    <InputGroup.Prepend type="number" value="1">
                      <Form.Control />
                    </InputGroup.Prepend>
                  </InputGroup>
                </Col>
                <Col xs={5} md={3}>
                  <Button variant="info" size="lg">
                    +
                  </Button>
                </Col>
              </Row>
            </Card>
          </Container>
        </CardDeck>
      </div>
    );
  }
}

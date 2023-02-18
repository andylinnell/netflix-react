import { useState } from "react"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

export default function ShowCard({ cartoon }) {
  const [show, setShow] = useState()


  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (


    <Container fluid onClick={handleShow} className="showcard">

<Row>
                <Col xs={12} sm={6}>Col 1</Col>
                <Col xs={12} sm={6}>Col 2</Col>
                <Col>Col 3</Col>
            </Row>
      <Row>
        <Col><h3>{cartoon.title}</h3></Col>
      </Row>

      <Row>
        <Col>
          <img src={cartoon.image} alt={cartoon.title} onClick={handleShow}></img>
        </Col>
      </Row>

      <Row>
        <Col><p>{cartoon.genre}  {cartoon.year}</p></Col>
        <Col>
          <p>{cartoon.rating}</p>
          <details>
            <summary>Info</summary>
            <p>Minutes: {cartoon.runtime_in_minutes}</p>
            <p>Episodes: {cartoon.episodes}</p>
            <p>Creator: {cartoon.creator}</p>
          </details>
        </Col>
      </Row>

      <Row>
        <Col>
          <Modal  show={show} onHide={handleClose}>
            <Modal.Header>
              <Modal.Title>{cartoon.title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <iframe width="560" height="315" src={cartoon.video} title={cartoon.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                            </Modal.Body>

            <Modal.Footer>
              <Button variant='secondary'
                onClick={handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>


        </Col>
      </Row>
    </Container>








  )
}
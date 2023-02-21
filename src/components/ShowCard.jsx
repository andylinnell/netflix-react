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

    <div className="showcard">
      <Container fluid  >
        <div onClick={handleShow}>
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
            </Col>
          </Row>
        </div>
        <Row>
          <details>
            <summary className="summary"> More Info</summary>
            <p>Minutes: {cartoon.runtime_in_minutes}</p>
            <p>Episodes: {cartoon.episodes}</p>
            <p>Creator: {cartoon.creator}</p>
          </details>
        </Row>

        <Row>
          <Col>
            <Modal show={show} onHide={handleClose} size="lg" centered>
              <Modal.Header className="mheader">
                <Modal.Title>{cartoon.title}</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <iframe width="100%" height="415" src={cartoon.video} title={cartoon.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>                            </Modal.Body>

              <Modal.Footer className="mfooter">
                <Button variant='secondary'
                  onClick={handleClose}>Close</Button>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
      </Container>
    </div>








  )
}
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";


export default function Header () {
    return(
        <Container fluid>
            <Row id="topheader">
                <Col><a href="http://localhost:3000/home" ><h1>TOONFLIX</h1></a></Col>
            </Row>
        </Container>
    )
}
import { Container, Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <Container className="d-flex justify-content-center" style={{marginTop: '40vh'}}>
      <Spinner animation="border" variant="light" />
    </Container>
  )
};

export default Loading;

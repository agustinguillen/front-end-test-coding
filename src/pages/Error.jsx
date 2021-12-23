import { Container } from "react-bootstrap";
import ErrorToast from "../components/ErrorToast/ErrorToast";
import Brand from "../components/Brand/Brand";

const Error = () => {
  return (
    <Container className="mt-5">
      <Brand />
      <ErrorToast msg="message2" />
    </Container>
  );
};

export default Error;

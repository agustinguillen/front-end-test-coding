import { Container, Row, Col, Form, FormControl, Button } from "react-bootstrap";
import UsersList from "../components/UsersList/UsersList";
import { useState } from "react";
import { axios } from "../axios";
import { FaGithub, FaTrashAlt } from "react-icons/fa";
import ErrorToast from "../components/ErrorToast/ErrorToast";
import Brand from "../components/Brand/Brand";

const Home = () => {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);

  const getUsers = async (user) => {
    const response = await axios
      .get(`users?q=${user}`)
      .catch((err) => {
        console.error("Error:", err)
        setUsers([]);
        setError(true)
      });
    if(response && response.data.total_count === 0){
      setUsers([]);
      setError(true)
      console.error("Error:")
    }
    
    if (response && response.data.total_count > 0) {
      setUsers(response.data.items);
      console.log(response);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.length >= 4 && username !== "noloro") {
      getUsers(username);
    }
  };

  const closeError = () => {
    setError(false)
  }

  const handleClear = () => {
    setUsers([]);
  };

  return (
    <>
      <Container className="text-center mt-3">
        <Brand />
        <Row className="justify-content-center">
          <Col xs md={9} lg={6}>
            <Form className="d-flex mt-3" onSubmit={(e) => handleSubmit(e)}>
              <FormControl
                type="search"
                placeholder="Github username here..."
                className="mr-2"
                aria-label="Search"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Button
                type="submit"
                variant="outline-warning"
                className="mx-3"
                disabled={username.length < 4 || username === "noloro"}
              >
                Search
              </Button>
              <Button variant="outline-light" onClick={() => handleClear()}>
                <FaTrashAlt />
              </Button>
            </Form>
          </Col>
        </Row>
        <Row>
          {users.length >= 1 ? (
            <UsersList users={users} />
          ) : (
            <>
              {error === false ? (
                <div className="mt-5">
                  <h2 className="mt-5">Welcome to GitHub-Users App!</h2>
                  <h5>
                    Search for any <FaGithub size={30} /> GitHub user you want
                  </h5>
                </div>
              ) : (
                <ErrorToast closeError={closeError} msg="message1" />
              )}
            </>
          )}
        </Row>
      </Container>
    </>
  );
};

export default Home;

import { useParams } from "react-router";
import { Container, Row, Col, Image, ListGroup } from "react-bootstrap";
import { detailURL } from "../axios";
import { useState, useEffect } from "react";
import UserRepos from "../components/UserRepos";

const UserDetail = () => {
  const { login } = useParams();
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    getUser(login);
    getRepos(login);
  }, [login]);

  const getUser = async (login) => {
    const response = await detailURL
      .get(`/${login}`)
      .catch((err) => console.error("Error:", err));
    if (response && response.data) {
      setUser(response.data);
    }
  };

  const getRepos = async (login) => {
    const response = await detailURL
      .get(`/${login}/repos`)
      .catch((err) => console.error("Error:", err));
    if (response && response.data) {
      setRepos(response.data);
    }
  };

  const ListItemStyle = {
    paddingLeft: "1rem",
    backgroundColor: "#3E2C41",
    color: "whitesmoke",
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col sm lg={4}>
          <div className="d-flex flex-column justify-content-center text-center">
            <Image
              src={user.avatar_url}
              style={{
                width: "12rem",
                height: "12rem",
                margin: "1rem",
                alignSelf: "center",
              }}
              roundedCircle
            />
            <h3>{user.name}</h3>
            <small>
              Nombre de usuario: <strong>{user.login}</strong>
            </small>
            <small>
              ID de usuario: <strong>{user.id}</strong>
            </small>
            <p>{user.bio}</p>
            <ListGroup>
              <ListGroup.Item style={ListItemStyle}>
                Company: <strong>{user.company}</strong>
              </ListGroup.Item>
              <ListGroup.Item style={ListItemStyle}>
                Location: <strong>{user.location}</strong>
              </ListGroup.Item>
              <ListGroup.Item style={ListItemStyle}>
                Followers: <strong>{user.followers}</strong>
              </ListGroup.Item>
              <ListGroup.Item style={ListItemStyle}>
                Following: <strong>{user.following}</strong>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </Col>
        <Col sm lg={8}>
          <UserRepos repos={repos} />
        </Col>
      </Row>
    </Container>
  );
};

export default UserDetail;

import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Link
      key={user.id}
      to={`/detail/${user.login}`}
      className="link"
      onClick={() => handleScroll()}
    >
      <Card
        style={{
          width: "18rem",
          margin: "1rem",
          backgroundColor: "#3E2C41",
          color: "whitesmoke",
        }}
      >
        <Card.Img variant="top" src={user.avatar_url} />
        <Card.Body>
          <Card.Title>{user.login}</Card.Title>
          <Card.Text>ID de usuario: {user.id}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default UserCard;

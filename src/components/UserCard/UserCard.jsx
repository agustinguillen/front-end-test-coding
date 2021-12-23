import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserAlt, FaHashtag } from "react-icons/fa";
import "./UserCard.scss";

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
        className="bg-secondary card-user"
        style={{
          width: "18rem",
          margin: "1rem",
          color: "whitesmoke",
        }}
      >
        <Card.Img variant="top" src={user.avatar_url} />
        <Card.Body>
          <Card.Title>
            <FaUserAlt size={15} className="mx-2" />
            {user.login}
          </Card.Title>
          <Card.Text>
            <FaHashtag size={17} className="mx-2" />
            ID de usuario: {user.id}
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default UserCard;

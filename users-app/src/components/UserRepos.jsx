import { Card } from 'react-bootstrap';

const UserRepos = ({repos}) =>{
    console.log(repos)
    return (
      <div className="mt-3 repositories">
        <h3>Public Repositories</h3>
        {repos.map((repo) => (
          <Card
            style={{
              margin: "1rem 0",
              backgroundColor: "#3E2C41",
              color: "whitesmoke",
            }}
          >
            <Card.Body>
              <Card.Title>{repo.name}</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
}

export default UserRepos;
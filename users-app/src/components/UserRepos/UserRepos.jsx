import { Card, Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaCodeBranch, FaStar } from 'react-icons/fa';
import './UserRepos.scss';

const UserRepos = ({repos}) =>{
    const repoURL = 'https://github.com'
    
    return (
      <div className="mt-3 repositories">
        <h3>Public Repositories</h3>
        {repos.map((repo) => (
          <Card
            style={{
              margin: "1rem 0",
              color: "whitesmoke",
            }}
            key={repo.id}
            className="bg-secondary card-repo"
          >
            <Card.Body>
              <Container>
                <Row>
                  <Col xs={8} lg={10}>
                    <Card.Title>{repo.name}</Card.Title>
                    {repo.description && (
                      <Card.Text>
                        {repo.description.substring(0, 150)}
                        {repo.description.length > 149 && <>...</>}
                      </Card.Text>
                    )}
                    {repo.language && (
                      <div className="tag">{repo.language}</div>
                    )}
                  </Col>
                  <Col xs={4} lg={2} className="d-flex flex-wrap flex-column">
                    <Card.Text>
                      <a
                        href={repoURL + `/${repo.full_name}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaGithub size={30} />
                      </a>
                    </Card.Text>
                    <Card.Text>
                      <FaStar /> {repo.stargazers_count}
                      <br />
                      <FaCodeBranch /> {repo.forks_count}
                    </Card.Text>
                  </Col>
                </Row>
              </Container>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
}

export default UserRepos;
import { Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap';
import UsersList from '../components/UsersList';
import { useState, useEffect } from 'react';
import { axios } from '../axios';

const Home = () => {

  const [username, setUsername] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    getUsers();
  }, []);
  
  const getUsers = async ()=>{
     const response = await axios.get('').catch((err)=>console.error("Error:", err)) 
     if(response && response.data){
         setUsers(response.data.items)
     }
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
  }

  return (
    <Container className="text-center mt-5">
      <h1>Home</h1>
      <Row className="justify-content-center">
        <Col xs md={9} lg={6}>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Github username here..."
              className="mr-2"
              aria-label="Search"
              value={username}
              onChange={e=>setUsername(e.target.value)}
            />
            <Button variant="outline-warning" className="mx-3" onClick={handleSubmit}>
              Search
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <UsersList users={users} />
      </Row>
    </Container>
  );
};

export default Home
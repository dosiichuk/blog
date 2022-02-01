import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import Posts from '../../features/Posts/Posts';

const Home = () => {
  return (
    <Container>
      <div className="d-flex flex-row justify-content-between align-items-center">
        <h2>All posts</h2>
        <Button as={Link} to="/post/add" variant="outline-info">
          Add post
        </Button>
      </div>
      <Posts />
    </Container>
  );
};

export default Home;

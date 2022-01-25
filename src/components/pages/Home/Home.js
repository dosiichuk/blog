import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Posts from '../../features/Posts/Posts';
import styles from './Home.module.scss';

const Home = (props) => {
  return (
    <Container>
      <div className={styles.homeHeader}>
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

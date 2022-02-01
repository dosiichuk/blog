import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import Posts from '../../features/Posts/Posts';

const PostsByCategory = () => {
  const { category } = useParams();
  return (
    <Container>
      <h2>{category}</h2>

      <Posts />
    </Container>
  );
};

export default PostsByCategory;

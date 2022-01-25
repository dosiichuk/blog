import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/postsRedux';
import IndividualPost from '../../views/IndividualPost/IndividualPost';
import Row from 'react-bootstrap/Row';

const Posts = (props) => {
  const posts = useSelector(getAllPosts);
  return (
    <Row className="mt-4">
      {posts.map((post) => (
        <IndividualPost key={post.id} {...post} />
      ))}
    </Row>
  );
};

export default Posts;

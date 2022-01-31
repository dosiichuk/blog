import { useSelector } from 'react-redux';
import Row from 'react-bootstrap/Row';

import { getAllPosts } from '../../../redux/postsRedux';

import IndividualPost from '../../views/IndividualPost/IndividualPost';

const Posts = () => {
  const posts = useSelector(getAllPosts);
  return (
    <Row className="mt-4">
      {posts.map((post) => (
        <IndividualPost
          key={post.id}
          publishedDate={post.publishedDate}
          {...post}
        />
      ))}
    </Row>
  );
};

export default Posts;

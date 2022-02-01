import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';

import { getAllPosts } from '../../../redux/postsRedux';

import IndividualPost from '../../views/IndividualPost/IndividualPost';

const Posts = () => {
  const { category } = useParams();

  const posts = useSelector((state) => getAllPosts(state, category));
  if (posts.length === 0) {
    return <div>No posts in this category</div>;
  }
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

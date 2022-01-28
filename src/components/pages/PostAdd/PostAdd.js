import Container from 'react-bootstrap/Container';
import AddPostForm from '../../features/AddPostForm/AddPostForm';

const PostAdd = () => {
  return (
    <Container className="w-75">
      <h1>Add post</h1>
      <AddPostForm />
    </Container>
  );
};

export default PostAdd;

import { Container } from 'react-bootstrap';

import EditPostForm from '../../features/EditPostForm/EditPostForm';

const EditPost = () => {
  return (
    <Container className="w-75">
      <h1>Edit post</h1>
      <EditPostForm />
    </Container>
  );
};

export default EditPost;

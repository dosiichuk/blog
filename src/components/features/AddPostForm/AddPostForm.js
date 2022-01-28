import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addPost } from '../../../redux/postsRedux';
import PostForm from '../PostForm/PostForm';

const AddPostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (postData) => {
    dispatch(addPost(postData));
    navigate('/');
  };

  return <PostForm actionText="Add post" action={handleSubmit} />;
};

export default AddPostForm;

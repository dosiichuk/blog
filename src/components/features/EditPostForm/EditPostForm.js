import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, Navigate } from 'react-router-dom';
import PostForm from '../PostForm/PostForm';
import { getPostById, editPost } from '../../../redux/postsRedux';

const EditPostForm = () => {
  const { id } = useParams();
  const post = useSelector((state) => getPostById(state, id));

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (postData) => {
    dispatch(editPost({ ...postData, id }));
    navigate('/');
  };
  if (!post) return <Navigate to="/" />;
  return <PostForm actionText="Edit post" action={handleSubmit} {...post} />;
};

export default EditPostForm;

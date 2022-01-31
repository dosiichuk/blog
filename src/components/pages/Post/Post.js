import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';

import { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { dateToStr } from '../../../utils/dateToStr';
import { getPostById, deletePost } from '../../../redux/postsRedux';
import ModalRemovePost from '../../views/ModalRemovePost/ModalRemovePost';
import styles from './Post.module.scss';

const Post = () => {
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => getPostById(state, id));

  if (!post) return <Navigate to="/" />;
  return (
    <Row>
      <Container className="col-10 col-md-6 col-lg-4">
        <div className={styles.header}>
          <h2 className="mb-0">{post.title}</h2>
          <div className="button-group w-25 d-flex flex-row justify-content-between">
            <Button
              className="mr-1"
              as={Link}
              to={`/post/edit/${id}`}
              variant="outline-info"
            >
              Edit
            </Button>
            <Button variant="outline-danger" onClick={() => setShowModal(true)}>
              Delete
            </Button>
          </div>
        </div>
        <p className="mt-2 mb-0">
          <span className={styles.postDetails}>Author: </span>
          {post.author}
        </p>
        <p className="mt-0 mb-2">
          <span className={styles.postDetails}>Published: </span>
          {dateToStr(post.publishedDate)}
        </p>
        <div>
          <p dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </Container>
      <ModalRemovePost
        show={showModal}
        handleClose={() => setShowModal(false)}
        handleShow={() => setShowModal(true)}
        removePost={() => dispatch(deletePost(id))}
      />
    </Row>
  );
};

export default Post;

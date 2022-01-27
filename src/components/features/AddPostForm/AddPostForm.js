import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { addPost } from '../../../redux/postsRedux';

const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addPost({ title, author, publishedDate, shortDescription, content })
    );
    setTitle('');
    setAuthor('');
    setPublishedDate('');
    setShortDescription('');
    setContent('');
    navigate('/');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3 w-50" controlId="title">
        <Form.Label>Title:</Form.Label>
        <Form.Control
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3 w-50 metadata" controlId="publishedDate">
        <Form.Label>Author:</Form.Label>
        <Form.Control
          placeholder="Enter author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3 w-50 metadata" controlId="publishedDate">
        <Form.Label>Published:</Form.Label>
        <Form.Control
          placeholder="Date DD-MM-YYYY"
          value={publishedDate}
          onChange={(e) => setPublishedDate(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="shortDescription">
        <Form.Label>Short description:</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          rows={3}
          value={shortDescription}
          onChange={(e) => setShortDescription(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="content">
        <Form.Label>Content:</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          rows={5}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddPostForm;

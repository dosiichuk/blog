import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { useState } from 'react';

const PostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(
    props.shortDescription || ''
  );
  const [content, setContent] = useState(props.content || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    action({ title, author, publishedDate, shortDescription, content });
    setTitle('');
    setAuthor('');
    setPublishedDate('');
    setShortDescription('');
    setContent('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Form.Group className="mb-3 col-12 col-md-6" controlId="title">
          <Form.Label>Title:</Form.Label>
          <Form.Control
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
      </Row>
      <Row>
        <Form.Group
          className="mb-3 col-12 col-md-6 metadata"
          controlId="publishedDate"
        >
          <Form.Label>Author:</Form.Label>
          <Form.Control
            placeholder="Enter author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </Form.Group>
      </Row>
      <Row>
        <Form.Group
          className="mb-3 col-12 col-md-6 metadata"
          controlId="publishedDate"
        >
          <Form.Label>Published:</Form.Label>
          <Form.Control
            placeholder="Date DD-MM-YYYY"
            value={publishedDate}
            onChange={(e) => setPublishedDate(e.target.value)}
          />
        </Form.Group>
      </Row>
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
        {actionText}
      </Button>
    </Form>
  );
};

PostForm.propTypes = {
  action: PropTypes.func.isRequired,
  actionText: PropTypes.string.isRequired,
  title: PropTypes.string,
  author: PropTypes.string,
  publishedDate: PropTypes.string,
  shortDescription: PropTypes.string,
  content: PropTypes.string,
};

export default PostForm;

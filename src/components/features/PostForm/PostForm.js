import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Row } from 'react-bootstrap';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import DatePicker from 'react-datepicker';
import { getAllCategories } from '../../../redux/categoriesRedux';
import 'react-quill/dist/quill.snow.css';
import 'react-datepicker/dist/react-datepicker.css';

const PostForm = ({ action, actionText, ...props }) => {
  const categories = useSelector((state) => getAllCategories(state));
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(
    props.publishedDate || new Date()
  );
  const [category, setCategory] = useState(props.category || categories[0]);
  const [shortDescription, setShortDescription] = useState(
    props.shortDescription || ''
  );
  const [content, setContent] = useState(props.content || '');
  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

  const handleSubmit = (e) => {
    setContentError(!content);
    setDateError(!publishedDate);
    if (content && publishedDate) {
      action({
        title,
        author,
        publishedDate,
        category,
        shortDescription,
        content,
      });
      setTitle('');
      setAuthor('');
      setPublishedDate('');
      setShortDescription('');
      setContent('');
    }
  };

  return (
    <Form onSubmit={validate(handleSubmit)}>
      <Row>
        <Form.Group className="mb-3 col-12 col-md-6" controlId="title">
          <Form.Label>Title:</Form.Label>
          <Form.Control
            {...register('title', { required: true, minLength: 3 })}
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          {errors.title && (
            <small className="d-block form-text text-danger mt-2">
              Title is too short (min is 3)
            </small>
          )}
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
            {...register('author', { required: true, minLength: 3 })}
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          {errors.author && (
            <small className="d-block form-text text-danger mt-2">
              Author must be at least 3 chars long
            </small>
          )}
        </Form.Group>
      </Row>
      <Row>
        <Form.Group
          className="mb-3 col-12 col-md-6 metadata"
          controlId="publishedDate"
        >
          <Form.Label>Published:</Form.Label>

          <DatePicker
            selected={publishedDate}
            onChange={(date) => setPublishedDate(date)}
          />
          {dateError && (
            <small className="d-block form-text text-danger mt-2">
              Date is required
            </small>
          )}
        </Form.Group>
      </Row>
      <Row>
        <Form.Group className="mb-3 col-12 col-md-6 metadata">
          <Form.Label>Category</Form.Label>
          <Form.Select
            name="category"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3" controlId="shortDescription">
        <Form.Label>Short description:</Form.Label>
        <Form.Control
          as="textarea"
          {...register('shortDescription', { required: true, minLength: 20 })}
          placeholder="Leave a comment here"
          rows={3}
          value={shortDescription}
          onChange={(e) => setShortDescription(e.target.value)}
        />
        {errors.shortDescription && (
          <small className="d-block form-text text-danger mt-2">
            Description must be at least 20 chars long
          </small>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="content">
        <Form.Label>Content:</Form.Label>

        <ReactQuill theme="snow" value={content} onChange={setContent} />
        {contentError && (
          <small className="d-block form-text text-danger mt-2">
            Content can't be empty
          </small>
        )}
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
  publishedDate: PropTypes.instanceOf(Date),
  shortDescription: PropTypes.string,
  content: PropTypes.string,
};

export default PostForm;

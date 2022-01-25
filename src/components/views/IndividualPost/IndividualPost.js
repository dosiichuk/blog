import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import styles from './IndividualPost.module.scss';

const IndividualPost = ({
  id,
  title,
  author,
  publishedDate,
  shortDescription,
}) => {
  return (
    <Col className="mb-4" xs={12} md={6} lg={4}>
      <Card className="w-100 text-left rounded" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <div>
            <span className={styles.postDetails}>Author: </span>
            {author}
          </div>
          <Card.Text>
            <span className={styles.postDetails}>Published: </span>
            {publishedDate}
          </Card.Text>
          <Card.Text>{shortDescription}</Card.Text>
          <Button className="btn-primary" as={Link} to={`/post/${id}`}>
            Read more
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default IndividualPost;

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import { getAllCategories } from '../../../redux/categoriesRedux';

const Categories = () => {
  const categories = useSelector(getAllCategories);
  return (
    <Container className="w-75">
      <h2>Categories</h2>
      <Card className="w-100">
        <ListGroup variant="flush">
          {categories.map((category) => (
            <Link key={category} to={`/categories/${category}`}>
              <ListGroup.Item>{category}</ListGroup.Item>
            </Link>
          ))}
        </ListGroup>
      </Card>
    </Container>
  );
};

export default Categories;

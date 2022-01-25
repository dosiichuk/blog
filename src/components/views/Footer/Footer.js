import { Container } from 'react-bootstrap';
import styles from './Footer.module.scss';

const Footer = (props) => {
  return (
    <Container className="text-center mt-4 mb-4 text-muted">
      <p className={styles.footer}>Copyright &copy; Blog.app 2022</p>
    </Container>
  );
};

export default Footer;

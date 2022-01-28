import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import PropTypes from 'prop-types';

const ModalRemovePost = ({ show, handleShow, handleClose, removePost }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This operation will permanently delete the post. Would you like to
          proceed?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={removePost}>
            Remove
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

ModalRemovePost.propTypes = {
  show: PropTypes.bool.isRequired,
  handleShow: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  removePost: PropTypes.func.isRequired,
};

export default ModalRemovePost;

import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

//reusable form input
const FormInput = ({
  id,
  label,
  placeholder,
  value,
  handleChange,
  type = 'input',
}) => {
  return (
    <Form.Group className="mb-3 w-100" controlId={id}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        placeholder={placeholder}
        value={value}
        as={type}
        onChange={handleChange}
      />
    </Form.Group>
  );
};

FormInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  type: PropTypes.string,
};

export default FormInput;

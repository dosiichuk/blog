import Form from 'react-bootstrap/Form';

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

export default FormInput;

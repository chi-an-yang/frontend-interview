import {
  CheckboxLabel,
  CheckboxInput,
  CheckboxDisplay,
} from './Checkbox.style';

const Checkbox = ({
  checked,
  disabled = false,
  handleChange,
  id,
  displayText,
}) => {
  return (
    <CheckboxLabel htmlFor={id}>
      <CheckboxInput
        type="checkbox"
        checked={checked}
        id={id}
        disabled={disabled}
        onChange={handleChange}
      />
      <CheckboxDisplay />
      {displayText}
    </CheckboxLabel>
  );
};

export default Checkbox;

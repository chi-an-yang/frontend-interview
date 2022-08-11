import { Select } from 'antd';
const { Option } = Select;

const Selector = ({
  placeholder,
  size = 'large',
  handleChange,
  selectorOpt,
  style,
}) => {
  return (
    <Select
      style={style}
      placeholder={placeholder}
      size={size}
      onChange={handleChange}>
      {selectorOpt.map((opt) => (
        <Option key={opt.value} value={opt.value}>
          {opt.displayText}
        </Option>
      ))}
    </Select>
  );
};

export default Selector;

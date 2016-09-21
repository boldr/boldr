import SelectField from '../md/SelectFields';
import createFormComponent from './createFormComponent';
import mapError from './mapError';

export default createFormComponent(
  SelectField,
  ({ input: { onChange, ...inputProps }, ...props }) => ({
    ...mapError(props),
    ...inputProps,
    onChange: (event, index, value) => onChange(value)
  }));

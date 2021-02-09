import { create } from 'react-test-renderer';
import Button from '../components/Button';

test('renders correctly', () => {
  const handleClick = () => { ''; };
  const tree = create(<Button clickHandler={handleClick} name="" />).toJSON();
  expect(tree).toMatchSnapshot();
});

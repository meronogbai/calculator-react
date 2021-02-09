import { create } from 'react-test-renderer';
import Quote from '../components/Quote';

test('renders correctly', () => {
  const tree = create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});

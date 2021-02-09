import { create } from 'react-test-renderer';
import Home from '../components/Home';

test('renders correctly', () => {
  const tree = create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});

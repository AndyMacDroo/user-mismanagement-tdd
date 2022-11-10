import { render, waitFor } from '@testing-library/react';
import App from './App';

const tableHeadings = ["Id", "Name", "Username", "Email", "Address street", "Phone", "Website", "Company name"];

describe('userMismanagement', () => {

  test('renders user table', async () => {
    const { getByText } = render(<App />);
    await waitFor(() => {
      expect(getByText(/Users/i)).toBeVisible()
    })
  });

  test.each(tableHeadings)(
    "renders %s heading as expected",
    async (heading) => {
      const { getByText } = render(<App />);
      await waitFor(() => {
        expect(getByText(heading)).toBeVisible()
      })
    }
  );

})

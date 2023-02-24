import { act, render, screen } from '@testing-library/react';
// import axios from 'axios';

// export const mockedApi = axios as jest.Mocked<typeof axios>;

import { Test } from '.';

describe('<Test />', () => {
  it('should ', async () => {
    render(<Test />);

    const promise = Promise.reject();

    // mockedApi.get.mockImplementationOnce(() => promise);

    try {
      await act(() => promise);
    } catch (err) {
      expect(screen.queryByText('Loading')).toBeNull();
      // expect(screen.queryByText('Error')).toBeVisible();
    }
  });
});

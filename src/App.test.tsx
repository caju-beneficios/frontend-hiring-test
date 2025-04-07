import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  test('renders without crashing', () => {
    render(<App />);
    const appElement = screen.getByTestId('app-container');
    expect(appElement).toBeInTheDocument();
  });
});
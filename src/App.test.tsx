import { render, screen } from '@testing-library/react';
import { App } from './App';

describe('./src/App', () => {
  it('should render', async () => {
    render(<App />);
    const title = await screen.findByText('Sandbox');
    expect(title).toBeInTheDocument();
  });
});

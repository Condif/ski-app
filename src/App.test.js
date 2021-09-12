import App from "./App";
import { render, screen } from "./custom-render";

describe('App', () => {
  test('renders App component', async () => {
    render(<App />);
 
    expect(screen.queryByText(/Skidlängd/)).toBeNull();
 
    expect(await screen.findByText(/Skidlängd/)).toBeInTheDocument();
  });
});





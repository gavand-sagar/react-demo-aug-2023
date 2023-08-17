import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders learn react link', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const loginButton = screen.getByTestId('login-button');
  const usernameTextbox = screen.getByTestId('username-txt').querySelector('input');
  const passwordTextbox = screen.getByTestId('password-txt').querySelector('input');


  fireEvent.change(usernameTextbox, { target: { value: "Admin" } })
  fireEvent.change(passwordTextbox, { target: { value: "123" } })
  fireEvent.click(loginButton)


  const orderheading = screen.getByTestId('order-heading')
  expect(orderheading).toBeInTheDocument();

});

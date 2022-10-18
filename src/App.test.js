import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom'; // optional
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders the page', () => {
    render(<App />);
    const title = screen.getByText(/Fake Store/i);
    expect(title).toBeInTheDocument();
});

test('clicking shop takes you to the shop', () => {
    render(<App />);
    const shopButton = screen.getByRole('link', { name: 'Shop' });
    userEvent.click(shopButton);
    const cartButton = screen.getByRole('button', { name: 'Cart' });
    expect(cartButton).toBeInTheDocument();
});

test('adding items updates the total', () => {
    render(<App />);
    const shopButton = screen.getByRole('link', { name: 'Shop' });
    userEvent.click(shopButton);
    const total = screen.getByTestId('total');
    expect(total.textContent).toMatch('Total :0');
    const addButtons = screen.getAllByRole('button', { name: 'Add To Cart' });
    userEvent.click(addButtons[0]);
    expect(total.textContent).not.toMatch('Total :0');
});

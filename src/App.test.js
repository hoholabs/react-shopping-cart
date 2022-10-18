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
    const thingus = screen.getByText(/thingus/i);
    expect(thingus).toBeInTheDocument();
});

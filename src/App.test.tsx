import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders App component with expected content', () => {
    render(<App />);

    // Vérifie que le logo est bien affiché
    const logoElement = screen.getByAltText('logo');
    expect(logoElement).toBeInTheDocument();

    // Vérifie que le texte d'édition est affiché
    // const editMessage = screen.getByText(/Hello World./i);
    // expect(editMessage).toBeInTheDocument();

    // Vérifie que le lien "Learn React" est présent
    const linkElement = screen.getByText(/Learn React/i);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', 'https://reactjs.org');

    // Vérifie que le message "Hello, World!" est affiché
    const helloMessage = screen.getByText(/Bonjour, Aboubacar!/i);
    expect(helloMessage).toBeInTheDocument();
  });
});

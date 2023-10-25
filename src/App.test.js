import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // pour des assertions plus sympas comme "toBeInTheDocument"
import App from './App'; // ajustez le chemin d'importation en fonction de l'emplacement de votre fichier App.js

test('vérifie que le texte "Hello, World!" est présent', () => {
  const { getByText } = render(<App/>);
  const linkElement = getByText(/Hello, World!/i);
  expect(linkElement).toBeInTheDocument();
});

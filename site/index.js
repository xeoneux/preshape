import React from 'react';
import { hydrate, render } from 'react-dom';
import Root from './components/Root';

const rootElement = document.getElementById('Root');

if (rootElement.hasChildNodes()) {
  hydrate(<Root />, rootElement);
} else {
  render(<Root />, rootElement);
}

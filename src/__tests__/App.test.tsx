import {render, screen} from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import '@testing-library/jest-dom/vitest';

import App from '../App';

describe('App', () => {
  afterEach(() => {
    document.getElementsByTagName('html')[0].innerHTML = '';
  });

  it('renders to screen', () => {
    render(<App />);
    expect(screen.queryByTestId('pageHeader')?.textContent).toBe('Welcome to my store!');
  });

  it('contains a navbar', () => {
    render(<App />);
    expect(screen.getByTestId('navBar')).toBeInTheDocument();
  });
});
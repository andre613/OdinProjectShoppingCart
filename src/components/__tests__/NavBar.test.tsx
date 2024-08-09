import {render, screen} from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import '@testing-library/jest-dom/vitest';

import NavBar from '../NavBar';

describe('NavBar', () => {

  afterEach(() => {
    document.getElementsByTagName('html')[0].innerHTML = '';
  });

  it('renders to screen', () => {
    render(<NavBar />);
    expect(screen.getByTestId('navBar')).toBeInTheDocument();
  });
});
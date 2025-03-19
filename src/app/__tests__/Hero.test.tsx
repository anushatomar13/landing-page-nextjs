import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Hero } from '../components/Hero';
import { useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('Hero Component', () => {
  it('renders the Get Started button', () => {
    render(<Hero />);

  
    const button = screen.getByRole('button', { name: /get started/i });
    expect(button).toBeInTheDocument();
  });

  it('navigates to /SignUp when the Get Started button is clicked', () => {
    const push = jest.fn();  
    (useRouter as jest.Mock).mockReturnValue({ push });

    render(<Hero />);

    const button = screen.getByRole('button', { name: /get started/i });
    fireEvent.click(button);

    expect(push).toHaveBeenCalledWith('/SignUp');
  });
});

import React from 'react';
import {render, screen} from '@testing-library/react';
import CompanySearch from './pages/CompanySearch';

test('renders learn react link', () => {
    render(<CompanySearch />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});

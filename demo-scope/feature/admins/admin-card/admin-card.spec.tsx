import React from 'react';
import { render } from '@testing-library/react';
import { BasicAdminCard } from './admin-card.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicAdminCard />);
  const rendered = getByText('hello from AdminCard');
  expect(rendered).toBeTruthy();
});

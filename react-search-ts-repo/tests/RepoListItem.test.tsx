// src/components/RepoListItem.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RepoListItem from '../src/components/RepoItem';

test('renders RepoListItem with + button initially', () => {
  const repo = {
    id: 1,
    full_name: 'Test Repo',
    description: 'A test repository',
    owner: { avatar_url: 'https://example.com/avatar.png' },
  };

  render(<RepoListItem repo={repo} />);

  const addButton = screen.getByRole('button');
  expect(addButton).toHaveTextContent('+');
});

test('toggles RepoListItem button between + and -', () => {
  const repo = {
    id: 2,
    full_name: 'Another Repo',
    description: 'Another test repository',
    owner: { avatar_url: 'https://example.com/another-avatar.png' },
  };

  render(<RepoListItem repo={repo} />);

  const button = screen.getByRole('button');

  // Initial state
  expect(button).toHaveTextContent('+');

  // Click to toggle
  fireEvent.click(button);
  expect(button).toHaveTextContent('-');

  // Click again to toggle back
  fireEvent.click(button);
  expect(button).toHaveTextContent('+');
});


import React from 'react';  // Import React
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { fetchRepositories as fetchRepositoriesMock } from './services/api';
jest.mock('./services/api');

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Repo List/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Repo List', async () => {
  // Mock the response of fetchRepositories
  const mockData = [
    { id: 1, name: 'Repo 1' },
    { id: 2, name: 'Repo 2' },
    // Add more sample data as needed
  ];

  // Provide type information for the mock
  (fetchRepositoriesMock as jest.Mock).mockResolvedValue(mockData);

  render(<App />);

  // Wait for the data to be loaded
  await waitFor(() => {
    const repo1 = screen.getByText('Repo 1');
    const repo2 = screen.getByText('Repo 2');
    expect(repo1).toBeInTheDocument();
    // expect(repo2).toBeInTheDocument();
  });
});


test('check pagination', async () => {
  render(<App />);

  // Use waitFor from @testing-library/react to wait for asynchronous operations
  await waitFor(() => {
    // Assertion 1
    const githubText = screen.getByText(/Repo List/i);
    expect(githubText).toBeInTheDocument();

    // Assertion 2
    const paginationElement = screen.getByTestId('pagination');
    // eslint-disable-next-line testing-library/no-wait-for-multiple-assertions
    expect(paginationElement).toBeInTheDocument();
  });
});

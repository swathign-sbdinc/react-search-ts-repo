
import React from 'react';
import RepoListItem from './RepoItem';
import { Repo } from '../model';

interface RepoListProps {
  repos: Repo[];
}

const RepoList: React.FC<RepoListProps> = ({ repos }) => {
  return (
    <div className='repo-container'>
      {repos.map((repo) => (
        <RepoListItem key={repo.id} repo={repo} />
      ))}
    </div>
  );
};

export default RepoList;

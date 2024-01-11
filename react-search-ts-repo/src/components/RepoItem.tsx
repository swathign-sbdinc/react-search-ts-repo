import React, { useEffect, useState } from 'react';
import { Repo } from '../model';
import './RepoItem.css'; 

interface RepoListItemProps {
  repo: Repo;
}

const RepoListItem: React.FC<RepoListItemProps> = ({ repo }) => {
  const [flag, setFlag] = useState<boolean>(false);

  useEffect(() => {
    const storedFlag = localStorage.getItem(`flag_${repo.id}`);
    if (storedFlag !== null) {
      setFlag(storedFlag === 'true');
    }
  }, [repo.id]);

  const handleToggleFlag = () => {
    const newFlag = !flag;
    setFlag(newFlag);

    localStorage.setItem(`flag_${repo.id}`, String(newFlag));
  };

  return (
    <li className="list-item">
      <img src={repo.owner.avatar_url} alt={`Avatar for ${repo.full_name}`} className="image" />
      <div className="content">
        <h3>{repo.full_name}</h3>
        <p style={{ fontSize: '14px' }}>{repo.description}</p>
      </div>
      <button className="button" onClick={handleToggleFlag}>
        {flag ? '-' : '+'}
      </button>
    </li>
  );
};

export default RepoListItem;

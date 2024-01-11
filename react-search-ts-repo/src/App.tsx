import React, { useState, useEffect } from 'react';
import RepoList from './components/RepoList';
import Pagination from './components/Pagination';
import { DataResponse } from './model';
import { fetchRepositories } from './services/api';

import './AppStyle.css';
const App: React.FC = () => {
  const [repos, setRepos] = useState<DataResponse>();
  const [currentPage, setCurrentPage] = useState<number>(parseInt(localStorage.getItem('currentPage') || '1'));
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const perPage = 10;
        setLoading(true);
        const data = await fetchRepositories(currentPage, perPage);
        setRepos(data);
        setTotalPages(Math.ceil(data.total_count / perPage));
      } catch (error) {
        setError("Error fetching data. Please try again.")
      } finally {
        setLoading(false)
      }
    };

    fetchData();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setError(null)
  };

  return (
    <div className="app-container">
      <h1>GitHub Repo List</h1>
      {loading && !error && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}
      {!loading && error && <div className="error-message">
        <h4>{error}</h4>
        </div>}
      {!loading && !error && (
        <>
          {repos && repos?.items.length > 0 ? (
            <RepoList repos={repos.items} />
          ) : (
            <div className="no-data-message">No data available.</div>
          )}
         
        </>
      )}
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />

    </div>
  );
};

export default App;

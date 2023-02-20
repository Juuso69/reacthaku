import './App.css';
import Header from './components/layout/Header.js';
import React, { useState, useEffect } from 'react';
import Jobs from './components/Jobs';
import Search from './components/layout/Search.js';

function App() {
  useEffect(() => {
    fetch('http://gis.vantaa.fi/rest/tyopaikat/v1/kaikki')
    .then(response => response.json())
    .then(json => setJobs([...json]))
  }, []);

  const handleComplete = (job) => {
    const findCompleted = jobs.map((checkJob) => {
      if (checkJob.id === job.id) {
        checkJob.completed = !checkJob.completed;
      }
    });
    setJobs([...jobs]);
  }

  const initJobs = []
  const [jobs, setJobs] = useState(initJobs);

  const [filterText, setFilterText] = useState('');
  const [showAll, setShowAll] = useState(true)

  const jobsToShow = showAll
        ? jobs
        : jobs.filter(job => job.tyotehtava.toUpperCase().includes(filterText.toUpperCase()))


  const handleFilter = (filteringText) => {
    setFilterText(filteringText);
    if (filteringText === ''){
      setShowAll(true);
    }
    else
    {
      setShowAll(false);
    }
  }

  return <div> 
    <Header /> 
    <Search onFilter={handleFilter}/>
    <Jobs onCompleted={handleComplete} jobs={jobsToShow} />
    <Jobs jobs={jobs}/>
  </div>
}

export default App;

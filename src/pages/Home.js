//Homepage
import React from 'react';
import KPICard from '../components/KPICard';
import { dummyData } from '../data/dummyData';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1 className='heading'>Activity</h1>
      <KPICard title="Total Users" value={dummyData.totalUsers} />
      <KPICard title="Total Posts" value={dummyData.totalPosts} />
      <KPICard title="Users Active in Last 24 Hours" value={dummyData.usersActive24h} />
      <KPICard title="Posts Published in Last 24 Hours" value={dummyData.postsPublished24h} />
    </div>
  );
};

export default Home;

//Postspage.js
import React from 'react';
import { dummyData } from '../data/dummyData';
import '../styles/Posts.css';

const Posts = () => {
  return (
    <div className="posts">
      <div className="kpis">
        <div className="kpi">
          <h3>Total Posts</h3>
          <p>{dummyData.totalPosts}</p>
        </div>
        <div className="kpi">
          <h3>Posts Published in Last 24 Hours</h3>
          <p>{dummyData.postsPublished24h}</p>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Post ID</th>
            <th>Post Caption</th>
            <th>Media URL</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.posts.map(post => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.caption}</td>
              <td>{post.mediaUrl}</td>
              <td>
                <button className='del-button'>Delete</button>
                <button className='hide-button'>Hide</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Posts;

import React from 'react';
import { PostInfo } from '../PostInfo';
import './PostList.scss';

export const PostList = ({ posts }) => (
  <div className="posts">
    {posts.map(post => (
      <PostInfo post={post} key={post.id} />
    ))}
  </div>
);

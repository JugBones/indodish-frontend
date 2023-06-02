import React from 'react';
import styles from '../styles/sections/BlogPost.module.scss';

interface BlogPostProps {
title: string;
content: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, content }) => {
    return (
      <div className={styles.blogPostContainer}>
        <article className={styles.blogPost}>
          <h1 className={styles.blogPostTitle}>{title}</h1>
          <p className={styles.blogPostContent}>{content}</p>
        </article>
      </div>
    );
  };
  

export default BlogPost;
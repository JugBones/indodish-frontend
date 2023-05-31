import React from 'react';
import styles from '../styles/components/RecipePost.module.scss';

interface RecipePostProps {
title: string;
content: string;
}

const RecipePost: React.FC<RecipePostProps> = ({ title, content }) => {
    return (
      <div className={styles.recipePostContainer}>
        <article className={styles.recipePost}>
          <h1 className={styles.recipePostTitle}>{title}</h1>
          <p className={styles.recipePostContent}>{content}</p>
        </article>
      </div>
    );
  };
  

export default RecipePost;
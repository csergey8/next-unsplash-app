import React from 'react';
import styles from './Photo.module.scss';

const Photo = props => {
  return (
    <div className={styles.img}>
      <img src={props.photo.urls.small} />
    </div>
  );
};

export default Photo;
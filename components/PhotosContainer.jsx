import React, { Fragment } from 'react';
import Photo from './Photo';
import { connect } from 'react-redux';
import { useRouter } from 'next/router'
import styles from './PhotosContainer.module.scss'

const PhotosContainer = props => {
  const renderPhotos = () => props.photos.map(photo => <Photo photo={photo}/>)
  const router = useRouter();
  const title = router.asPath.split('/')[2].charAt(0).toUpperCase() + router.asPath.split('/')[2].slice(1)
  return (
    <main className={styles.container}>
      <h1>{title}</h1>
      <div className={styles.photosContainer}>
      {props.loading ? 'Loading' : renderPhotos()}
      </div>
    </main>
  );
};

const mapStateToProps = (state) => ({
  photos: state.photosReducer.photos,
  loading: state.uiReducer.loading
})

export default connect(mapStateToProps)(PhotosContainer);
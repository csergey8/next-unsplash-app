import React, { useState } from "react";
import { connect } from 'react-redux';
import styles from "./Header.modules.scss";
import { setLoading } from '../redux/ui';
import { searchPhotos } from '../redux/photos';
import { useRouter } from 'next/router'

const Header = (props) => {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = ({ target }) => {
    setSearchInput(target.value);
  };

  const onSubmitHamdler = e => {
    e.preventDefault();
    if(searchInput){
      props.searchPhotos(searchInput)
      router.push(`/photos/photos`, `/photos/${searchInput}`, { shallow: true });
    }
  };
  return (
    <div className={styles.header}>
      <form onSubmit={onSubmitHamdler}>
        <input
          onChange={handleInputChange}
          value={searchInput}
          className={styles.searchInput}
          placeholder="Search free high-resolution photo"
        />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.uiReducer.loading
})

const mapDisptachToProps = (dispatch) => ({
  setLoading: () => dispatch(setLoading()),
  searchPhotos: (text) => dispatch(searchPhotos(text))
})

export default connect(mapStateToProps, mapDisptachToProps)(Header);

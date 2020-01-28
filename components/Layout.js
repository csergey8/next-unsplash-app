import Header from './Header';
import styles from './Layout.module.scss';



const Layout = props => (
  <div className={styles.container}>
    <Header />
    {props.children}
  </div>
);

export default Layout;
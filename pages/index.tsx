import Head from 'next/head';
import styles from '../styles/Pigs.module.sass';

const Home: React.FC = () => {
  return (
    <div className={styles.centered}>
      <h1>Welcome to the Index</h1>
      <p></p>
      <h2>PIGS 4 u and PIGS 4 me!!!1oneone</h2>
      <br />
      <br />
      <img
        src="https://i.postimg.cc/BZdB4gBQ/Whats-App-Image-2020-12-20-at-6-40-17-PM.jpg"
        style={{ width: '306px', height: '400px' }}
        alt=""
      />
    </div>
  );
};

export default Home;

import styles from '../styles/Home.module.css';
import MyComp from '../components/my-comp/my-comp';
import List from '../components/list/list';
import Title from '../components/title/title';
import Button from '../components/button/button';
import { useState } from 'react';
import Counter from '../components/counter/counter';
import MovieSelector from '../components/movie/movie';
import People from '../components/people/peopleList';
import LogEffect from '../components/log-effect/logEffect';
import Person from '../components/people/person';

export default function Home() {
  const [foo, setFoo] = useState('bar');

  const handleOnClick = () => {
    setFoo('Fifa');
  };

  return (
    <div className={styles.container}>
      <Title customColor='blue'>Awesome example</Title>
      <People />
    </div>
  );
}

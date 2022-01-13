import styles from '../styles/Home.module.css';
import MyComp from '../components/my-comp/my-comp';
import List from '../components/list/list';
import Title from '../components/title/title';
import Button from '../components/button/button';

export default function Home() {
  return (
    <div className={styles.container}>
      <Title customColor='blue'>Awesome example</Title>
      <List />
      <Button>Click me</Button>
    </div>
  );
}

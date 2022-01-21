import { useState, useEffect } from 'react';
import Axios from 'axios';
import Person from './person';

const People = () => {
  const [people, setPeople] = useState([]);
  const [isLoading, setIsLoadning] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoadning(true);
      const { data } = await Axios.get('https://reqres.in/api/users');
      setPeople(data.data);
      setIsLoadning(false);
      console.log(data);
    }

    fetchData();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <section
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px',
        textAlign: 'center',
      }}
    >
      {people.map(({ id, first_name, email, avatar }) => (
        <Person
          key={id}
          id={id}
          first_name={first_name}
          email={email}
          avatar={avatar}
        />
      ))}
    </section>
  );
};

export default People;

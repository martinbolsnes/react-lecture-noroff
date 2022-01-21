import { useState, useEffect } from 'react';

const LogEffect = () => {
  const [state, setState] = useState(0);
  const [foo, setFoo] = useState(0);

  useEffect(() => {
    console.log('state', state);
  }, [state]);

  return (
    <section>
      <h2>Current state is {state}</h2>
      <br />
      <button onClick={() => setState(state + 1)}></button>
    </section>
  );
};

export default LogEffect;

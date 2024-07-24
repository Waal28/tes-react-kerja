import axios from 'axios';
import { useEffect } from 'react';

const App = () => {
  const getData = async () => {
    try {
      const res = await axios.get('https://sikad.uir.ac.id/online/mydosen1');
      console.log(res);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>React Sleep Detection</h1>
      <p>Jika laptop terbangun dari sleep, maka akan muncul alert.</p>
    </div>
  );
};

export default App;

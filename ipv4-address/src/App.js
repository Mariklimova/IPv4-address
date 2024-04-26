import axios from 'axios'
import { useState, useEffect } from 'react'
import style from './style.module.css'

function App() {

  const [ip, setIp] = useState('');

  const getIp = async () => {
    const response = await axios.get('https://api.ipify.org/?format=json');
    setIp(response.data.ip)
  }

  useEffect(() => {
    getIp()
  }, [])
  
  return (
    <div className={style.wrapper}>
      <h1>{ip}</h1>
      <p>{ip}( This is your IP address...probably :P )</p>
    </div>
  );
}

export default App;

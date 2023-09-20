import React ,{useState}from 'react';
import styles from './MetersToCentimeters.module.css'

function MeterToCentimeters() {
  const [amount,setAmount] =useState("1");
  function handleChange(e){
    setAmount(e.target.value)
  }
  return (
    <div className={styles.container}>
        <div className="column-a">
            <input type="text" value={amount} onChange={handleChange}  />
            <label htmlFor="meter" >미터(m)</label>
        </div>
        <div className="coulmn-b">
            <p>=</p>
        </div>
        <div className='column-c'>
            <input type="text" id="centimeter" value={amount * 100} onChange={handleChange} />
            <label htmlFor="centimeter">센티미터(cm)</label>
        </div>
    </div>
      )
}

export default MeterToCentimeters
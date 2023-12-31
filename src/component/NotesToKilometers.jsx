import React ,{useState}from 'react';
import styles from './MetersToCentimeters.module.css'

function MeterToCentimeters() {
  const [amount,setAmount] =useState("1");
  const [disabled, setDisabled] = useState(false);
  const unit = 100
  function handleChange(e){
    setAmount(e.target.value)
  }
  function handleInverse(){
    setDisabled(prev => !prev); //현재 상태 false를 prev라는 매개변수 제공 + Not!
  }
  function handleReset(){
    setAmount(1);
    setDisabled(false);

  }
  return (
    <div className={styles.wrapper}>
        <div className={styles.container }>
            <div className="column-a">
                <input type="text" value={disabled ? amount / unit :amount}  disabled={disabled} onChange={handleChange}  />
                <label htmlFor="meter" >노트(n)</label>
            </div>
            <div className="coulmn-b">
                <p>=</p>
            </div>
            <div className='column-c'>
                <input type="text" id="centimeter" value={ !disabled ? amount * unit : amount} disabled={!disabled} onChange={handleChange} />
                <label htmlFor="centimeter">킬로미터(km)</label>
            </div>
        </div>
        <div className={styles.btns}>
            <button className={styles.inverse} onClick={handleInverse}>입력반전</button>
            <button className={styles.reset} onClick={handleReset}>초기화</button>
        </div>
    </div>
    )
}

export default MeterToCentimeters
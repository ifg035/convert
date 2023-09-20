
import {useState} from 'react';
import MetersTocentimeters from './component/MeterToCentimeters';
import NotesToKilometers from './component/NotesToKilometers';
import PoundsTokilograms from './component/PoundsTokilograms';

function App() {
  const [option,setOption] = useState('y');
  function handleChange(e){
    setOption(e.target.value);
  }
  return (
    <div className="App">
      <header>
        <h1>단위 환산 앱</h1>
      </header>
      <main>
        <div>
          <select onChange={handleChange} style={{outline: "none" , padding : ".5rem"}} >
            <option value="y" defaultValue={"y"}>
              ==단위==
              </option>
            <option value ="0">길이</option>
            <option value ="1">속도</option>
            <option value ="2" >질량</option>
          </select>
        </div>
        {/* 선택 값에 따라서 컴포넌트 */}
        {option === "y" ? (
          <p className ="text-center">변환하고자 하는 단위를 선택하세요</p> 
          ):null} 
        {option === "0" ? <MetersTocentimeters /> :null} 
        {option === "1" ? <NotesToKilometers /> :null} 
        {option === "2" ? <PoundsTokilograms /> :null} 
      </main>~
      <footer>
        <p>&copy; yeeun. bulid</p>
      </footer>
    </div>
  );
}

export default App;

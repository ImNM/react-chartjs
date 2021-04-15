
import { useState } from 'react';
import './App.css';
import Rechart from './components/Rechart'
function App() {
  const [vieWOption, setvieWOption] = useState(30)

  const onClickYear = () => setvieWOption(30);
  const onClickMonth = () => setvieWOption(7);
  const onClickWeek = () => setvieWOption(1);

  return (
    <div >
      <Rechart vieWOption = {vieWOption}/>
      <button onClick ={onClickYear}>일년</button>
      <button onClick ={onClickMonth}>한달</button> 
      <button onClick ={onClickWeek}>한주</button>
    </div>
  );
}

export default App;

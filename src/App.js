
import { useState } from 'react';
import './App.css';
import AreaChart from './components/AreaChart'
import RechartBar from './components/BarChart'
function App() {
  const [vieWOption, setvieWOption] = useState(30)

  const onClickYear = () => setvieWOption(30);
  const onClickMonth = () => setvieWOption(7);
  const onClickWeek = () => setvieWOption(1);

  return (
    <div >
      <AreaChart vieWOption = {vieWOption}/>
      <button onClick ={onClickYear}>일년</button>
      <button onClick ={onClickMonth}>한달</button> 
      <button onClick ={onClickWeek}>한주</button>
      <RechartBar/>
    </div>
  );
}

export default App;

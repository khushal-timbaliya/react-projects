import logo from './logo.svg';
import './App.css';
import Propes from './components/Propes';
import Usestate from './components/Usestate';
import Classcom from './components/Classcom';
import Function from './components/Function';

function App() {
  let kt = "cart";

  return (
    <>
      <Function />
      <Propes name={kt} xyz="utsav" />
      <Usestate />
      <Classcom />
    </>
  );
}

export default App;

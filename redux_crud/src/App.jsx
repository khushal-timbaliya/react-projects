import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <Provider store={store}>
        <ReduxCounter/>
      </Provider>
    </>
  );
}

export default App;

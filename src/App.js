import './App.css';
import { Provider } from 'react-redux';
import store from './Components/Store';
import Authentication from './Components/Authentication';


function App() {


  return (
    <Provider store={store}>
      <div className="App font-Aveden">
        <h1>
          <u>To-Do List</u>
        </h1>

        <Authentication />

      </div>
    </Provider>
  );
}

export default App;



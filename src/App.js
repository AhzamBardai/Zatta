import './App.css';
import { Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import MainApp from './components/mainApp';


function App() {
  return (
    <div>
      <Route  exact path = '/dashboard'
              component = { Dashboard } />

      <MainApp />
    </div>
  );
}

export default App;

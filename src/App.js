import './App.css';
import { Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'


function App() {
  return (
    <div>
      <Route  exact path = '/dashboard'
              component = { Dashboard } />
    </div>
  );
}

export default App;

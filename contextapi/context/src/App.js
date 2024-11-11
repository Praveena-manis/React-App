import './App.css';
import { AuthProvider } from './components/usecase3/AuthContext';
import UserInfo from './components/usecase3/UserInfo';
function App() {

  return (
    <AuthProvider>
    <div className='App'>
      <h1>Authentication App</h1>
    <UserInfo/>
  </div>
  </AuthProvider>
  );
}

export default App;

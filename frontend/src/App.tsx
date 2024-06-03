import { UserProvider } from '~context/UserContext';
import './App.css';
import { HomePage } from '~components/pages/HomePage';

function App() {
  return (
    <UserProvider>
      <HomePage />
    </UserProvider>
  );
}

export default App;

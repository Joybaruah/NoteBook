import './App.css';
import NoteState from './context/NoteState';
import Home from './pages/Home';

function App() {
  return (
    <>
    <NoteState>
      <Home/>
    </NoteState>
    </>
  );
}
export default App;

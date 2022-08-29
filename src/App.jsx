import "./App.css";
import Header from "./components/Header";
import { UserProvider } from "./components/context/UserProvider";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Header />
      </div>
    </UserProvider>
  );
}

export default App;

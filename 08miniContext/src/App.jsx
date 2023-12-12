import { useState } from "react";
import "./App.css";
import { UserContextProvider } from "./context/UserContext";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  const [user, setUser] = useState(null);
  return (
    <UserContextProvider value={{ user, setUser }}>
      <h1>Context API</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;

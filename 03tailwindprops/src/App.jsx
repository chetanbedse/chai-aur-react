import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-400 text-white p-4 rounded-lg mb-4">
        Tailwind CSS and Props
      </h1>
      <Card
        username="Smriti Mandhana"
        bio="Left Hand Opening Batsman"
        btnText="Click Me"
        src="https://dwz6kul9y5yls.cloudfront.net/youth/wp-content/uploads/2022/07/card_smriti_india.jpg"
      />
      <Card
        username="Harmanpreet Kaur"
        bio="Right Hand Middle Order Batsman"
        src="https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTnw9NbaJ6qpblbqKAtkhfduC0SfC4-x-K8m9jx6C1aX1JrnFytt49aNbaiRD_jXxQg"
      />
      <Card username="Yastika Bhatia" bio="Wicket-Keeper Batsman" />
    </>
  );
}

export default App;

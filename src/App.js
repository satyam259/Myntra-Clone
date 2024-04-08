import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import FetchItems from "./components/Fetchitem";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import HomeItem from "./components/Homeitem";
import Home from "./routes/Home";
import { RiH1 } from "react-icons/ri";

function App() {
  const [search, setSearch] = useState("");
  // const [count, setCount] = useState([]);

  // useEffect(() => {
  //   getdata();
  // }, []);

  // const getdata = async () => {
  //   const fetcher = await fetch("https://jsonplaceholder.typicode.com/posts");
  //   setCount(await fetcher.json());
  // };

  return (
    <div className="App">
      {/* {count.map((v) => {
        return <h1>{v.title}</h1>;
      })} */}
      <Header setSearch={setSearch} />
      {/* <FetchItems /> */}
      <Outlet context={[search]} />
      <Footer />
    </div>
  );
}

export default App;

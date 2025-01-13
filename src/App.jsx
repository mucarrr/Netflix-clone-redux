import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Detail from "./pages/detail/Detail";
import Watchlist from "./pages/watchlist/Watchlist";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import { useDispatch } from "react-redux";
import { getWatchList } from "./redux/action/ListActions";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWatchList());
  }, []);
  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen p-5 md:p-10 lg:px-15 xl:px-20">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<Detail />} />
            <Route path="/watch_list" element={<Watchlist />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

import React from "react";
import Navbar from "../components/Navbar";
import { Outlet, useNavigation } from "react-router";
import Loading from "../components/Loading"

const MainHomeLayout = () => {
  const navigation=useNavigation();
  const isLoading=navigation.state==='loading';

  return (
    <div>
      <Navbar></Navbar>
      {isLoading && <Loading></Loading>}
      <main className="px-24">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default MainHomeLayout;

import React from "react";
import Feed from "../../components/Feed/Feed";
import HomeBox from "../../components/HomeBox/HomeBox";
import Widgets from "../../components/Widgets/Widgets";
import { useLocation, useHistory } from "react-router-dom";
import Login from "../Login/Login";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home() {
  return (
    <HomeBox>
      <Feed />
      <Widgets />
    </HomeBox>
  );
}

export default Home;

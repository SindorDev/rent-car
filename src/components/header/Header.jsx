import { MdSpaceDashboard } from "react-icons/md"; 
/* eslint-disable react/prop-types */
import { useState } from "react";
import { Layout } from "antd";
import logo from "../../images/Logo.png"
import search from "../../images/search-normal.png"
import filter from "../../images/filter.png"
import heart from "../../images/heart.png"
import bell from "../../images/notification.png"
import profileAvatar from "../../images/Profil.png"
import { Link, NavLink, Outlet } from "react-router-dom";
const { Header } = Layout;
const HeaderComponent = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="px-[20px]">
      <Header
      className="w-full max-w-[1440px] mx-auto"
        style={{
          marginTop: "10px",
          display: "flex",
          gap: "25px",
          alignItems: "center",
          padding: 0,
          background: "#fff",
        }}
      >
        <div className="flex items-center justify-between gap-5 w-full">
          <div className="flex items-center w-full max-w-[900px] gap-5 justify-between">

            <Link to={"/"}>
            <img src={logo} alt="" />
            </Link>

            <div className="flex items-center w-full max-w-[500px] h-[45px] gap-[20px] border-[1px] border-[#C3D4E966]  py-[10px] px-[20px] rounded-[70px]">
              <label htmlFor="search">
                <img src={search} alt="Search" />
              </label>
              <input type="text" id="search" className="w-full h-full outline-none border-none bg-transparent" placeholder="Search something here" />
              <img src={filter} alt="Filter" />
            </div>
          </div>
          <div className="flex items-center gap-5 mr-5">
            <NavLink to={"heart"} className="flex items-center justify-center border-[1px] p-[7px] rounded-full ">
              <img src={heart} alt="Heart" />
            </NavLink>
            
            <NavLink to={"notifications"} className="flex items-center justify-center border-[1px] p-[7px] rounded-full ">
              <img src={bell} alt="bell" />
            </NavLink>
            
            <NavLink to={"/dashboard"} className="flex items-center justify-center border-[1px] p-[7px] rounded-full ">
              <MdSpaceDashboard size={27} color="#3D5278" />
            </NavLink>
            
            <NavLink to={"/dashboard/profile"}>
              <img src={profileAvatar} className="w-[40px] h-[40px] rounded-full object-contain" alt="profile" />
            </NavLink>
          </div>
        </div>
      </Header>
      <Outlet context={collapsed} />
    </div>
  );
};

export default HeaderComponent;

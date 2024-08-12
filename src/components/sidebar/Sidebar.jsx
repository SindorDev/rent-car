/* eslint-disable react/prop-types */

import { Button, Layout, Menu, Modal } from "antd";
const { Sider } = Layout;
import home from "../../images/home.svg";
import car from "../../images/car.svg";
import insight from "../../images/chart.svg";
import reim from "../../images/empty-wallet-change.svg";
import inbox from "../../images/message.svg";
import calendar from "../../images/calendar.svg";
import settings from "../../images/setting.svg";
import help from "../../images/info-circle.svg";
import dark from "../../images/briefcase.svg";
import logOut from "../../images/logout.svg";
import  { signOut }  from "../../redux/slices/authSlice";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
const Sidebar = ({ collapsed }) => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');
  const showModal = () => {
    setOpen(true);
  };

  
  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setTimeout(() => {
      dispatch(signOut())
      setOpen(false);
    }, 2000);
  };

  const handleCancel = () => {
    setOpen(false);
  };


  return (
    <>
    
    <div>
      <Sider
      style={{
        background: "white"
      }}
        trigger={null}
        className="h-full w-full flex flex-col justify-between"
        collapsible
        collapsed={collapsed}
      >
        <div className="demo-logo-vertical" />
        <Menu
          className="flex-1 flex flex-col gap-5"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <img src={home} alt="home" />,
              label: <NavLink to={""}>Dashboard</NavLink>,
            },
            {
              key: "2",
              icon: <img src={car} alt="car" />,
              label: <NavLink to={"cars"}>Cars Rent</NavLink>,
            },

            {
              key: "3",
              icon: <img src={insight} alt="insight" />,
              label: <NavLink to={"insight"}>Insight</NavLink>,
            },

            {
              key: "4",
              icon: <img src={reim} alt="reim" />,
              label: <NavLink to={"reimburse"}>Reimburse</NavLink>,
            },
            {
              key: "5",
              icon: <img src={inbox} alt="inbox" />,
              label: <NavLink to={"inbox"}>Inbox</NavLink>,
            },

            {
              key: "6",
              icon: <img src={calendar} alt="calendar" />,
              label: <NavLink to={"calendar"}>Calendar</NavLink>,
            },
            {
              key: "7",
              icon: <img src={settings} alt="settings" />,
              label: <NavLink to={"settings"}>Settings</NavLink>,
            },

            {
              key: "8",
              icon: <img src={help} alt="help" />,
              label: <NavLink to={"help center"}>Help & Center</NavLink>,
            },

            {
              key: "9",
              icon: <img src={dark} alt="dark" />,
              label: "Dark Mode",
            },
          ]}
        />
        <Button danger onClick={showModal} className="p-2 py-5 m-2" type="primary">
          <img src={logOut} alt="log Out" />
          LogOut
        </Button>
      </Sider>
    </div>
    <Modal
        title="Title"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
    </>
  );
};

export default Sidebar;

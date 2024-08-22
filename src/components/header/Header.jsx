import { MdSpaceDashboard } from "react-icons/md"; 
/* eslint-disable react/prop-types */
import { useState } from "react";
import { AutoComplete, Form, Layout } from "antd";
import logo from "../../images/Logo.png"
import searchBar from "../../images/search-normal.png"
import filter from "../../images/filter.png"
import heart from "../../images/heart.png"
import bell from "../../images/notification.png"
import profileAvatar from "../../images/Profil.png"
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import  useSearchParamsHook  from "../../hooks/useQueryParamas";
import { useSearchCarsQuery } from "../../redux/api/cars-api";
const { Header } = Layout;
const HeaderComponent = () => {
  const [search, setSearch] = useState("");
  const [collapsed] = useState(false);
  const {getParam, } = useSearchParamsHook();
  const navigate = useNavigate()
  const {data: searchData} = useSearchCarsQuery({q:search})

  
  const handleSearchSubmit = (value) => {
    navigate(`/search?q=${value.search}`);
  };

  
  const loadData = async (searchText) => {
    try {
      setSearch(searchText);
    } catch (error) {
      console.log(error);
    }
  };


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
                <img src={searchBar} alt="Search" />
              </label>
              <Form  initialValues={{search: getParam("q")}} onFinish={handleSearchSubmit}>
                <Form.Item 
                  name="search"  
                  rules={[{ required: false }]}
                >
                <AutoComplete                
                  onKeyDown={ (e) => {
                    if (e.key === 'Enter') {
                      navigate(`/search?q=${search}`);   
                    }
                  }}
                  options={searchData?.payload?.map((item) => ({
                    label: (
                      <Link
                        className="block bg-transparent border-none"
                        key={item._id}
                        to={`/details/${item._id}`}
                      >
                        {item.name}
                      </Link>
                    ),
                  }))}
                  className="search_input"
                  onSearch={(text) =>
                    text ? loadData(text) : loadData({ payload: [] })
                  }
                  placeholder="Search..."
                />
                </Form.Item>
              </Form>
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

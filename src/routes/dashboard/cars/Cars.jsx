import { Button, message } from "antd";
import {DashboardTitle} from "../../../utils/index"
import { Link, useNavigate, } from "react-router-dom";
import TableComponent from "../../../components/table/Table";
import { useEffect, useState } from "react";
import { useGetCarsQuery, useDeleteCarsMutation } from "../../../redux/api/cars-api";

const Cars = () => {  
  const navigate = useNavigate()
  const { data } = useGetCarsQuery();
  const [deleteCar, {data: deleteCarData, isSuccess}] = useDeleteCarsMutation();
  const [tableParams, setTableParams] = useState({

    pagination: {
      current: 1,
      pageSize: 20,
    },
  });

  const handleCarDelete = (id) => { 
    deleteCar(id)
  }
  useEffect(() => {
    
  if(isSuccess) {
    message.success(deleteCarData.message);
    navigate("/")
  }
  }, [isSuccess])

  const columns = [


    {
      count: 1,
      title: "No",
      key: "id",
      render: (data, current, index) =>
        tableParams.pagination.current * tableParams.pagination.pageSize -
        tableParams.pagination.pageSize +
        (index + 1),
    },
    {
      key: "name",
      title: "Name",
      dataIndex: "name",
      render: (name) => `${name}`,
    },
    
    {
      key: "model",
      title: " Model",
      dataIndex: "model",
      render: (model) => `${model}`,
    },
    
    {
      key: "price",
      title: "Price",
      dataIndex: "price",
      render: (price) => `$${price}`,
    },
    
    {
      key: "Rent price",
      title: "Rent Price",
      dataIndex: "rent_price",
      render: (rent_price) => `$${rent_price}`,
    },
    
    {
      key: "seats",
      title: "Seats",
      dataIndex: "seats",
      render: (seats) => `${seats}`,
    },
    {
      key: "images",
      title: "Images",
      dataIndex: "images",
      render: (thumbnail) => (
        <img src={thumbnail} width={50} alt="name" />
      ),
    },
    {
      key: "transmission",
      title: "Transmission",
      dataIndex: "transmission",
      render: (transmission) => `${transmission}`,
    },
    {
      key: "Action",
      title: "Action",
      // eslint-disable-next-line no-unused-vars
      render: (product) => (
        <div className="flex items-center gap-2 ">
          <Button
            danger
            type="primary"
            onClick={() => {handleCarDelete(product._id)}}
          >
            Delete
          </Button>
        </div>
      ),
      with: "10%",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between">
        <DashboardTitle>Cars</DashboardTitle>
        <Link to={"/create-car"} >
          <Button type="primary">
            Create Cars
          </Button>
        </Link>
      </div>

      <TableComponent
        columns={columns}
        tableParams={tableParams}
        setTableParams={setTableParams}
        url={data?.payload} // Ensure this is the correct array of data
      />
    </div>
  );
};



export default Cars;

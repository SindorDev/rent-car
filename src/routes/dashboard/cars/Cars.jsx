import { Button } from "antd";
import {DashboardTitle} from "../../../utils/index"
import { Link, } from "react-router-dom";
import TableComponent from "../../../components/table/Table";
import { useState } from "react";
import { useGetCarsQuery } from "../../../redux/api/cars-api";

const Cars = () => {  
  const { data } = useGetCarsQuery();
  

  console.log(data); // Check if data is being fetched correctly

  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 5,
    },
  });

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
      title: "Product Name",
      dataIndex: "name",
      render: (name) => `${name}`,
    },
    {
      key: "images",
      title: "Images",
      dataIndex: "images",
      render: (images) => (
        <img src={`${images[0]}`} width={50} alt="product_name" />
      ),
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

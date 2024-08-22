import { DashboardTitle } from "../../../utils/index"
import { useGetOrdersQuery } from "../../../redux/api/cars-api"
import { Button } from "antd"
import TableComponent from "../../../components/table/Table"
import { useState } from "react"
const Reimburse = () => {
  const [current, setCurrent] = useState(1);
  const {data, isLoading} = useGetOrdersQuery()
  


  const columns = [
    {
      title: "No",
      key: "id",
      render: (text, _, index) => (current - 1) * 5 + index + 1,
    },
    
    {
      key: "user-id",
      title: "User ID",
      dataIndex: "_id",
    },
    {
      key: "name",
      title: "Name",
      dataIndex: ["car_id", "name"],
    },
    {
      key: "model",
      title: "Model",
      dataIndex: ["car_id", "model"],
    },
    {
      key: "price",
      title: "Price",
      dataIndex: ["car_id", "price"],
      render: (price) => `$${price}`,
    },
    {
      key: "rent_price",
      title: "Rent Price",
      dataIndex: ["car_id", "rent_price"],
      render: (rent_price) => `$${rent_price}`,
    },
    {
      key: "seats",
      title: "Seats",
      dataIndex: ["car_id", "seats"],
    },
    {
      key: "thumbnail",
      title: "Images",
      dataIndex: ["car_id","thumbnail"],
      render: (thumbnail) => (
        <img src={thumbnail} width={50} alt="Car thumbnail" />
      ),
    },
    {
      key: "transmission",
      title: "Transmission",
      dataIndex: ["car_id", "transmission"],
    },
    {
      key: "action",
      title: "Action",
      render: () => (
        <div className="flex items-center gap-2">
          <Button
            danger
            type="primary"
            // onClick={() => handleCarDelete(product._id)}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <DashboardTitle>Reimburse</DashboardTitle>

    
      <TableComponent
        columns={columns}
        isLoading={isLoading}
        url={data?.payload}
        pagination={{ pageSize: 5, onChange: (page) => setCurrent(page) }}
      />
    </div>
  )
}

export default Reimburse
import { Form, Input, Select } from "antd";
import { useGetCategoriesQuery } from "../../redux/api/categories-api";
import { useForm } from "antd/es/form/Form";
const { TextArea } = Input;
const { Option } = Select;

// eslint-disable-next-line react/prop-types
const BasicInformations = ({carData, setCarData}) => {
  const [form] = useForm()
  const {data} = useGetCategoriesQuery()

  const handleFormChange = () => {
    const values = form.getFieldsValue()
    console.log(values);
    setCarData({...carData, ...values})
  }

  return (
    <div className="mt-5">
      <Form form={form} onChange={handleFormChange} layout="vertical" className="flex flex-col" size="large">
        <div className="flex gap-5">
          <Form.Item
            className="flex-1"
            label="Car Name"
            name="name"
            rules={[{ required: true, message: "Please enter the car name" }]}
          >
            <Input placeholder="Enter car name" />
          </Form.Item>

          <Form.Item
            className="flex-1"
            label="Model"
            name="model"
            rules={[{ required: true, message: "Please enter the model" }]}
          >
            <Input placeholder="Enter car model" />
          </Form.Item>
        </div>

        <div className="flex gap-5">
          <Form.Item
            className="flex-1"
            label="Category"
            name="category"
            rules={[{ required: true, message: "Please select a category" }]}
          >
            <Select placeholder="Select category">
              {
                data?.payload?.map((category) => {
                  return (
                    <Option key={category._id} value={category._id}>{category.name}</Option>
                  )
                })
              }
            </Select>
          </Form.Item>
          <Form.Item
            className="flex-1"
            label="Year"
            name="year"
            rules={[
              {
                required: true,
                message: "Please enter the manufacturing year",
              },
            ]}
          >
            <Input min={"1900"} max={new Date().getFullYear() + 1}  placeholder="Enter manufacturing year" />
          </Form.Item>
        </div>

        <Form.Item
          label="Description"
          name="description"
          rules={[
            { required: true, message: "Please enter the car description" },
          ]}
        >
          <TextArea rows={4} placeholder="Enter car description" />
        </Form.Item>
      </Form>
    </div>
  );
};

export default BasicInformations;

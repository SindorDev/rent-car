import { Form, Select, Input } from "antd"
const { Option } = Select 
const stepFour = () => {
  return (
     <>
          <Form.Item
            name="model"
            label="Model"
            rules={[{ required: true, message: 'Please enter the model!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="category"
            label="Category"
            rules={[{ required: true, message: 'Please select the category!' }]}
          >
            <Select placeholder="Select category">
              <Option value="suv">SUV</Option>
              <Option value="sedan">Sedan</Option>
              <Option value="hatchback">Hatchback</Option>
              <Option value="truck">Truck</Option>
              <Option value="van">Van</Option>
            </Select>
          </Form.Item>
        </>
  )
}

export default stepFour
import { Form, InputNumber, Select } from "antd"
const {Option} = Select
const stepTwo = () => {
  return (
      <>

          <Form.Item
            name="fuel"
            label="Fuel Type"
            rules={[{ required: true, message: 'Please select the fuel type!' }]}
          >
            <Select placeholder="Select fuel type">
              <Option value="petrol">Petrol</Option>
              <Option value="diesel">Diesel</Option>
              <Option value="electric">Electric</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="transmission"
            label="Transmission"
            rules={[{ required: true, message: 'Please select the transmission!' }]}
          >
            <Select placeholder="Select transmission">
              <Option value="automatic">Automatic</Option>
              <Option value="manual">Manual</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="year"
            label="Year"
            rules={[{ required: true, message: 'Please enter the year!' }]}
          >
            <InputNumber min={1900} max={new Date().getFullYear()} />
          </Form.Item>
          <Form.Item
            name="seats"
            label="Seats"
            rules={[{ required: true, message: 'Please enter the number of seats!' }]}
          >
            <InputNumber min={1} max={10} />
          </Form.Item>
        </>

  )
}

export default stepTwo
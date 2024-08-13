import { Form, InputNumber, Select } from "antd"
const {Option} = Select
const stepThree = () => {
  return (
     <>
     <Form.Item
       name="price"
       label="Price"
       rules={[{ required: true, message: 'Please enter the price!' }]}
     >
       <InputNumber
         prefix="$"
         style={{ width: '100%' }}
       />
     </Form.Item>
     <Form.Item
       name="rent_price"
       label="Rent Price"
       rules={[{ required: true, message: 'Please enter the rent price!' }]}
     >
       <InputNumber
         prefix="$"
         style={{ width: '100%' }}
       />
     </Form.Item>
     <Form.Item
       name="color"
       label="Primary Color"
       rules={[{ required: true, message: 'Please select the primary color!' }]}
     >
       <Select placeholder="Select primary color">
         <Option value="red">Red</Option>
         <Option value="blue">Blue</Option>
         <Option value="black">Black</Option>
         <Option value="white">White</Option>
       </Select>
     </Form.Item>
     <Form.Item
       name="colors"
       label="Available Colors"
       rules={[{ required: true, message: 'Please select the available colors!' }]}
     >
       <Select mode="multiple" placeholder="Select available colors">
         <Option value="red">Red</Option>
         <Option value="blue">Blue</Option>
         <Option value="black">Black</Option>
         <Option value="white">White</Option>
         <Option value="green">Green</Option>
         <Option value="yellow">Yellow</Option>
       </Select>
     </Form.Item>
   </>
  )
}

export default stepThree
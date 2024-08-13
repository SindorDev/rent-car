import { Form, Input } from 'antd';
const stepOne = () => {
  return (
     
     <>
     <Form.Item
       name="name"
       label="Name"
       rules={[{ required: true, message: 'Please enter the name!' }]}
     >
       <Input />
     </Form.Item>
     <Form.Item
       name="images"
       label="Images"
       rules={[{ required: true, message: 'Please upload images!' }]}
     >
      <Input/>
     </Form.Item>
     <Form.Item
       name="description"
       label="Description"
       rules={[{ required: true, message: 'Please enter the description!' }]}
     >
       <Input.TextArea />
     </Form.Item>
   </>
  )
}

export default stepOne
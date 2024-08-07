/* eslint-disable react/prop-types */
import { Form, Modal, Input, Button } from 'antd';

const ModalComponent = ({open, setOpen}) => {

     const onFinish = (values) => {
          console.log(values);
     }
     const handleCancel = () => {
          setOpen(false);
     };

     return (
          <Modal
          title="Verify Account"
          open={open}
          onCancel={handleCancel}
          footer={false}
        >
          <Form onFinish={onFinish} layout='vertical'>
               
            <Form.Item label="Enter Your Email">
               <Input />
          </Form.Item>
            <Form.Item label="Enter Your Check Code" hasFeedback validateStatus="success">
               <Input.OTP />
          </Form.Item>
          
    <Form.Item
      wrapperCol={{
        span: 36,
      }}
      className='mt-[35px]'
    >
      <Button  type="primary" htmlType="submit" className='w-full '>
        Submit
      </Button>
    </Form.Item>
          </Form>
        </Modal>
  )
}

export default ModalComponent
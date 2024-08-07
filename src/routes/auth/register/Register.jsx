import { Button, Divider, Form, Input, Typography } from 'antd';
const { Title, Text } = Typography
import { Link, } from 'react-router-dom';
import { useSignUpMutation } from '../../../redux/api/userApi';
import ModalComponent from "../../../components/AuthorizationModal/Modal"
import { useEffect, useState } from 'react';
const Register = () => {
  const [open, setOpen] = useState(false);
  
  const [signUp, {isSuccess, isLoading, data}] = useSignUpMutation();


  console.log(data);
  const onFinish = async (values) => {
    console.log(values);  
    signUp(values)
  };

  useEffect(() => {
    
  }, [isSuccess])

  
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

 
  return (
    <>
    
    <div className='w-full flex justify-center items-center min-h-screen'>
          <div className='shadow-cm flex-col  rounded-[10px] w-full max-w-[500px] p-[20px] flex items-center justify-center'>
      <Title>Register</Title>
<Form

    name="basic"
    layout='vertical'
    labelCol={{
      span: 12,
    }}
    style={{
      maxWidth: 600,
    }}
    wrapperCol={{
      span: 24,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item

      label="FirstName"
      name="first_name"
      rules={[
        {
          required: true,
          message: 'Please input your FirstName!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    
    <Form.Item

      label="LastName"
      name="last_name"
      rules={[
        {
          required: true,
          message: 'Please input your LasttName!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item

    className='w-[350px]'
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your UserName!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    
    <Form.Item

    className='w-[350px]'
      label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your Email!',
        },
      ]}
    >
      <Input />
    </Form.Item>

      <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      wrapperCol={{
        span: 36,
      }}
      className='mt-[35px]'
    >
      <Button disabled={isLoading} loading={isLoading}  type="primary" htmlType="submit" className='w-full '>
        Register
      </Button>
    </Form.Item>
      <Divider>
        Or
      </Divider>
    <Text className='text-center block my-[20px]'> Already have an account? <Link to='/auth'>Login</Link> </Text>
  </Form>
    </div>
      </div>

      <ModalComponent open={open} setOpen={setOpen}/>
    </>
  )
}
export default Register
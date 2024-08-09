import { Button, Divider, Form, Input, Typography } from 'antd';
const { Title, Text } = Typography
import { Link, } from 'react-router-dom';
import { useSignUpMutation } from '../../../redux/api/userApi';
import ModalComponent from "../../../components/authorizationModal/Modal"
import { useEffect, useState } from 'react';
import { capitalPasswordValidation, symbolPasswordValidation, numberPasswordValidation } from "../../../validation/index"
import { signUpUser } from '../../../redux/slices/authSlice';
import { useDispatch } from 'react-redux';
const Register = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch()
  const [signUp, {isSuccess, isLoading, data}] = useSignUpMutation();

  const onFinish = async (values) => {
    console.log(values);  
    signUp(values)
  };

  useEffect(() => {
    if(isSuccess) {
      dispatch(signUpUser(data))
    }
  }, [isSuccess])
  console.log(data);
  
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
      width: "100%",
      maxWidth: 800,
    }}
    wrapperCol={{
      span: 35,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
  <div className='flex items-center w-full gap-2'>
    
  <Form.Item

label="FirstName"
name="first_name"
className='w-full'
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
className='w-full'
rules={[
  {
    required: true,
    message: 'Please input your LastName!',
  },
]}
>
<Input />
</Form.Item>
  </div>

    <Form.Item

    className='w-full'
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

    className='w-full'
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
      hasFeedback={true}
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
        {
          min: 8,
          message: 'Password must be at least 8 characters',
        },
        capitalPasswordValidation, symbolPasswordValidation, numberPasswordValidation
      ]
    }
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
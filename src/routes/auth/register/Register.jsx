import { Button, Divider, Form, Input, InputNumber, message, Typography } from 'antd';
const { Title, Text } = Typography
import { Link, } from 'react-router-dom';
import { useSignUpMutation } from '../../../redux/api/userApi';
import ModalComponent from "../../../components/authorizationModal/Modal";
import { useEffect, useState } from 'react';
import { capitalPasswordValidation, symbolPasswordValidation, numberPasswordValidation } from "../../../validation/index"
const Register = () => {
  const [email, setEmail] = useState("")
  const [open, setOpen] = useState(false);
  const [signUp, {isLoading, data}] = useSignUpMutation();

  const onFinish = async (values) => {
    console.log(values);  
    signUp(values)
    setEmail(values.email)
  };

  useEffect(() => {
    if(data && data.statusCode === 201) {
      setOpen(true)
      message.success(data.message)
    }
  }, [data])

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

 
  return (
    <>
    
    <div className='w-full flex justify-center items-center min-h-screen p-5'>
          <div className='shadow-cm flex-col  rounded-[10px] w-full max-w-[500px] p-5 flex items-center justify-center'>
      <Title>Register</Title>
<Form
    name="basic"
    layout='vertical'
    labelCol={{
      span: 12,
    }}
    style={{
      width: "100%",
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
name="firstName"
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
name="lastName"
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
      <div className='flex gap-3 w-full'>
        

  <Form.Item
  className='w-full'
  label="Password"
  hasFeedback={true}
  name="password"
  rules={[
    {
      required: true,
      message: 'Please input your password!',
    },
    {
      max: 6,
      message: 'Password must be at  least 6 characters',
    },
    capitalPasswordValidation, symbolPasswordValidation, numberPasswordValidation
  ]
}
>
  <Input.Password />
</Form.Item>

<Form.Item
  label="Age"
  name="age"
  rules={[
    {
      required: true,
      message: 'Please input your Age!',
    },
  ]}
>
  <InputNumber />
</Form.Item>
      </div>
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

      <ModalComponent open={open} email={email} setOpen={setOpen}/>
    </>
  )
}
export default Register
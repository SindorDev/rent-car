import { Button, Form, Input, Typography, Divider } from 'antd';
import { Link} from 'react-router-dom';
const { Title, Text } = Typography

const Login = () => {

  const onFinish = async (values) => {
    console.log(values)
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
      <div className='w-full min-h-screen flex items-center justify-center'>
        
    <div className='shadow-cm rounded-[10px] w-full max-w-[500px]  py-[20px] flex-col flex items-center justify-center'>
      <Title>Login</Title>
<Form

    name="basic"
    layout='vertical'
    style={{
      maxWidth: 600,
    }}
    labelCol={{
      span: 8,
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
    className='w-[350px]'
      label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your Email!',
        }
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
      className=' mt-[35px]'
    >
      <Button type="primary"  htmlType="submit" className='w-full'>
        Login
      </Button>
    </Form.Item>
    
    <Divider>
        Or
      </Divider>
      <Text className='text-center block my-[20px]'> Dont have an account? <Link to={"/auth/register"} >Register</Link> </Text>
  </Form>
    </div>
      </div>
  )
}
export default Login
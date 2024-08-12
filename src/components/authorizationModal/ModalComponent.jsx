/* eslint-disable react/prop-types */
import {  Modal, Input, message,  } from 'antd';
import { useVerifyOtpMutation } from '../../redux/api/userApi';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ModalComponent = ({open, email, setOpen}) => {
  const navigate = useNavigate()
  const [verifyOtp, {data,}] = useVerifyOtpMutation();

     const handleCancel = () => {
          setOpen(false);
     };

     const onChange = (text) => {
      verifyOtp({email, otp: text})
    };

    useEffect(() => {
      if(data && data.statusCode === 200) {
        setOpen(false);
        message.success(data.message)
        navigate("/auth")
      }
    }, [data])
  
    console.log(data);
    const sharedProps = {
      onChange,
    };
     return (
          <Modal
          title="Verify Account"
          open={open}
          onCancel={handleCancel}
          footer={false}
        >
           <Input.OTP  {...sharedProps} />
        </Modal>
  )
}

export default ModalComponent
/* eslint-disable react/prop-types */
import { Input, message } from "antd";
import { useVerifyOtpMutation } from "../../redux/api/userApi";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Verify = () => {
  const navigate = useNavigate();
  const {email: emailData} = useParams()
  const [verifyOtp, { data }] = useVerifyOtpMutation();

  const emailUser = atob(emailData.split("=")[0]);

  const onChange = (text) => {
    verifyOtp({ emailUser, otp: text });
  };
  useEffect(() => {
    if (data && data.statusCode === 200) {
      message.success(data.message);
      navigate("/auth");
    }
  }, [data]);
  console.log(data);
  const sharedProps = {
    onChange,
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Input.OTP {...sharedProps} />
    </div>
  );
};

export default Verify;

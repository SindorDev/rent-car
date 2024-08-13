import  { useState } from "react";
import { Steps, Button, Form, message } from "antd";
import stepOne from "../stepOne/stepOne";
import stepTwo from "../stepTwo/stepTwo";
import stepThree from "../stepThree/stepThree";
import stepFour from "../stepFour/stepFour";
const { Step } = Steps;

const StepForm = () => {
  const [current, setCurrent] = useState(0);
  const [form] = Form.useForm();

  const steps = [
    {

      title: 'Name',
      content: stepOne(form, message),
    },
    {

      title: 'Technical Details',
      content: stepTwo(),
    },
    {

      title: 'Pricing and Colors',
      content: stepThree(),
    },
    {

      title: 'Model and Category',
      content: stepFour(),
    },

  ];

  const next = () => {
    form.validateFields().then(() => {
      setCurrent(current + 1);
    })
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const onFinish = (values) => {
    message.success('Form submitted successfully!');
    console.log('Form data:', values);
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="my-6">
        <Form form={form} layout="vertical" onFinish={onFinish}>
          {steps[current].content}
          <div className="flex justify-between mt-6">
            {current > 0 && (
              <Button onClick={prev}>
                Previous
              </Button>
            )}
            {current < steps.length - 1 && (
              <Button type="primary" onClick={next}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            )}
          </div>
        </Form>
      </div>
    </div>
  );
};

export default StepForm;

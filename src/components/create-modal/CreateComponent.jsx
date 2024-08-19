import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { Button, message, Steps } from "antd";
import BasicInformations from "../../components/stepOne/stepOne";
import VisualInformations from "../../components/stepTwo/stepTwo";
import TechnicalInformations from "../../components/stepThree/stepThree";
import { useSendCarFormMutation } from "../../redux/api/cars-api"
import { useNavigate } from "react-router-dom";

const steps = [
  {
    title: "Basic Information",
    content: (carData, setCarData) => <BasicInformations carData={carData} setCarData={setCarData} />,
  },
  {
    title: "Visual and Pricing Information",
    content: (carData, setCarData) => <VisualInformations carData={carData} setCarData={setCarData} />,
  },
  {
    title: "Technical Information",
    content: (carData, setCarData) =>  <TechnicalInformations carData={carData} setCarData={setCarData} />,
  },
];

const Create = () => {
  // eslint-disable-next-line no-unused-vars
  const [sendCarForm, {data, isSuccess}] = useSendCarFormMutation();
  const navigate = useNavigate()
  const [carData, setCarData] = useState({

    name:"",
    images: [],
    description: "",
    category: "",
    model: "",
    color: "", 
    transmission: "",
    seats: null,
    year: null,
    status: "active",
    fuel: null,
    price: null,
    rent_price: null,
    discount: null,
    thumbnail: [],
    usage_per_km: null
  })
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const handleSendForm = () => {
    sendCarForm(carData)
    message.success("Processing complete!")
  }

  useEffect(() => {
    if(isSuccess) {
      message.success(data.message)
      navigate("/")
    }
  }, [isSuccess])
  return (

    <div className="container flex items-center justify-center pt-[50px]">
    <div className="flex flex-col justify-between shadow-cm gap-10 rounded-xl max-w-[800px] bg-white p-10 lg:flex-row">
      <div className="flex h-auto flex-col justify-between lg:flex-1">
        <Steps current={current} items={items} className="mb-10" />

        <div className="flex h-auto flex-1 flex-col justify-between">
          <div>{steps[current].content(carData, setCarData)}</div>

          <div className="mt-10 flex justify-end space-x-3">
            {current > 0 && (
              <Button size="large" onClick={() => prev()}>
                Previous
              </Button>
            )}
            {current < steps.length - 1 ? (
              <Button
                size="large"
                type="primary"
                onClick={() => next()}
                className="bg-blue-500"
              >
                Next
              </Button>
            ) : (
              <Button
                size="large"
                type="primary"
                onClick={handleSendForm}
                className="bg-green-500"
              >
                Done
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Create;

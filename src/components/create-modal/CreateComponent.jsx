import { useState } from "react";
import { Button, message, Steps } from "antd";
import BasicInformations from "../../components/stepOne/stepOne";
import VisualInformations from "../../components/stepTwo/stepTwo";
import TechnicalInformations from "../../components/stepThree/stepThree";

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
  const [carData, setCarData] = useState({
    name:"",
    images: [],
    description: "",
    category: "",
    models: "",
    color: "", 
    transmission: "",
    seats: null,
    year: null,
    fuel: null,
    price: null,
    rent_price: null,
    discount: null,
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

  console.log(carData);

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
                onClick={() => message.success("Processing complete!")}
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

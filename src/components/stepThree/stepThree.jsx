import { Form, Input, Upload, InputNumber, ColorPicker } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useForm } from "antd/es/form/Form";
import { useSendUploadFileMutation } from "../../redux/api/upload-api";

// eslint-disable-next-line no-unused-vars
const VisualInformations = (carData, setCarData) => {

    const [sendUploadFile, {data}] = useSendUploadFileMutation()

  const [form] = useForm()

  const handleFormChange = () => {
    const values = form.getFieldsValue()
    console.log(values);
  }

  const handleUploadFiles = ({file, fileList}) => {
    if(file.status !== "uploading") {
      const formData = new FormData()

      for (let i = 0; i < fileList.length; i++) {
        formData.append("files", fileList[i].originFileObj) 
      }

      sendUploadFile(formData)
      console.log(fileList);
    }
  }

  console.log(data);
  return (
    <Form form={form} onChange={handleFormChange} layout="vertical" className="flex flex-col" size="large">
      <Form.Item
        label="Car Images"
        name="images"
        rules={[{ required: true, message: "Please upload car images" }]}
      >
        <Upload listType="picture-card" onChange={handleUploadFiles} action={"http://13.51.206.62:8000/api/upload/files"} multiple beforeUpload={() => false}>
          <div>
            <UploadOutlined />
            <div className="mt-2">Upload</div>
          </div>
        </Upload>
      </Form.Item>

      <Form.Item
        label="Thumbnail Image"
        name="thumbnail"
        rules={[{ required: true, message: "Please upload a thumbnail image" }]}
      >
        <Upload listType="picture-card" beforeUpload={() => false}>
          <div>
            <UploadOutlined />
            <div className="mt-2">Upload</div>
          </div>
        </Upload>
      </Form.Item>

      <div className="flex items-center gap-5">
        <Form.Item
          className="flex-1"
          label="Primary Color"
          name="color"
          rules={[
            { required: true, message: "Please enter the primary color" },
          ]}
        >
          <ColorPicker defaultValue="#1677ff" size="large" showText />
          {/* <Input placeholder="Enter primary color" /> */}
        </Form.Item>

        <Form.Item
          className="flex-1"
          label="Available Colors (HEX Code)"
          name="colors"
          rules={[{ required: true, message: "Please enter available colors" }]}
        >
          <Input placeholder="Enter available colors (comma separated)" />
        </Form.Item>
      </div>

      <div className="flex items-center gap-5">
        <Form.Item
          className="flex-1"
          label="Purchase Price"
          name="price"
          rules={[
            { required: true, message: "Please enter the purchase price" },
          ]}
        >
          <InputNumber
            min={0}
            formatter={(value) => `$ ${value}`}
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            placeholder="Enter purchase price"
            className="w-full"
          />
        </Form.Item>

        <Form.Item
          className="flex-1"
          label="Rent Price"
          name="rent_price"
          rules={[{ required: true, message: "Please enter the rent price" }]}
        >
          <InputNumber
            min={0}
            formatter={(value) => `$ ${value}`}
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            placeholder="Enter rent price"
            className="w-full"
          />
        </Form.Item>

        <Form.Item
          className="flex-1"
          label="Discount Rent Price"
          name="discount_rent_price"
          rules={[{ required: false }]}
        >
          <InputNumber
            min={0}
            formatter={(value) => `$ ${value}`}
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            placeholder="Enter discount rent price (optional)"
            className="w-full"
          />
        </Form.Item>
      </div>
    </Form>
  );
};

export default VisualInformations;

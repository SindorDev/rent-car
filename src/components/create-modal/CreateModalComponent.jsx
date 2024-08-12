/* eslint-disable react/prop-types */
import { Modal, Input, Form } from "antd";

const CreateModalComponent = ({ visible, handleCancel, handleOk }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form Values:", values);
    handleOk(values);
    form.resetFields();
  };

  return (
    <Modal
      title="Car Information"
      visible={visible}
      onCancel={handleCancel}
      onOk={() => form.submit()}
      cancelText="Cancel"
      centered
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        className="space-y-4"
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: "Please enter the car name" }]}
        >
          <Input placeholder="Enter car name" />
        </Form.Item>

        <Form.Item
          name="images"
          label="Images"
          rules={[{ required: true, message: "Please provide image URLs" }]}
        >
          <Input placeholder="Enter image URLs separated by commas" />
        </Form.Item>

        <Form.Item
          name="modelDescription"
          label="Model Description"
          rules={[
            { required: true, message: "Please enter model description" },
          ]}
        >
          <Input placeholder="Enter model description" />
        </Form.Item>

        <Form.Item
          name="price"
          label="Price"
          rules={[{ required: true, message: "Please enter the price" }]}
        >
          <Input placeholder="Enter price" />
        </Form.Item>

        <Form.Item
          name="rent_price"
          label="Rent Price"
          rules={[{ required: true, message: "Please enter the rent price" }]}
        >
          <Input placeholder="Enter rent price" />
        </Form.Item>

        <Form.Item
          name="category"
          label="Category"
          rules={[{ required: true, message: "Please enter the category" }]}
        >
          <Input placeholder="Enter category" />
        </Form.Item>

        <Form.Item
          name="year"
          label="Year"
          rules={[{ required: true, message: "Please enter the year" }]}
        >
          <Input placeholder="Enter year" />
        </Form.Item>

        <Form.Item
          name="fuel"
          label="Fuel Type"
          rules={[{ required: true, message: "Please enter fuel type" }]}
        >
          <Input placeholder="Enter fuel type" />
        </Form.Item>

        <Form.Item
          name="colors"
          label="Available Colors"
          rules={[{ required: true, message: "Please enter available colors" }]}
        >
          <Input placeholder="Enter available colors separated by commas" />
        </Form.Item>

        <Form.Item
          name="color"
          label="Primary Color"
          rules={[{ required: true, message: "Please enter primary color" }]}
        >
          <Input placeholder="Enter primary color" />
        </Form.Item>

        <Form.Item
          name="transmission"
          label="Transmission"
          rules={[
            { required: true, message: "Please enter transmission type" },
          ]}
        >
          <Input placeholder="Enter transmission type" />
        </Form.Item>

        <Form.Item
          name="seats"
          label="Number of Seats"
          rules={[
            { required: true, message: "Please enter the number of seats" },
          ]}
        >
          <Input placeholder="Enter number of seats" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateModalComponent;

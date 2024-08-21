/* eslint-disable react/prop-types */
import { Button, Form, Input, message, Modal, Select, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useSendThumbnailFileMutation } from "../../redux/api/upload-api";
import { useEffect, useState } from "react";
import { useForm } from "antd/es/form/Form";
import { useCreateCategoriesMutation } from "../../redux/api/categories-api";

const CategoryModal = ({ open, setOpen }) => {
     const [form] = useForm();
     const [categoryData, setCategoryData] = useState({
       name: "",
       status: "",
       image: []
     });
  const [sendThumbnailFile, { data: thumbnailData }] =
    useSendThumbnailFileMutation();
  const [createCategories, { data: createData, isSuccess }] = useCreateCategoriesMutation();
  const onFinish = () => {
    createCategories({ ...categoryData });
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleThumbnailFiles = ({ file }) => {
    if (file.status !== "uploading") {
      const formData = new FormData();
      formData.append("file", file);
      sendThumbnailFile(formData);
    }
  };

  const handleFormChange = () => {
    const values = form.getFieldsValue();
    setCategoryData({ ...categoryData, ...values, image: categoryData?.image });
  }
  
  useEffect(() => {
     if (thumbnailData?.payload) {
       setCategoryData(prevData => ({ ...prevData, image: thumbnailData?.payload }));
     }
   }, [thumbnailData]);

   useEffect(() => {
      if(isSuccess) {
        setOpen(false)
        form.resetFields()
        message.success(createData?.message)
        setCategoryData({ name: "", status: "", image: [] })
      }
   }, [createData, isSuccess])

  return (
    <div>
      <Modal title="Title" open={open} onCancel={handleCancel} footer={false}>
          <Form form={form} onValuesChange={handleFormChange} onFinish={onFinish} layout="vertical" autoComplete="off" size="large" >
          <Form.Item
      label="name"
      name="name"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>
      <div className="flex items-center justify-between">
          
      <Form.Item
          label="Thumbnail Image"
          name="image"
          rules={[
            { required: true, message: "Please upload a thumbnail image" },
          ]}
        >
          <Upload
            listType="picture-card"
            beforeUpload={() => false}
            onChange={handleThumbnailFiles}
          >
            <div>
              <UploadOutlined />
              <div className="mt-2">Upload</div>
            </div>
          </Upload>
        </Form.Item>
        
        <Form.Item

          className="flex-1"
          name="status"
          rules={[{ required: true, message: "Please enter the status" }]}
        >   
       <Select
    style={{
      width: '100%',
    }}
    options={[
      {
        value: 'active',
        label: 'active',
      },
      {
        value: 'inactive',
        label: 'inactive',
        disabled: true,
      },
    ]}
  />
        </Form.Item>
      </div>
      <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
          </Form>
      </Modal>
    </div>
  );
};

export default CategoryModal;

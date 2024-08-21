/* eslint-disable no-unused-vars */
import { Card, Typography, Row, Col, Divider, Image, Upload, Button  } from 'antd';
import avatar from "../../../images/avatarImage.webp"
import { useGetUserInfoQuery, useUpdateUserMutation } from "../../../redux/api/userInfo";
import { useRemoveImageMutation, useSendThumbnailFileMutation } from '../../../redux/api/upload-api';
import { useEffect } from 'react';
const { Title, Paragraph, Text } = Typography;

const ProfilePage = () => {
  const { data: payload } = useGetUserInfoQuery();
  const [sendThumbnailFile, { data }] = useSendThumbnailFileMutation();
  const [updateUser, {data:updateData}] = useUpdateUserMutation()
  const [removeImage, {data: removeImageData}] = useRemoveImageMutation()
  const handleUploadFiles = ({file}) => {
    if(file.status !== "uploading") {
     const formData = new FormData()
     formData.append("file", file)
     sendThumbnailFile(formData)
  }
}
useEffect(() => {
  if(data?.payload) {
    updateUser({ body: data?.payload, id: payload?.payload?._id})
  }
}, [data])

  return (
    <div style={{ padding: '20px' }}>
      <Card
        style={{ maxWidth: 1100,  margin: '0 auto', borderRadius: '10px' }}
      >
        <div className='flex items-center flex-col gap-5 justify-center'>
         <Image
            width={200}
            height={200}
            className='object-contain'
            src="error"
            fallback={payload?.payload?.avatar ? payload?.payload?.avatar : avatar}
            style={{marginBottom: "50px", borderRadius: "50%"}}
/>

<Upload onChange={handleUploadFiles} onRemove={({file}) => removeImage( { name: file?.name})} multiple beforeUpload={() => false}>
            <Button> Upload Image  </Button>
        </Upload>
        </div>

        <Title level={2} style={{ textAlign: 'center' }}>{payload?.payload?.first_name}  {payload?.payload?.last_name}</Title>
        <Paragraph style={{ textAlign: 'center' }}>
          Full Stack Developer | Tech Enthusiast | Frontend Developer
        </Paragraph>
        <Divider />
        <Row className='ml-[100px]'>
          <Col span={7}>
            <Text strong>Email</Text>
            <Paragraph>{payload?.payload?.email}</Paragraph>
          </Col>
          <Col span={7}>
            <Text strong>Role</Text>
            <Paragraph>{payload?.payload?.role}</Paragraph>
          </Col>
          
          <Col span={7} className='mr-12'>
            <Text strong>ID</Text>
            <Paragraph>{payload?.payload?._id}</Paragraph>
          </Col>
        </Row>

      </Card>
    </div>
  );
};

export default ProfilePage;
import { Card, Typography, Row, Col, Divider, Image, Upload, Button  } from 'antd';
import avatar from "../../../images/avatarImage.webp"
import { useGetUserInfoQuery } from "../../../redux/api/userInfo";
import { useRemoveImageMutation, useSendThumbnailFileMutation } from '../../../redux/api/upload-api';
import { useEffect, useState } from 'react';
const { Title, Paragraph, Text } = Typography;

const ProfilePage = () => {
  const { data: payload } = useGetUserInfoQuery();
  const [sendThumbnailFile, { data }] = useSendThumbnailFileMutation();
  const [removeImage, {data: removeImageData}] = useRemoveImageMutation()
  const [profileAvatar, setProfileAvatar] = useState(null);
  const handleUploadFiles = ({file}) => {
    if(file.status !== "uploading") {
     const formData = new FormData()
     formData.append("file", file)
     sendThumbnailFile(formData)
  }
}
useEffect(() => {
  if(data?.payload) {
    setProfileAvatar(data?.payload)
  }
}, [data])
  return (
    <div style={{ padding: '20px' }}>
      <Card
        style={{ maxWidth: 1100,  margin: '0 auto', borderRadius: '10px' }}
      >
        
        <Upload onChange={handleUploadFiles} onRemove={({file}) => removeImage( { name: file?.name})} multiple beforeUpload={() => false}>
            <Button> Upload Image  </Button>
        </Upload>
        <div className='flex items-center object-contain object-center justify-center'>
         <Image
            width={200}
            height={200}
            src="error"
            fallback={profileAvatar ? profileAvatar : avatar}
            style={{marginBottom: "50px", borderRadius: "50%"}}
/>
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
import { Card, Typography, Row, Col, Divider, Image  } from 'antd';
import avatar from "../../../images/avatarImage.webp"
import { useOutletContext } from 'react-router-dom';
const { Title, Paragraph, Text } = Typography;

const ProfilePage = () => {
    const data = useOutletContext()  

  return (
    <div style={{ padding: '20px' }}>
      <Card
        style={{ maxWidth: 1100, margin: '0 auto', borderRadius: '10px' }}
        
      >
        <div className='flex items-center justify-center'>
         <Image
            width={200}
            height={200}
            src="error"
            fallback={avatar}
            style={{marginBottom: "50px", borderRadius: "50%"}}
/>
        </div>
        <Title level={2} style={{ textAlign: 'center' }}>{data?.firstName}</Title>
        <Paragraph style={{ textAlign: 'center' }}>
          Full Stack Developer | Tech Enthusiast | Frontend Developer
        </Paragraph>
        <Divider />
        <Row className='ml-[100px]'>
          <Col span={5}>
            <Text strong>LastName</Text>
            <Paragraph>{data?.lastName}</Paragraph>
          </Col>
          <Col span={5}>
            <Text strong>Role</Text>
            <Paragraph>{data?.role}</Paragraph>
          </Col>
          
          <Col span={7} className='mr-12'>
            <Text strong>ID</Text>
            <Paragraph>{data?.id}</Paragraph>
          </Col>

          <Col span={4}>
            <Text strong>Age</Text>
            <Paragraph>{data?.age}</Paragraph>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default ProfilePage;
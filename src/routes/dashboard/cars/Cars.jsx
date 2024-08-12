import { Button } from "antd"
import {DashboardTitle} from "../../../utils/index"
import { useState } from "react";
import CreateModalComponent from "../../../components/create-modal/CreateModalComponent";

const Cars = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const showModal = () => {
    setModalVisible(true);
};

const handleCancel = () => {
    setModalVisible(false);
};

const handleOk = (formData) => {
    console.log('Saved Data:', formData);
    setModalVisible(false);
};

  return (
    <div>
      <div className="flex items-center justify-between">
      <DashboardTitle>Cars</DashboardTitle>
      <Button onClick={showModal} type="primary">Create Cars</Button>
      </div>


      <CreateModalComponent
                visible={modalVisible}
                handleCancel={handleCancel}
                handleOk={handleOk}
            />
    </div>
  )
}

export default Cars
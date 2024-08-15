/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
import { Table } from 'antd';

const TableComponent = ({tableParams, columns, url }) => {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState(url);
  const [loading] = useState(false);

  console.log(data);
  return (
    <Table
    columns={columns}
    rowKey={(product) => product._id}
      dataSource={data?.map((product) => ({key: product._id, ...product}))}
      pagination={tableParams.pagination}
      loading={loading}
      url={url}
    />
  );
};
export default TableComponent;
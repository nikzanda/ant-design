import React from 'react';
import { CloseSquareFilled } from '@ant-design/icons';
import { InputNumber, Space } from 'antd';

const App: React.FC = () => (
  <Space vertical>
    <InputNumber allowClear defaultValue={100} />
    <InputNumber allowClear defaultValue={0} suffix="kg" />
    <InputNumber allowClear mode="spinner" defaultValue={0} />
    <InputNumber allowClear={{ clearIcon: <CloseSquareFilled /> }} defaultValue={100} />
  </Space>
);

export default App;

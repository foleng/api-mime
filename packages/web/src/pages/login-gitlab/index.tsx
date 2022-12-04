import { ProForm, ProFormRadio, ProFormText } from '@ant-design/pro-components';
import { Col, message, Row, Space } from 'antd';
import axios from 'axios'
import { useState } from 'react';

type LayoutType = Parameters<typeof ProForm>[0]['layout'];
const LAYOUT_TYPE_HORIZONTAL = 'horizontal';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export default () => {
  const [formLayoutType, setFormLayoutType] = useState<LayoutType>(LAYOUT_TYPE_HORIZONTAL);

  const formItemLayout =
    formLayoutType === LAYOUT_TYPE_HORIZONTAL
      ? {
          labelCol: { span: 4 },
          wrapperCol: { span: 14 },
        }
      : null;

  const submit =async (values) => {
    console.log("values",values);
    fetch("http://localhost:3000/user/gitlab", {
      
    })
    axios({
  method: 'post',
  url: 'http://localhost:3000/user/gitlab',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
});
  

  } 

  return (
    <ProForm<{
      name: string;
      company?: string;
      useMode?: string;
    }>
      {...formItemLayout}
      layout={formLayoutType}
      onFinish={submit}
    >
      <ProFormText
        width="md"
        name="name"
        label="用户名"
        placeholder="请输入名称"
      />
      <ProFormText.Password
      label="密码"
      name="password"
      fieldProps={{
        size: 'large',
      }}
      placeholder={"请输入密码"}
      rules={[
        {
          required: true,
          message: '请输入密码',
        },
      ]}
     />
    </ProForm>
  );
};
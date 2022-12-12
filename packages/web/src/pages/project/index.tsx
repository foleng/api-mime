import { EllipsisOutlined, PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable, TableDropdown, ModalForm, ProFormText } from '@ant-design/pro-components';
import { Button, Dropdown, message, Space, Tag } from 'antd';
import { useRef,useState } from 'react';
import * as dayjs from 'dayjs';
import {createProject, deleteProject, getProjects} from './api'

type GithubIssueItem = {
  _id: number;
  name: string;
  status: string;
  resource: string;
  createdTime: string;
  updatedTime: string;
};

const columns: ProColumns<GithubIssueItem>[] = [
  {
    title: '标题',
    dataIndex: 'name',
    copyable: true,
    ellipsis: true,
    tip: '标题过长会自动收缩',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
  },
  {
    disable: true,
    title: '状态',
    dataIndex: 'status',
    filters: true,
    onFilter: true,
    ellipsis: true,
    valueType: 'select',
    valueEnum: {
      fail: {
        text: '解析失败',
        status: 'Success',
        disabled: true,
      },
      done: {
        text: '解析成功',
        status: 'Success',
        disabled: true,
      },
      pending: {
        text: '解析中',
        status: 'Processing',
      },
    },
  },
  {
    title: '创建时间',
    key: 'showTime',
    dataIndex: 'createTime',
    valueType: 'date',
    sorter: true,
    hideInSearch: true,
  },
 {
    title: '更新时间',
    key: 'showTime',
    dataIndex: 'updateTime',
    valueType: 'date',
    sorter: true,
    hideInSearch: true,
  },
  {
    title: '操作',
    valueType: 'option',
    key: 'option',
    render: (text, record, _, action) => [
      <a
        key="editable"
        onClick={() => {
          action?.startEditable?.(record.id);
        }}
      >
        编辑
      </a>,
      <a href={record.url} target="_blank" rel="noopener noreferrer" key="view">
        查看
      </a>,
      <TableDropdown
        key="actionGroup"
        onSelect={async() =>{ 
          console.log(action);
          
            await deleteProject(record._id)
            action?.reload()
          }
        }
        menus={[
          { key: 'copy', name: '复制' },
          { key: 'delete', name: '删除' },
        ]}
      />,
    ],
  },
];

export default () => {
  const actionRef = useRef<ActionType>();
  const [open, setOpen] = useState(false)
  return (
    <>
    
    
    <ProTable<GithubIssueItem>
      columns={columns}
      actionRef={actionRef}
      cardBordered
      request={async (params = {}, sort, filter) => {
        console.log(sort, filter);
        return getProjects<{
          data: GithubIssueItem[];
        }>({
          params,
        });
      }}
      editable={{
        type: 'multiple',
      }}
      columnsState={{
        persistenceKey: 'pro-table-singe-demos',
        persistenceType: 'localStorage',
        onChange(value) {
          console.log('value: ', value);
        },
      }}
      rowKey="id"
      search={{
        labelWidth: 'auto',
      }}
      options={{
        setting: {
          listsHeight: 400,
        },
      }}
      form={{
        // 由于配置了 transform，提交的参与与定义的不同这里需要转化一下
        syncToUrl: (values, type) => {
          if (type === 'get') {
            return {
              ...values,
              created_at: [values.startTime, values.endTime],
            };
          }
          return values;
        },
      }}
      pagination={{
        pageSize: 10,
        onChange: (page) => console.log(page),
      }}
      dateFormatter="string"
      headerTitle="高级表格"
      toolBarRender={() => [
        <Button onClick={()=>setOpen(true)} key="button" icon={<PlusOutlined />} type="primary">
          新建
        </Button>,
        <Dropdown
          key="menu"
          menu={{
            items: [
              {
                label: '1st item',
                key: '1',
              },
              {
                label: '2nd item',
                key: '1',
              },
              {
                label: '3rd item',
                key: '1',
              },
            ],
          }}
        >
          <Button>
            <EllipsisOutlined />
          </Button>
        </Dropdown>,
      ]}
    />
    <ModalForm
        name="validate_other"
        open={open}
        initialValues={{
          name: 'qixian',
          updateTime: undefined,
          status: 0,
        }}
        onValuesChange={(_, values) => {
          console.log(values);
        }}
        onFinish={async (value) => { 
           const body = {
             ...value,
             status: 1,
             createTime: dayjs().valueOf()
        }
        const res = await createProject(body);
        if(res.success){
          message.success("创建成功")
          actionRef.current.reload()
          setOpen(false)
        }
        }
      }
      >
          <ProFormText width="md" name="name" label="项目名称" />
          <ProFormText width="md" name="resource" label="来源" />
        </ModalForm>
    </>
  );
};
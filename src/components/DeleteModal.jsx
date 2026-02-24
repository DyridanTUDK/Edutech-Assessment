import React from 'react';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Button, Modal, Space } from 'antd';
const { confirm } = Modal;


export default function DeleteModal({record, studentList, setStudentList}) {
    const showDeleteConfirm = () => {
      confirm({
        title: 'Are you sure delete this task?',
        icon: <ExclamationCircleFilled />,
        content: 'Some descriptions',
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        onOk() {
          console.log('OK');
          setStudentList(studentList.filter(student => record.id !== student.id))
          console.log(studentList)
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    };
    console.log(record)
    return (
    <Space wrap>
    <Button onClick={showDeleteConfirm} type="dashed">
      Delete
    </Button>
  </Space>
  )
}

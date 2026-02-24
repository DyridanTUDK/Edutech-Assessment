import React from 'react';
import { Flex, Space, Table, Tag , Button } from 'antd';
import AddModal from './AddModal';
import DeleteModal from './DeleteModal';
import EditModal from "./EditModal"
const { Column, ColumnGroup } = Table;

export default function StudentTable({studentList, setStudentList}) {
    const data = studentList;
    
  return (
    <>
    <AddModal studentList={studentList} setStudentList={setStudentList} />
    <Table dataSource={data}>
    <ColumnGroup title="Student List">
      <Column title="Name" dataIndex="name" key="name" />
    </ColumnGroup>
    <Column title="Phone" dataIndex="phone" key="phone" />
    <Column title="Email" dataIndex="email" key="email" />
    <Column title="NoOfClassRooms" dataIndex="classroomCount" key="classroomCount" />
    <Column
      title="Action"
      key="action"
      render={(_, record) => (
          <Space size="middle">
          <EditModal record={record} studentList={studentList} setStudentList={setStudentList} />
          <DeleteModal studentList={studentList} setStudentList={setStudentList} record={record }/>
        </Space>
      )}
      />
  </Table>
    </>
  )
}

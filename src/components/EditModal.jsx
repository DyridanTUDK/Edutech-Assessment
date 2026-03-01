import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Drawer, Form, Input, Row, Space } from 'antd'
import RoomsCheck from './RoomsCheck';
import Item from 'antd/es/list/Item';


export default function EditModal({record,studentList, setStudentList}) {
    const [checkedList, setCheckedList] = useState(record.classroom);
    const [open, setOpen] = useState(false);
    
    // Handle Form Data
    const [name, setName] = useState(record.name)
    const [phone, setPhone] = useState(record.phone)
    const [email, setEmail] = useState(record.email)
    
    const updateSubmit = () =>{
        setStudentList(studentList.map(student=>{
            if(record.id===student.id){
                return {...student, name:name, phone:phone, email:email, classroom:checkedList, classroomCount:checkedList.length}
            }
            else{
                return student
            }
        }))
        onClose()
    }

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

  return (
  <>

      <Button type="primary" onClick={showDrawer}>
        Edit
      </Button>
      <Drawer
        title="Create a new account"
        size={720}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={updateSubmit} type="primary">
              Edit
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" requiredMark={false}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: 'Please enter user name' }]}
              >
              </Form.Item>
                <Input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Please enter user name" />
              <Form.Item
                name="Phone number"
                label="Phone number"
                rules={[{ required: true, message: 'Please enter your Phone Number' }]}
              >
              </Form.Item>
                <Input value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Please enter user name" />
              <Form.Item
                name="Email"
                label="Email"
                rules={[{ required: true, message: 'Please enter your Phone Number' }]}
              >
              </Form.Item>
                <Input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Please enter user name" />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
            <Form.Item 
            name="classrooms"
            label="Select Your Class Rooms"
            rules={[{required: true}]}>
                <RoomsCheck record={record} checkedList={checkedList} setCheckedList={setCheckedList} />
            </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};
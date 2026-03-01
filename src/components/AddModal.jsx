import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Drawer, Form, Input, Row, Space } from 'antd'
import RoomsCheck from './RoomsCheck';


export default function AddModal({studentList, setStudentList}) {
    const [checkedList, setCheckedList] = useState([]);
    const [open, setOpen] = useState(false);
    

    // Handle Form Data
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    
    const handleSubmit = () =>{
        const studentData = {
            id: crypto.randomUUID(),
            name: name,
            phone: phone,
            email: email, 
            classroom: checkedList,
            classroomCount: checkedList.length
          }
          setStudentList([...studentList, studentData])
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

      <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
        Add New Student
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
            <Button onClick={handleSubmit} type="primary">
              Submit
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
                <Input onChange={(e)=>setName(e.target.value)} placeholder="Please enter user name" />
              </Form.Item>
              <Form.Item
                name="Phone number"
                label="Phone number"
                rules={[{ required: true, message: 'Please enter your Phone Number' }]}
              >
                <Input onChange={(e)=>setPhone(e.target.value)} placeholder="Please enter user name" />
              </Form.Item>
              <Form.Item
                name="Email"
                label="Email"
                rules={[{ required: true, message: 'Please enter your Phone Number' }]}
              >
                <Input onChange={(e)=>setEmail(e.target.value)} placeholder="Please enter user name" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
            <Form.Item 
            name="classrooms"
            label="Select Your Class Rooms"
            rules={[{required: true}]}>
                <RoomsCheck checkedList={checkedList} setCheckedList={setCheckedList} />
            </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};
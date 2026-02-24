import React, { useState } from 'react';
import { Checkbox, Divider } from 'antd';
const CheckboxGroup = Checkbox.Group;

export default function RoomsCheck({record,checkedList, setCheckedList, isEditing=false}) {
  const [classRooms, setClassRooms] = useState(record?.classroom) 
  console.log(record)
  // const options = classRooms.map((room)=> room.name)
  const checkAll = options.length === checkedList.length;
  const indeterminate = checkedList.length > 0 && checkedList.length < options.length;
  const onChange = list => {
    setCheckedList(list);
  };
  const onCheckAllChange = e => {
    setCheckedList(e.target.checked ? options : []);
  };

  const [classRoomName, setClassRoomName] = useState("")
  const [classPrice, setClassPrice] = useState(0)

  const addNewClass = () =>{ 
    const newClass = {
      name: classRoomName,
      fee: classPrice
    }
    setClassRooms([...classRooms, newClass])
  }

  return (
    <>
      <div style={{padding: "20px 10px", display:'flex', height:'100' , width:'600px', alignItems:'center', justifyContent:'space-evenly'}}>
        <p>Add your class room</p>
        <input onChange={(e)=>setClassRoomName(e.target.value)} type="text" placeholder='add a classroom' />
        <input onChange={(e)=>setClassPrice(e.target.value)} type="number" placeholder="tuition price bdt" />
        <button onClick={addNewClass}>Add</button>
      </div>
      <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
        Check all
      </Checkbox>
      <Divider />
      <CheckboxGroup options={options} value={checkedList} onChange={onChange} />
    </>
  )
}

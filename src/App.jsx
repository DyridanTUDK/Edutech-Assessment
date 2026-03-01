import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StudentTable from './components/StudentTable'

function App() {
  const [studentList, setStudentList] = useState([])
  return (
    <>
    <StudentTable studentList={studentList} setStudentList={setStudentList}  />
    </>
  )
}

export default App

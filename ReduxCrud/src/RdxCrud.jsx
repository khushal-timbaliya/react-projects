import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addData, deleteData, updateData } from './Feature/Todo';

export default function RdxCrud() {

  const [name, setName] = useState('');
  const [subject, setSubject] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const crud = useSelector((state) => {
    return state.todokey
  })

  const dispatch = useDispatch();

  const addRecord = () => {
    if (editIndex == null) {
      dispatch(addData({ id: Date.now(), name, subject }))

    } else {
      dispatch (updateData({id : editIndex , name , subject}))
      setEditIndex(null)
  }
    setName("")
    setSubject("")
  }

  const deleteRecord = (id) => {
    dispatch(deleteData(id))
  }

  const editRecord = (id) => {
    let singleData = crud.student.find((item) => item.id == id);
    setName(singleData.name)
    setSubject(singleData.subject)
    setEditIndex(id)
  }


  return (
    <div>
      <center>
              <div className="main">
      <h1>Redux Crud</h1>
      <br />
      <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} /> <br />
      <input type="text" placeholder='subject' value={subject} onChange={(e) => setSubject(e.target.value)} /> <br /><br />
      <button onClick={addRecord}>{editIndex ? "Update Data" : "Add Data"}</button>


      {
        crud ?
          crud.student.map((e, i) => {
            return <ul key={i}>
              <li>{e.id}</li>
              <li>{e.name}</li>
              <li>{e.subject}</li>
              <button onClick={() => editRecord(e.id)}>Edit</button>
              <button onClick={() => deleteRecord(e.id)}>Delete</button>
            </ul>
          })
          :
          <p>No  Data</p>

      }
    </div>
    </center> 

    </div>
  )
}

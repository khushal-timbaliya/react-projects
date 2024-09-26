import React, { useEffect, useState } from 'react'

export default function Delete() {
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [city, setCity] = useState("");

    const [record, setRecord] = useState(null);
    const [editIndex, setEditIndex] = useState(null)

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("student")) || []
        setRecord(data)
    }, [])



    const handelchange = () => {
        let user = { id: Date.now(), name, subject, city }
        let oldRecord = JSON.parse(localStorage.getItem("student")) || []
        // console.log(user);
        // setRecord([...record, user])

        if (editIndex) {
            let singleData = record.find((item) => item.id == editIndex)
            singleData.id = editIndex
            singleData.name = name
            singleData.subject = subject
            singleData.city = city
            localStorage.setItem("student", JSON.stringify(record))

        } else {
            oldRecord.push(user);
            setRecord(oldRecord)
            localStorage.setItem("student", JSON.stringify(oldRecord))
        }
        setName("");
        setSubject("");
        setCity("");
    }

    const handleDelete = (id) => {
        let deleteData = record.filter((item) => item.id != id)
        setRecord(deleteData)
        localStorage.setItem("student", JSON.stringify(deleteData))
    }

    const handleEdit = (id) => {
        let singleDate = record.find((item) => item.id == id)
        setName(singleDate.name)
        setSubject(singleDate.subject)
        setCity(singleDate.city)
        setEditIndex(id)
    }


    return (
        <div>
            <h1>Crud with local storage</h1>
            <input type="text" value={name} placeholder='enter name' onChange={(e) => setName(e.target.value)} />
            <input type="text" value={subject} placeholder='enter subject' onChange={(e) => setSubject(e.target.value)} />
            <input type="text" value={city} placeholder='enter city' onChange={(e) => setCity(e.target.value)} />
            <button onClick={handelchange}>{editIndex ? "update" : "add"}</button>

            <table border='1' width='50%'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>subject</th>
                        <th>city</th>
                        <th colSpan={2}>action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        record ?
                            record.map((e, i) => {
                                return <tr kye={i}>
                                    <td>{e.id}</td>
                                    <td>{e.name}</td>
                                    <td>{e.subject}</td>
                                    <td>{e.city}</td>
                                    <td><button onClick={() => handleEdit(e.id)}>edit</button></td>
                                    <td><button onClick={() => handleDelete(e.id)}>delete</button></td>
                                </tr>
                            })
                            :
                            ""
                    }
                </tbody>

            </table>
        </div>
    )
}
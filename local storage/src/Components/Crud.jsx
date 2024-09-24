import React, { useEffect, useState } from 'react'

export default function Crud() {
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [city, setCity] = useState("");

    const [record, setRecord] = useState(null);

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("student")) || []
        setRecord(data)
    }, [record])



    const handelchange = () => {
        let user = {id: Date.now(), name, subject, city }
        // console.log(user);
        record.push(user);
        // setRecord([...record, user])
        localStorage.setItem("student", JSON.stringify(record))
    }

    return (
        <div>
            <h1>Crud with local storage</h1>
            <input type="text" placeholder='enter name' onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder='enter subject' onChange={(e) => setSubject(e.target.value)} />
            <input type="text" placeholder='enter city' onChange={(e) => setCity(e.target.value)} />
            <button onClick={handelchange}>click</button>

            <table border='1' width='50%'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>subject</th>
                        <th>city</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        record ?
                            record.map((e, i)=>{
                                return <tr kye={i}>
                                    <td>{e.id}</td>
                                    <td>{e.name}</td>
                                    <td>{e.subject}</td>
                                    <td>{e.city}</td>
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



// import React, { useEffect, useState } from 'react';

// export default function Crud() {

//     const [record, setRecord] = useState([]);

//     useEffect(() => {
//         let data = JSON.parse(localStorage.getItem("student")) || [];
//         setRecord(data);
//     }, []);

//     const [name, setName] = useState("");
//     const [subject, setSubject] = useState("");
//     const [city, setCity] = useState("");

//     const handleChange = () => {
//         let user = { id: Date.now(), name, subject, city };
//         const updatedRecord = [...record, user];
//         setRecord(updatedRecord);
//         localStorage.setItem("student", JSON.stringify(updatedRecord));
//     };

//     return (
//         <div>
//             <h1>CRUD with Local Storage</h1>
//             <input
//                 type="text"
//                 placeholder="Enter name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//             />
//             <input
//                 type="text"
//                 placeholder="Enter subject"
//                 value={subject}
//                 onChange={(e) => setSubject(e.target.value)}
//             />
//             <input
//                 type="text"
//                 placeholder="Enter city"
//                 value={city}
//                 onChange={(e) => setCity(e.target.value)}
//             />
//             <button onClick={handleChange}>Submit</button>

//             <table border="1" width="50%">
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Name</th>
//                         <th>Subject</th>
//                         <th>City</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         record.length > 0 ?
//                             record.map((e, i) => (
//                                 <tr key={i}> {/* Corrected "kye" to "key" */}
//                                     <td>{e.id}</td>
//                                     <td>{e.name}</td>
//                                     <td>{e.subject}</td>
//                                     <td>{e.city}</td>
//                                 </tr>
//                             ))
//                             :
//                             <tr><td colSpan="4">No records found</td></tr>
//                     }
//                 </tbody>
//             </table>
//         </div>
//     );
// }

import React from 'react';

export default function Function() {
    let arr1 = ["one", "two", "three"];
    let arr2 = ["four", "five", "six"];

    let newarr = [...arr1, ...arr2];

    let obj = [
        {
            id: 1,
            name: "khushal timbaliya",
            subject: "javascript",
            age: 19
        },
        {
            id: 2,
            name: "khushal",
            subject: "react",
            age: 16
        },
        {
            id: 3,
            name: "kt",
            subject: "node",
            age: 18
        }
    ];

    let filtered = obj.filter((item) => item.id !== 2);
    console.log(filtered);

    return (
        <div>
            {obj ? (
                    <table className='border-separate border-spacing border-2 border-black m-4 w-[100]'>
                        <thead>
                            <tr>
                                <th className='bg-slate-100'>Name</th>
                                <th className='bg-slate-100'>Subject</th>
                                <th className='bg-slate-100'>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            {obj.map((e, i) => (
                                <tr key={i}>
                                    <td className='ps-5'>{e.name}</td>
                                    <td className='ps-5'>{e.subject}</td>
                                    <td className='ps-5'>{e.age}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
            ) : null}
        </div>
    );
}

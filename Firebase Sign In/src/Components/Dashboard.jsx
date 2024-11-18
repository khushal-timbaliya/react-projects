import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth, db } from '../../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

export default function Dashboard() {
  const [user, setUser] = useState("");
  const [userData, setUserData] = useState("");

  useEffect(() => {
    let subscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        console.log(currentUser);
      }
    });
  }, []);

  useEffect(() => {
    if (user) {
      fetchUser();
    }
  }, [user]);

  const fetchUser = () => {
    getDoc(doc(db, "users", user.uid))
      .then((data) => {
        console.log(data.data());
        setUserData(data.data());
      });
  };

  return (
    <div className="dashboard-container">
<p style={{fontSize: "25px"}}>Login Details</p>
      {userData && (
        <table className="user-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>City</th>
              <th>Hobby</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{userData.name}</td>
              <td>{userData.email}</td>
              <td>{userData.city}</td>
              <td>{userData.hobby}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

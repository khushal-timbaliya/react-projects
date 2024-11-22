import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, owner } from "../../FirebaseConfig";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    const handellogin = async () => {
        const result = await signInWithPopup(auth, owner).then((data) => {
            console.log(data);
            navigate("/user", {
                state: {
                    email: data.user.email,
                    name: data.user.displayName,
                    photo: data.user.photoURL,
                },
            });
        });
    };

    return (
        <div className="login-container">
            <h1 className="a1">Login</h1>
            <input type="text" placeholder="ENTER THE EMAIL" />
            <input type="password" placeholder="ENTER THE PASSWORD" />
            <p>OR</p>
            <button onClick={handellogin}>continue with Google</button>
        </div>
    );
}

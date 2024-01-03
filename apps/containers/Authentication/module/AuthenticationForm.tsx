import { useState } from "react";
import classes from "./../styles/AuthenticationForm.module.css";
import LoginForm from "./Login";
import ResetForm from "./Reset";

const currentYear = new Date().getFullYear();

const AuthenticationForm = () => {
    const [forgotMode, setForgotMode] = useState(false);

    const turnOnForgotMode = () => {
        setForgotMode(true);
    };

    const turnOffForgotMode = () => {
        setForgotMode(false);
    };

    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
            }}
        >
            {!forgotMode && <LoginForm turnOnForgotMode={turnOnForgotMode} />}
            {forgotMode && <ResetForm turnOffForgotMode={turnOffForgotMode} />}

            <div className={classes.copy}>
                &copy; {currentYear} all right reserved
            </div>
        </div>
    );
};

export default AuthenticationForm;

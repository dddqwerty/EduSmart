import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Sawo from "sawo";
import { LoginIcon } from "../assets/icons";
// For localhost
const API_KEY = "8e8c51b6-3d13-4193-908a-86a877c789d8";
// server = "bf9b6c3d-3a10-4c85-ad24-307404a438d1";
// localhost = "c226814e-7ea0-48d0-909a-c05fd6ee58b7";

export const LoginPage = () => {
    const [isUserLoggedIn, setUserLoggedIn] = useState(false);
    const [payload, setPayload] = useState({});
    const history = useHistory();
    useEffect(() => {
        var config = {
            containerID: "sawo-container",
            identifierType: "email",
            apiKey: API_KEY,
            onSuccess: (payload) => {
                console.log("Payload : " + JSON.stringify(payload));
                setUserLoggedIn(true);
                setPayload(payload);
            },
        };
        let sawo = new Sawo(config);
        sawo.showForm();
    }, []);
    console.log(payload);
    if (isUserLoggedIn) {
        history.push("/about");
    }
    return (
        <>
            <div className="h-screen bg-primary flex items-center justify-center w-full ">
                <div>
                    <div
                        id="sawo-container"
                        style={{ height: "25vh", width: "25rem" }}
                    ></div>
                </div>
                <div className="">
                    <div className="ml-40 mt-80 opacity-80">
                        <LoginIcon />
                    </div>
                </div>
            </div>
        </>
    );
};

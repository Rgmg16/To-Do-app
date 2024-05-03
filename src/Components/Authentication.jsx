import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { useState } from "react";

const Authentication = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <div>
            {isLoggedIn ? (
                <div>
                    <button onClick={handleLogout} className="bg-red-700 border-2 border-black rounded-lg hover:bg-red-500">Logout</button>
                    <TaskForm />
                    <TaskList />
                </div>
            ) : (
                <button onClick={handleLogin} className="bg-green-700 border-2 border-black border-black rounded-lg hover:bg-green-500" >Login</button>
            )}
        </div>
    );
};

export default Authentication;
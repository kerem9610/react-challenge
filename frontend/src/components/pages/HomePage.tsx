import { Dashboard } from "~components/organism/Dashboard";
import LoginForm from "~components/organism/LoginForm";
import { useUser } from "~context/UserContext";

export const HomePage = () => {
    const { user } = useUser();
    const isLoggedIn = user?.username;

    if (!isLoggedIn) {
        return (<LoginForm />);
    }

    return (
        <Dashboard />
    );
};
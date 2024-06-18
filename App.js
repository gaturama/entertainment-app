import React, { useState } from "react-native";
import AppNavigator from "./src/navigation/AppNavigator.jsx";
import AuthNavigator from "./src/navigation/AuthNavigator.jsx";

export default function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return isAuthenticated ? <AppNavigator /> : <AuthNavigator />;
}
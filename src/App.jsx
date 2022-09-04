import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import Nav from "./components/Nav";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Wish from "./pages/wishPage/Wish";

function App() {
    const { isAuthReady, user } = useAuthContext();

    return (
        <div className="App">
            {isAuthReady ? (
                <BrowserRouter>
                    <Nav />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/login"
                            element={!user ? <Login /> : <Navigate replace={true} to="/" />}
                        />
                        <Route
                            path="/signup"
                            element={!user ? <Signup /> : <Navigate replace={true} to="/" />}
                        />
                        <Route
                            path="/wish"
                            element={user ? <Wish /> : <Navigate replace={true} to="/login" />}
                        />
                    </Routes>
                </BrowserRouter>
            ) : (
                "Loading..."
            )}
        </div>
    );
}

export default App;

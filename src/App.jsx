import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home.jsx";
import Filter from "./components/Filter.jsx";
import LoseWeight from "./components/LoseWeight.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import Profile from "./components/Profile.jsx";
import MainLayout from "./components/MainLayout.jsx";
import RecipeApp from "./components/RecipeApp.jsx"
import "./App.css";
function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>  
          {/* Header/Footer жоқ беттер */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Барлық қорғалған беттерге Header/Footer қосу */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <MainLayout>
                  <Home />
                </MainLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/filters"
            element={
              <PrivateRoute>
                <MainLayout>
                  <Filter />
                </MainLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/recipes"
            element={
              <PrivateRoute>
                <MainLayout>
                  <RecipeApp/>
                </MainLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <PrivateRoute>
                <MainLayout>
                  <div>Cart</div>
                </MainLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/lose-weight"
            element={
              <PrivateRoute>
                <MainLayout>
                  <LoseWeight />
                </MainLayout>
              </PrivateRoute>
            }
          />
          
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <MainLayout>
                  <Profile />
                </MainLayout>
              </PrivateRoute>
            }
          />
          {/* Егер басқа бағытқа өтсе, логинге жібереді */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

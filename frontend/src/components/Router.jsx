import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import AdvancedFeature from "../pages/AdvancedFeature";
import GeneralFeature from "../pages/GeneralFeature";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import AuthLayout from "../pages/Layout/AuthLayout";
import MainLayout from "../pages/Layout/MainLayout";
import Error403 from "../pages/Error/403";
import Error404 from "../pages/Error/404";
import Profile from "../pages/Profile/Profile";
import Category from "../pages/MasterData/Category";
import Rack from "../pages/MasterData/Rack";
import Item from "../pages/MasterData/Items";
import OpeningBalanceItems from "../pages/Inventory/OpeningBalanceItems";
import StockIn from "../pages/Inventory/StockIn";
import StockOut from "../pages/Inventory/StockOut";
import StockOpname from "../pages/Inventory/StockOpname";
import StockCard from "../pages/Inventory/StockCard";

export default function Router() {
    return (
        <Routes>
            <Route path="/403" element={<Error403 />} />
            <Route
                path="/"
                element={
                    <AuthLayout>
                        <Login />
                    </AuthLayout>
                }
            />
            <Route
                path="/register"
                element={
                    <AuthLayout>
                        <Register />
                    </AuthLayout>
                }
            />
            <Route
                path="/dashboard"
                element={
                    <MainLayout>
                        <Dashboard />
                    </MainLayout>
                }
            />
            <Route
                path="/category"
                element={
                    <MainLayout>
                        <Category />
                    </MainLayout>
                }
            />
            <Route
                path="/rack-location"
                element={
                    <MainLayout>
                        <Rack />
                    </MainLayout>
                }
            />
            <Route
                path="/items"
                element={
                    <MainLayout>
                        <Item />
                    </MainLayout>
                }
            />
            <Route
                path="/report-opening-balance-items"
                element={
                    <MainLayout>
                        <OpeningBalanceItems />
                    </MainLayout>
                }
            />
            <Route
                path="/report-stock-in"
                element={
                    <MainLayout>
                        <StockIn />
                    </MainLayout>
                }
            />
            <Route
                path="/report-stock-out"
                element={
                    <MainLayout>
                        <StockOut />
                    </MainLayout>
                }
            />
            <Route
                path="/report-stock-opname"
                element={
                    <MainLayout>
                        <StockOpname />
                    </MainLayout>
                }
            />
            <Route
                path="/stock-card"
                element={
                    <MainLayout>
                        <StockCard />
                    </MainLayout>
                }
            />
            <Route
                path="/profile"
                element={
                    <MainLayout>
                        <Profile />
                    </MainLayout>
                }
            />
            <Route path="*" element={<Error404 />} />
        </Routes>
    );
}

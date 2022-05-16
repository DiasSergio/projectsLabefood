import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdressPage from "../pages/adressPage/AdressPage"
import CartPage from "../pages/cartPage/CartPage"
import FeedPage from "../pages/feedPage/FeedPage"
import LoginPage from "../pages/loginPage/LoginPage"
import ProfilePage from "../pages/profilePage/ProfilePage"
import SignUpPage from "../pages/signUpPage/SignUpPage"
import ErrorPage from "../pages/errorPage/ErrorPage"
import RestaurantDetailsPage from "../pages/restaurantDetailsPage/RestaurantDetailsPage"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<FeedPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/cadastro" element={<SignUpPage />} />
                <Route path="/endereço" element={<AdressPage />} />
                <Route path="/detalhesRestaurante/:restaurantId" element={<RestaurantDetailsPage />} />
                <Route path="/carrinho" element={<CartPage />} />
                <Route path="/perfil" element={<ProfilePage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
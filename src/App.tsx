import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import CollectionsPage from './pages/CollectionsPage';
import CategoriesPage from './pages/CategoriesPage';
import GiftCardsPage from './pages/GiftCardsPage';
import BlogsPage from './pages/BlogsPage';
import TopSellersPage from './pages/TopSellersPage';
import SearchResultsPage from './pages/SearchResultsPage';
import Layout from './components/Layout/Layout';
import DressesPage from './pages/categories/DressesPage';
import BlousesPage from './pages/categories/BlousesPage';
import SkirtsPage from './pages/categories/SkirtsPage';
import AccessoriesPage from './pages/categories/AccessoriesPage';
import JumpsuitsPage from './pages/categories/JumpsuitsPage';
import ShoesPage from './pages/categories/ShoesPage';
import BagsPage from './pages/categories/BagsPage';
import JewelryPage from './pages/categories/JewelryPage';

function App() {
  return (
    <ParallaxProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="top-sellers" element={<TopSellersPage />} />
            <Route path="shop" element={<ShopPage />} />
            <Route path="product/:id" element={<ProductPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="collections" element={<CollectionsPage />} />
            <Route path="categories" element={<CategoriesPage />} />
            <Route path="categories/dresses" element={<DressesPage />} />
            <Route path="categories/blouses" element={<BlousesPage />} />
            <Route path="categories/skirts" element={<SkirtsPage />} />
            <Route path="categories/accessories" element={<AccessoriesPage />} />
            <Route path="categories/jumpsuits" element={<JumpsuitsPage />} />
            <Route path="categories/shoes" element={<ShoesPage />} />
            <Route path="categories/bags" element={<BagsPage />} />
            <Route path="categories/jewelry" element={<JewelryPage />} />
            <Route path="gift-cards" element={<GiftCardsPage />} />
            <Route path="blog" element={<BlogsPage />} />
            <Route path="search" element={<SearchResultsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ParallaxProvider>
  );
}

export default App;
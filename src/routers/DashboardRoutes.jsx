import React from 'react';
import { Navbar } from '../components/ui/Navbar';
import { Navigate, Route, Routes } from 'react-router-dom';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroeScreen } from '../components/heroes/HeroeScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { SearchScreen } from '../components/search/SearchScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className='container mt-2'>
                <Routes>
                    <Route path='marvel' element={<MarvelScreen />} />
                    <Route path='hero/:heroeId' element={<HeroeScreen />} />
                    <Route path='dc' element={<DcScreen />} />
                    <Route path='search' element={<SearchScreen />} />

                    <Route path="*" element={<Navigate to="marvel" />} />
                </Routes>
            </div>
        </>
    );
}

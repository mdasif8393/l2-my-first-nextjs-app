import React from 'react';
import DashboardLayout from '../components/layouts/DashboardLayout';
import RootLayout from '../components/layouts/RootLayout';

const DashboardHomePage = () => {
    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    );
};

export default DashboardHomePage;

DashboardHomePage.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            <DashboardLayout>
                {page}
            </DashboardLayout>
        </RootLayout>
    )
}
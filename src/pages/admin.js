import DashboardLayout from "@/components/layouts/DashboardLayout";

const AdminHomePage = () => {
    return (
        <div>
            <h1>Admin</h1>
        </div>
    );
};

export default AdminHomePage;

AdminHomePage.getLayout = function getLayout(page) {
    return (
        <DashboardLayout>
            {page}
        </DashboardLayout>
    )
}
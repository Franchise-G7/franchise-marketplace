import DashboardContent from '@/Layouts/DashboardContent';
import Header from '@/Layouts/Header';
import Nav from '@/Layouts/Nav';
import SideBar from '@/Layouts/SideBar';
import { usePage } from '@inertiajs/react';

export default function Dashboard() {
    const { auth } = usePage().props;
    const user = auth?.user;
    const imageUrl = auth?.imagePath;

    return (
        <>
            <Header />
            <Nav />
            <div className="relative flex h-screen w-full items-center justify-center bg-gray-100 pt-8">
                <div className="grid w-5/6 grid-cols-12 gap-4">
                    <SideBar user={user} imageUrl={`storage/${imageUrl}`} />
                    <DashboardContent />
                </div>
            </div>
        </>
    );
}

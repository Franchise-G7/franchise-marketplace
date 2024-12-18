import Header from '@/Layouts/Header';
import Nav from '@/Layouts/Nav';
import { usePage } from '@inertiajs/react';

export default function Dashboard() {
    const { auth } = usePage().props;

    const user = auth?.user;

    let imageUrl = auth?.imagePath;

    return (
        <>
            <Header />
            <Nav />
            <img
                src={'storage/' + imageUrl}
                alt="Profile Image"
                className="h-32 w-32 rounded-full"
            />

            <div className="py-12"></div>
        </>
    );
}

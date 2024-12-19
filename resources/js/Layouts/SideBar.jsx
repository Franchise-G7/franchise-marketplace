import {
    ClipboardDocumentListIcon,
    Cog6ToothIcon,
    HomeIcon,
    UserIcon,
} from '@heroicons/react/24/outline';

export default function SideBar({ user, imageUrl }) {
    return (
        <div className="h-7/8 col-span-3 bg-gray-800 text-white">
            <div className="flex flex-col items-center p-4">
                <img
                    src={imageUrl}
                    alt="Profile"
                    className="mb-4 h-24 w-24 rounded-full border-4 border-gray-700"
                />
                <h2 className="text-xl font-semibold">
                    {user.name || 'John Doe'}
                </h2>
            </div>
            <div className="mt-6 flex flex-col items-center justify-center">
                <ul className="space-y-2">
                    <li>
                        <a
                            href="/dashboard"
                            className="block flex items-center space-x-2 rounded px-4 py-2 hover:bg-gray-700"
                        >
                            <HomeIcon className="h-5 w-5" />
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/manage-listings"
                            className="block flex items-center space-x-2 rounded px-4 py-2 hover:bg-gray-700"
                        >
                            <ClipboardDocumentListIcon className="h-5 w-5" />
                            <span>Manage Listings</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/manage-leads"
                            className="block flex items-center space-x-2 rounded px-4 py-2 hover:bg-gray-700"
                        >
                            <UserIcon className="h-5 w-5" />
                            <span>Manage Leads</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/profile"
                            className="block flex items-center space-x-2 rounded px-4 py-2 hover:bg-gray-700"
                        >
                            <Cog6ToothIcon className="h-5 w-5" />
                            <span>Profile</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

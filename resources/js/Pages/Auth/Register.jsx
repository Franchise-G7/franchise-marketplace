import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        user_role: '',
        image: null,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    const userRoles = ['franchisor', 'franchisee'];

    const handleImageChange = (e) => {
        setData('image', e.target.files[0]);
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="name" value="Name" />
                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />
                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />
                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="pt-4">
                    <InputLabel htmlFor="user_role" value="User Role" />
                    <div className="mt-2 space-y-2 pl-5">
                        {userRoles.map((role, index) => (
                            <label key={index} className="flex items-center">
                                <input
                                    type="radio"
                                    name="user_role"
                                    value={role}
                                    checked={data.user_role === role}
                                    onChange={(e) =>
                                        setData('user_role', e.target.value)
                                    }
                                    className="form-radio text-indigo-600"
                                    required
                                />
                                <span className="ml-2 text-sm text-gray-700">
                                    {role}
                                </span>
                            </label>
                        ))}
                    </div>
                    <InputError message={errors.user_role} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="image" value="Profile Image" />
                    <div className="flex w-full items-center justify-center">
                        <label
                            htmlFor="image"
                            className="flex cursor-pointer flex-col items-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-100 px-4 py-6 transition-all hover:border-gray-400 hover:bg-gray-200"
                        >
                            <span className="text-sm text-gray-600">
                                Click or drag to upload
                            </span>
                            <input
                                type="file"
                                id="image"
                                name="image"
                                accept="image/*"
                                className="sr-only"
                                onChange={handleImageChange}
                                required
                            />
                        </label>
                    </div>
                    <InputError message={errors.image} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />
                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />
                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirm Password"
                    />
                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData('password_confirmation', e.target.value)
                        }
                        required
                    />
                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <div className="mt-4 flex items-center justify-end">
                    <Link
                        href={route('login')}
                        className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Already registered?
                    </Link>
                    <PrimaryButton className="ms-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}

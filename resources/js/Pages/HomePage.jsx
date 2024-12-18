import Footer from '@/Layouts/Footer';
import Header from '@/Layouts/Header';
import Hero from '@/Layouts/Hero';
import Nav from '@/Layouts/Nav';

export default function HomePage() {
    const products = [
        {
            image: '',
            title: 'Product Title',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore tenetur aut distinctio eveniet, aliquid dolores!',
        },
        {
            image: '',
            title: 'Product Title',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore tenetur aut distinctio eveniet, aliquid dolores!',
        },
        {
            image: '',
            title: 'Product Title',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore tenetur aut distinctio eveniet, aliquid dolores!',
        },
        {
            image: '',
            title: 'Product Title',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore tenetur aut distinctio eveniet, aliquid dolores!',
        },
        {
            image: '',
            title: 'Product Title',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore tenetur aut distinctio eveniet, aliquid dolores!',
        },
        {
            image: '',
            title: 'Product Title',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore tenetur aut distinctio eveniet, aliquid dolores!',
        },
    ];

    const services = [
        {
            image: '',
            service_name: 'Pets Service',
        },
        {
            image: '',
            service_name: 'Resturant & Fast Food',
        },
        {
            image: '',
            service_name: 'Professional & Consulting',
        },
        {
            image: '',
            service_name: 'Sport & Fitness',
        },
        {
            image: '',
            service_name: 'Care',
        },
        {
            image: '',
            service_name: 'Kids Club',
        },
        {
            image: '',
            service_name: 'Van Based',
        },
        {
            image: '',
            service_name: 'Home Services',
        },
    ];

    return (
        <>
            <Header />
            <Nav />
            <Hero />
            <div className="main_body-container">
                <h2 className="mb-8 text-center text-4xl font-semibold">
                    Latest Franchises
                </h2>
                <div className="latest_franchise_contianer mb-8 flex flex-wrap justify-evenly">
                    {products.map((product) => {
                        return (
                            <>
                                <div className="lists mb-12 flex flex-col rounded p-8 shadow-xl">
                                    <h2 className="mb-2 text-xl font-bold">
                                        {product.title}
                                    </h2>
                                    <div className="franhcise_box flex gap-5">
                                        <img
                                            src={product.image}
                                            alt=""
                                            className="h-36 w-36"
                                        />
                                        <div className="franchise_description_and_button flex flex-col gap-2">
                                            <p className="w-44 text-sm">
                                                {product.description}
                                            </p>
                                            <button className="rounded bg-blue-500 px-2 py-1 text-white hover:bg-blue-700">
                                                View Listing
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>
                <h2 className="mb-8 text-center text-4xl font-semibold">
                    Franchise by Industry
                </h2>
                <div className="franchise_by_industry_container mb-8 flex flex-wrap justify-center gap-x-7">
                    {services.map((service) => {
                        return (
                            <div className="lists relative mb-12 flex h-40 w-1/5 flex-col rounded bg-[url('images/BF-Magazine-Logo-REV-2.png')] shadow-xl">
                                <h3 className="z-10 text-center">
                                    {service.service_name}
                                </h3>
                                <div className="absolute inset-0 bg-gradient-to-b from-slate-200 via-transparent to-slate-100 opacity-70"></div>
                                <p className="absolute bottom-0 flex w-full cursor-pointer items-end justify-center rounded-b-sm bg-blue-200 py-2 opacity-70">
                                    View Category
                                </p>
                            </div>
                        );
                    })}
                </div>
                <div class="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
                    <div
                        class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                        aria-hidden="true"
                    >
                        <div
                            class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        ></div>
                    </div>
                    <div class="mx-auto max-w-2xl text-center">
                        <h2 class="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                            Request FREE Details
                        </h2>
                        <p class="mt-2 text-lg/8 text-gray-600">
                            No Time To Search For Your Next Franchise Or
                            Business Opportunity? Submit Your Request Below, And
                            Let Us Find It For You!
                        </p>
                    </div>
                    <form
                        action="#"
                        method="POST"
                        class="mx-auto mt-16 max-w-xl sm:mt-20"
                    >
                        <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <label
                                    htmlFor="first-name"
                                    class="block text-sm/6 font-semibold text-gray-900"
                                >
                                    First name
                                </label>
                                <div class="mt-2.5">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="last-name"
                                    class="block text-sm/6 font-semibold text-gray-900"
                                >
                                    Last name
                                </label>
                                <div class="mt-2.5">
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        autoComplete="family-name"
                                        class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                    />
                                </div>
                            </div>
                            <div class="sm:col-span-2">
                                <label
                                    htmlFor="email"
                                    class="block text-sm/6 font-semibold text-gray-900"
                                >
                                    Email
                                </label>
                                <div class="mt-2.5">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                    />
                                </div>
                            </div>

                            <div class="sm:col-span-2">
                                <label
                                    htmlFor="phone-number"
                                    class="block text-sm/6 font-semibold text-gray-900"
                                >
                                    Phone number
                                </label>
                                <div class="mt-2.5">
                                    <div class="flex rounded-md bg-white outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                                        <div class="grid shrink-0 grid-cols-1 focus-within:relative"></div>
                                        <input
                                            type="text"
                                            name="phone-number"
                                            id="phone-number"
                                            class="block min-w-0 grow py-1.5 pl-3 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                                            placeholder="123-456-7890"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="sm:col-span-2">
                                <label
                                    htmlFor="location"
                                    class="block text-sm/6 font-semibold text-gray-900"
                                >
                                    Location
                                </label>
                                <div class="mt-2.5">
                                    <input
                                        type="text"
                                        name="location"
                                        id="company"
                                        autoComplete="organization"
                                        class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                    />
                                </div>
                            </div>

                            <div class="sm:col-span-2">
                                <label
                                    htmlFor="message"
                                    class="block text-sm/6 font-semibold text-gray-900"
                                >
                                    Message
                                </label>
                                <div class="mt-2.5">
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows="4"
                                        class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                    ></textarea>
                                </div>
                            </div>
                            <div class="flex gap-x-4 sm:col-span-2">
                                <div class="flex h-6 items-center">
                                    <button
                                        type="button"
                                        class="flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        role="switch"
                                        aria-checked="false"
                                        aria-labelledby="switch-1-label"
                                    >
                                        <span class="sr-only">
                                            Agree to policies
                                        </span>
                                        <span
                                            aria-hidden="true"
                                            class="size-4 translate-x-0 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                                        ></span>
                                    </button>
                                </div>
                                <label
                                    class="text-sm/6 text-gray-600"
                                    id="switch-1-label"
                                >
                                    I understand that information I enter will
                                    be stored and shared with relevant members
                                    of the site and that I may be contacted by
                                    these members and/or the admin of the
                                    website.{' '}
                                    <a
                                        href="#"
                                        class="font-semibold text-indigo-600"
                                    >
                                        privacy&nbsp;policy
                                    </a>
                                    .
                                </label>
                            </div>
                        </div>
                        <div class="mt-10">
                            <button
                                type="submit"
                                class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}

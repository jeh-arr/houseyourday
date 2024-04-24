import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import hero from "@/../assets/images/Hero.png";
import background from "@/../assets/images/backgrounds.jpg";
import { Separator } from '@/shadcn/ui/separator';
export default function Welcome({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {
    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome" />
            
                
                
                    <header className='sticky top-0 z-10 flex-row w-full py-4 border-b-2 shadow-lg bg-white/60 padding-x backdrop-blur-lg border-neutral-300/30 '>
                            
                            <nav className="flex justify-end right-0 top-0 flex-1 mx-3 text-black">
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-gray-900 dark:hover:text-gray-900/80 dark:focus-visible:ring-white"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-gray-900 dark:hover:text-gray-900/80 dark:focus-visible:ring-white"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-gray-900 dark:hover:text-gray-900/80 dark:focus-visible:ring-white"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </header>
                        <main className="bg-white h-screen w-full overflow-hidden mx-auto">
    <div 
        className="items-center h-screen grid gap-3 lg:grid-cols-2 lg:gap-8"
        style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(${background})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: '2rem', // Adjust padding as needed
        }}
    >   <div className="flex flex-col p-8">
        <img 
            src={hero}
            alt="Logo"
            className="object-contain h-64 lg:h-3/4 "
        />
        </div>
        <div className="flex flex-col p-8 bg-gray-700 bg-opacity-90 rounded-lg shadow-lg">
            <h1 className='text-6xl font-bold text-white mb-4'>Boarding House Finder</h1>
            <Separator className='h-1 bg-green-600 my-2'></Separator>
            <p className='text-lg text-white leading-relaxed'>
                Unlock the perfect haven with 'House Your Day' – your ultimate boarding house finder! 
                Seamlessly navigate through an array of cozy abodes tailored to your needs. 
                Discover comfort, convenience, and community with just a click. 
                Let 'House Your Day' be your guiding light to a home-away-from-home experience like no other!
            </p>
        </div>
    </div>
</main>
                        
                
        
                    
            
        </>
    );
}

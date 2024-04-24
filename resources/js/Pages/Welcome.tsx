import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import hero from "@/../assets/images/Hero.png";
import background from "@/../assets/images/backgrounds.jpg";
import about1 from "@/../assets/about/received_367365859634089.jpeg";
import about2 from "@/../assets/about/received_409177845194325.jpeg";
import about3 from "@/../assets/about/received_757612556514486.jpeg";
import about4 from "@/../assets/about/received_949270899905499.jpeg";
import about5 from "@/../assets/about/received_958224242602157.jpeg";
import about6 from "@/../assets/about/received_1168111894346934.jpeg";
import about7 from "@/../assets/about/received_1858311201282561.jpeg";
import about8 from "@/../assets/about/received_3090447781092130.jpeg";
import about9 from "@/../assets/about/received_7399185360167305.jpeg";
import about10 from "@/../assets/about/received_7607827092607659.jpeg";

import { Separator } from '@/shadcn/ui/separator';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/shadcn/ui/card"



export default function Welcome({ auth,listing, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {
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
                            <section className="w-full   bg-slate-800 dark:bg-gray-800">
                            <div className="grid justify-center  h-full gap-3 mx-auto container-2xl">
                                <div className=" gap-4 p-8 text-center">
                                    <h1 className="pb-5 font-sans bg-pin text-6xl w-max font-bold text-green-700">
                                        About Us </h1>
                                                    <Separator className='h-1  bg-green-700 '></Separator>
                                                    
                                                    
                                                    
                                                    
                                    </div>
                                    <div className="container mx-auto p-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                                            <Card className="bg-white bg-opacity-90 flex flex-col items-center min-w-[250px]">
                                                <CardHeader className="flex justify-center items-center">
                                                    <img src={about1} alt="" className="w-2/3 h-auto rounded-full" />
                                                </CardHeader>
                                                <div className="p-5 flex flex-col items-center">
                                                <CardTitle className="text-2xl font-semibold mb-4 flex justify-center items-center">Asnea Z. Balaiman</CardTitle>
                                                    <CardDescription className="text-md text-gray-700 ">
                                                        <p><strong>POSITION:</strong> Graphics and Design Artist</p>
                                                        <p><strong>CELLPHONE #:</strong> 09454913610</p>
                                                        <p><strong>EMAIL:</strong> <a href="mailto:asneabalaiman@gmail.com" className="text-blue-500 hover:underline">asneabalaiman@gmail.com</a></p>
                                                        <p><strong>SOCIAL MEDIA</strong></p>
                                                        <ul className="list-disc list-inside">
                                                            <li><a href="https://www.facebook.com/jannahas.balaiman?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">FACEBOOK</a></li>
                                                            <li><a href="https://www.instagram.com/balaimanasnea?igsh=MTVrYWFwdTZ4bTV4Mw==" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">IG</a></li>
                                                        </ul>
                                                    </CardDescription>
                                                </div>
                                            </Card>

                                            <Card className="bg-white bg-opacity-90 flex flex-col items-center min-w-[250px]">
                                                <CardHeader className="flex justify-center items-center">
                                                    <img src={about4} alt="" className="w-2/3 h-auto rounded-full" />
                                                </CardHeader>
                                                <div className="p-5 flex flex-col items-center">
                                                    <CardTitle className="text-2xl font-semibold mb-4 flex justify-center items-center">Chelyn Maeve S. Jobiane</CardTitle>
                                                    <CardDescription className="text-md text-gray-700">
                                                        <p><strong>POSITION:</strong> Project Manager</p>
                                                        <p><strong>CELLPHONE #:</strong> 09632641546</p>
                                                        <p><strong>EMAIL:</strong> <a href="mailto:chelynmaevejobiane@gmail.com" className="text-blue-500 hover:underline">chelynmaevejobiane@gmail.com</a></p>
                                                        <p><strong>SOCIAL MEDIA</strong></p>
                                                        <ul className="list-disc list-inside">
                                                            <li><a href="https://www.facebook.com/chelyn.1207" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">FACEBOOK</a></li>
                                                            <li><a href="https://www.instagram.com/chlynmv?igsh=MWY2eWV6N3c0MzFzcQ==" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">IG</a></li>
                                                        </ul>
                                                    </CardDescription>
                                                </div>
                                            </Card>

                                            <Card className="bg-white bg-opacity-90 flex flex-col items-center min-w-[250px]">
                                                <CardHeader className="flex justify-center items-center">
                                                    <img src={about10} alt="" className="w-2/3 h-auto rounded-full" />
                                                </CardHeader>
                                                <div className="p-5 flex flex-col items-center">
                                                    <CardTitle className="text-2xl font-semibold mb-4 flex justify-center items-center">Dominic Anthony L. Jadulos</CardTitle>
                                                    <CardDescription className="text-md text-gray-700">
                                                        <p><strong>POSITION:</strong> HTML Developer</p>
                                                        <p><strong>CELLPHONE #:</strong> 09638255427</p>
                                                        <p><strong>EMAIL:</strong> <a href="mailto:iceeebbdadawgg@gmail.com" className="text-blue-500 hover:underline">iceeebbdadawgg@gmail.com</a></p>
                                                        <p><strong>SOCIAL MEDIA</strong></p>
                                                        <ul className="list-disc list-inside">
                                                            <li><a href="https://www.facebook.com/share/awGgstcZNTWpgxm9/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">FACEBOOK</a></li>
                                                            <li><a href="https://www.instagram.com/iceeeeeebb?igsh=MXIyN250eDByYWZvaA==" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">IG</a></li>
                                                        </ul>
                                                    </CardDescription>
                                                </div>
                                            </Card>

                                            
                                            <Card className="bg-white bg-opacity-90 flex flex-col items-center min-w-[250px]">
                                                <CardHeader className="flex justify-center items-center">
                                                    <img src={about7} alt="" className="w-2/3 h-auto rounded-full" />
                                                </CardHeader>
                                                <div className="p-5 flex flex-col items-center">
                                                    <CardTitle className="text-2xl font-semibold mb-4 flex justify-center items-center">Faiz C. Mayo</CardTitle>
                                                    <CardDescription className="text-md text-gray-700">
                                                        <p><strong>POSITION:</strong> Project Manager</p>
                                                        <p><strong>CELLPHONE #:</strong> 09615785916</p>
                                                        <p><strong>EMAIL:</strong> <a href="mailto:faizcabalo783@gmail.com" className="text-blue-500 hover:underline">faizcabalo783@gmail.com</a></p>
                                                        <p><strong>SOCIAL MEDIA</strong></p>
                                                        <ul className="list-disc list-inside">
                                                            <li><a href="https://www.facebook.com/alashme.abas?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">FACEBOOK</a></li>
                                                            <li><a href="https://www.instagram.com/mayocabalo?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">IG</a></li>
                                                        </ul>
                                                    </CardDescription>
                                                </div>
                                            </Card>
                                            
                                            <Card className="bg-white bg-opacity-90 flex flex-col items-center min-w-[250px]">
                                                <CardHeader className="flex justify-center items-center">
                                                    <img src={about2} alt="" className="w-2/3 h-auto rounded-full" />
                                                </CardHeader>
                                                <div className="p-5 flex flex-col items-center">
                                                    <CardTitle className="text-2xl font-semibold mb-4 flex justify-center items-center">Jorcell Francis T. Mangunay</CardTitle>
                                                    <CardDescription className="text-md text-gray-700">
                                                        <p><strong>POSITION:</strong> HTML Developer</p>
                                                        <p><strong>CELLPHONE #:</strong> 09683055597</p>
                                                        <p><strong>EMAIL:</strong> <a href="mailto:jorcellfrancistmangunay@gmail.com" className="text-blue-500 hover:underline">jorcellfrancistmangunay@gmail.com</a></p>
                                                        <p><strong>SOCIAL MEDIA</strong></p>
                                                        <ul className="list-disc list-inside">
                                                            <li><a href="https://www.facebook.com/profile.php?id=100005619738187&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">FACEBOOK</a></li>
                                                            <li><a href="https://www.instagram.com/jorcellgrancis?igsh=OGQ5ZDc2Odk2ZA==" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">IG</a></li>
                                                        </ul>
                                                    </CardDescription>
                                                </div>
                                            </Card>

                                            {/* Marjorie T. Cantomayor */}
                                            <Card className="bg-white bg-opacity-90 flex flex-col items-center min-w-[250px]">
                                                <CardHeader className="flex justify-center items-center">
                                                    <img src={about6} alt="" className="w-2/3 h-auto rounded-full" />
                                                </CardHeader>
                                                <div className="p-5 flex flex-col items-center">
                                                    <CardTitle className="text-2xl font-semibold mb-4 flex justify-center items-center">Marjorie T. Cantomayor</CardTitle>
                                                    <CardDescription className="text-md text-gray-700">
                                                        <p><strong>POSITION:</strong> Graphics and Design Artist</p>
                                                        <p><strong>CELLPHONE #:</strong> 09709779380</p>
                                                        <p><strong>EMAIL:</strong> <a href="mailto:marjoriecantomayor@gmail.com" className="text-blue-500 hover:underline">marjoriecantomayor@gmail.com</a></p>
                                                        <p><strong>SOCIAL MEDIA</strong></p>
                                                        <ul className="list-disc list-inside">
                                                            <li><a href="https://www.facebook.com/marjorie.tagalogcantomayor" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">FACEBOOK</a></li>
                                                            <li><a href="https://www.instagram.com/jlooouu?igsh=ZWlrdmQ2OGZqYWJo" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">IG</a></li>
                                                        </ul>
                                                    </CardDescription>
                                                </div>
                                            </Card>
                                            
                                        
                                            <Card className="bg-white bg-opacity-90 flex flex-col items-center min-w-[250px]">
                                                <CardHeader className="flex justify-center items-center">
                                                    <img src={about8} alt="" className="w-2/3 h-auto rounded-full" />
                                                </CardHeader>
                                                <div className="p-5 flex flex-col items-center">
                                                    <CardTitle className="text-2xl font-semibold mb-4 flex justify-center items-center">Shedy Wencel F. Fugata</CardTitle>
                                                    <CardDescription className="text-md text-gray-700">
                                                        <p><strong>POSITION:</strong> System/Information Architects</p>
                                                        <p><strong>CELLPHONE #:</strong> 09638308876</p>
                                                        <p><strong>EMAIL:</strong> <a href="mailto:fugatashedy02@gmail.com" className="text-blue-500 hover:underline">fugatashedy02@gmail.com</a></p>
                                                        <p><strong>SOCIAL MEDIA</strong></p>
                                                        <ul className="list-disc list-inside">
                                                            <li><a href="https://www.facebook.com/profile.php?id=100008161484955" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">FACEBOOK</a></li>
                                                            <li><a href="https://www.instagram.com/wenxelar?utm_source=qr&igsh=MzNlNGNkZWQ4Mg%3D%3D" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">IG</a></li>
                                                        </ul>
                                                    </CardDescription>
                                                </div>
                                            </Card>

                                            {/* Shena Andrea C. Latada */}
                                            <Card className="bg-white bg-opacity-90 flex flex-col items-center min-w-[250px]">
                                                <CardHeader className="flex justify-center items-center">
                                                    <img src={about3} alt="" className="w-2/3 h-auto rounded-full" />
                                                </CardHeader>
                                                <div className="p-5 flex flex-col items-center">
                                                    <CardTitle className="text-2xl font-semibold mb-4 flex justify-center items-center">Shena Andrea C. Latada</CardTitle>
                                                    <CardDescription className="text-md text-gray-700">
                                                        <p><strong>POSITION:</strong> Graphics and Design Artist</p>
                                                        <p><strong>CELLPHONE #:</strong> 09277396039</p>
                                                        <p><strong>EMAIL:</strong> <a href="mailto:shenaandreaaa@gmail.com" className="text-blue-500 hover:underline">shenaandreaaa@gmail.com</a></p>
                                                        <p><strong>SOCIAL MEDIA</strong></p>
                                                        <ul className="list-disc list-inside">
                                                            <li><a href="https://www.facebook.com/shenaandrea.latada?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">FACEBOOK</a></li>
                                                            <li><a href="https://www.instagram.com/shenalatada?igsh=anZkZnp1ZzJweGts&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">IG</a></li>
                                                        </ul>
                                                    </CardDescription>
                                                </div>
                                            </Card>

                                            <Card className="bg-white bg-opacity-90 flex flex-col items-center min-w-[250px]">
                                                <CardHeader className="flex justify-center items-center">
                                                    <img src={about9} alt="" className="w-2/3 h-auto rounded-full" />
                                                </CardHeader>
                                                <div className="p-5 flex flex-col items-center">
                                                    <CardTitle className="text-2xl font-semibold mb-4 flex justify-center items-center">Sophia Ysabelle A. Sorongon</CardTitle>
                                                    <CardDescription className="text-md text-gray-700">
                                                        <p><strong>POSITION:</strong> System/Information Architects</p>
                                                        <p><strong>CELLPHONE #:</strong> 09061122556</p>
                                                        <p><strong>EMAIL:</strong> <a href="mailto:ysasorongon7@gmail.com" className="text-blue-500 hover:underline">ysasorongon7@gmail.com</a></p>
                                                        <p><strong>SOCIAL MEDIA</strong></p>
                                                        <ul className="list-disc list-inside">
                                                            <li><a href="https://www.facebook.com/sophia.sorongon.5" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">FACEBOOK</a></li>
                                                            <li><a href="https://www.instagram.com/im.soph_ia?igsh=eGl3OXFyODExMDVh" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">IG</a></li>
                                                        </ul>
                                                    </CardDescription>
                                                </div>
                                            </Card>

                                            {/* Yron Derf D. Jabagat */}
                                            <Card className="bg-white bg-opacity-90 flex flex-col items-center min-w-[250px]">
                                                <CardHeader className="flex justify-center items-center">
                                                    <img src={about5} alt="" className="w-2/3 h-auto rounded-full" />
                                                </CardHeader>
                                                <div className="p-5 flex flex-col items-center">
                                                    <CardTitle className="text-2xl font-semibold mb-4 flex justify-center items-center">Yron Derf D. Jabagat</CardTitle>
                                                    <CardDescription className="text-md text-gray-700">
                                                        <p><strong>POSITION:</strong> HTML Developer</p>
                                                        <p><strong>CELLPHONE #:</strong> 09690371264</p>
                                                        <p><strong>EMAIL:</strong> <a href="mailto:yronderfjabagat@gmail.com" className="text-blue-500 hover:underline">yronderfjabagat@gmail.com</a></p>
                                                        <p><strong>SOCIAL MEDIA</strong></p>
                                                        <ul className="list-disc list-inside">
                                                            <li><a href="https://www.facebook.com/yronderf.jabagat.1?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">FACEBOOK</a></li>
                                                            <li><a href="https://www.instagram.com/eyy_r0n_derf?igsh=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">IG</a></li>
                                                        </ul>
                                                    </CardDescription>
                                                </div>
                                            </Card>

                                    </div>
                                </div>
                                </div>
                            </section>  
                        
                
        
                    
            
        </>
    );
}

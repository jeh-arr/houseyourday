import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head ,Link} from '@inertiajs/react';
import { PageProps } from '@/types';
import { Button } from '@/shadcn/ui/button'
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import  backgroundimage  from "@/../assets/images/Vector.jpg";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/shadcn/ui/card"

  import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/shadcn/ui/carousel"
  
  import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/shadcn/ui/popover"
  
export default function listingdetails({ auth, listing }: PageProps) {

  console.log(listing)
    return (
        <>
        <header className='bg-green-950 border-b border-gray-100 '>
                                    
                                    <nav className="p-3 flex justify-end right-0 top-0 flex-1 mx-3 text-white">
                                        
                                            <>
                                            <Link
                                                href={route('root')}
                                                className="rounded-md px-3 py-2 text-white ring-1 ring-transparent transition hover:text-white/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-gray-900 dark:hover:text-gray-900/80 dark:focus-visible:ring-white"
                                            >
                                                Home
                                            </Link>
                                                <Link
                                                    href={route('login')}
                                                    className="rounded-md px-3 py-2 text-white ring-1 ring-transparent transition hover:text-white/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-gray-900 dark:hover:text-gray-900/80 dark:focus-visible:ring-white"
                                                >
                                                    Log in
                                                </Link>
                                                <Link
                                                    href={route('register')}
                                                    className="rounded-md px-3 py-2 text-white ring-1 ring-transparent transition hover:text-white/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-gray-900 dark:hover:text-gray-900/80 dark:focus-visible:ring-white"
                                                >
                                                    Register
                                                </Link>
                                            </>
                                        
                                    </nav>
                                </header>
            <Head title="Details" />
            <main style={{ 
                height: '100vh',    
                backgroundImage: ` url(${backgroundimage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center'
                
            }}>
            <div className="container pt-8">
                <div className="mx-auto  max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-slate-400/40 backdrop-blur-sm shadow-sm sm:rounded-lg">
                        <div className="p-3 m-2 text-3xl font-extrabold text-left text-white rounded-lg shadow-sm bg-slate-500"> BOARDING HOUSE DETAILS:</div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 m-5">
                            <div className="flex flex-col justify-center items-center max-h-2/3 bg-slate-100">
                                
                        <Carousel  >
                          <CarouselContent  >
                            {JSON.parse(listing.image).map((image: string, index: number) => (
                              <CarouselItem  key={index}>
                                <img
                                  src={`/storage/${image}`}
                                  alt={`Image ${index}`}
                                  style={{
                                    width: "100%",
                                    height: "max-content",
                                    objectFit: "cover",
                                  }}
                                />
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          
                            <CarouselPrevious className="p-2 rounded-full ml-14 bg-gray-700 text-white">
                            
                            </CarouselPrevious>
                            <CarouselNext className="p-2 rounded-full mr-14 bg-gray-700 text-white">
                              
                            </CarouselNext>
                          
                        </Carousel>
                            </div>

                          <div className='flex flex-col'>
                                <div className="flex flex-col pt-2 px-3 gap-2">
                                    <InputLabel
                                        htmlFor="property_name"
                                        value="Boarding House Name"
                                    />
                                    <TextInput
                                        id="property_name"
                                        name="property_name"
                                        type="text"
                                        value={listing.property_name}
                                        readOnly={true}
                                    />
                                </div>

                                <div className="flex flex-col pt-2 px-3 gap-2">
                                    <InputLabel
                                        htmlFor="property_address"
                                        value="Boarding House Address"
                                    />
                                    <TextInput
                                        id="property_address"
                                        name="property_address"
                                        type="text"
                                        value={listing.property_address}
                                        readOnly={true}
                                    />
                                </div>

                                
                                
                                
                                <div className='grid sm:grid-cols-2'>
                                  <div className='flex flex-col pt-2 px-3 gap-2'>
                          
                                    <InputLabel htmlFor="rooms" value="Rooms" />
                                    <TextInput
                                        id="rooms"
                                        name="rooms"
                                        type='number'
                                        value={listing.rooms}
                                        readOnly={true}
                                        />
                                  </div>
                                  <div className='flex flex-col pt-2 px-3 gap-2'>
                                
                                  <InputLabel htmlFor="availability" value="Availability" />
                                  <TextInput
                                    id="availability"
                                    name="availability"
                                    type='availability'
                                    value={listing.availability}
                                    readOnly={true}
                                    />
                                  </div>
                            
                                </div>
                            
                          
                              <div className='flex flex-col pt-2 px-3 gap-2'>
                                    <InputLabel htmlFor="description" value="Description" />
                                    <textarea
                                    className='text-base p-3 font-sans bg-slate-50 rounded-sm'
                                    rows={3} // Specify the number of rows
                                    cols={50}
                                    id="description"
                                    name="description"
                                    value= {listing.description}
                                    readOnly={true}
                                    />
                                </div>
                                <div className="flex flex-col pt-2 px-3 gap-2">
                                    <InputLabel
                                        htmlFor="price"
                                        value="Monthly Rent"
                                    />
                                    <TextInput
                                        id="price"
                                        name="price"
                                        type="text"
                                        value={listing.price}
                                        readOnly={true}
                                    />
                                </div>
                                <div className='grid p-6 gap-3 m-3 sm:grid-cols-2'>
                                <Popover>
                                  <PopoverTrigger asChild>
                                    <Button variant="outline">Show Contact Details</Button>
                                  </PopoverTrigger>
                                  <PopoverContent>
                                    <div className="flex flex-col pt-2 px-3 gap-2">
                                      <p>Interested?...Contact us at:</p>
                                      
                                      <InputLabel
                                          htmlFor="phone"
                                          value="Contact Details"
                                      />
                                      <TextInput
                                          id="phone"
                                          name="phone"
                                          type="text"
                                          // @ts-ignore
                                          value={listing.user.phone}
                                          readOnly={true}
                                      />
                                    </div>

                                  </PopoverContent>
                                </Popover>  
                                  
                                <Button  >
                                  <Link 
                                  href={route('renter.index')}>
                                    back
                                  </Link>
                                </Button>
                                </div>  
                          </div>
                        </div>
                    </div>
                </div>
            </div>
            </main>
        </>
    );
}

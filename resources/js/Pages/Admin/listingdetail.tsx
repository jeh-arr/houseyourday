import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head ,Link, useForm} from '@inertiajs/react';
import { PageProps } from '@/types';
import { Button } from '@/shadcn/ui/button'
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Transition } from '@headlessui/react';
import  backgroundimage  from "@/../assets/images/Vector.jpg";
import { useEffect, FormEventHandler } from 'react';
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


  const { data, setData, post, processing, errors,delete:destroy, reset ,progress, recentlySuccessful} = useForm({
    user_id: auth.user.id,
      property_name: listing.property_name,
      property_address: listing.property_address,
      
      permit: listing.permit,
      price: listing.price,
      availability: listing.availability,
      description: listing.description,
      rooms: listing.rooms,
      image: null,      
    status : 'Approved',
  });

  

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    post(route('landlord.update',listing.id));
  };

  const ondelete: FormEventHandler = (e) => {
    e.preventDefault();
    destroy(route('landlord.destroy',listing.id));
    //post(route('landlord.update',listing.id));
  };
  console.log(listing)
    return (
      <AuthenticatedLayout
      user={auth.user}
      header={
          <h2 className="text-xl font-semibold leading-tight text-gray-800">
              Admin Dashboard
          </h2>
      }
      >
      
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
                                <div className='flex flex-col pt-2 px-3 gap-2'>
                                  <InputLabel
                                        htmlFor="permit"
                                        value="Business Permit No." 
                                    />
                                  <TextInput

                                    id="permit"
                                    name="permit"
                                    type='text'
                                    value= {listing.permit}
                                    readOnly={true}
                                    />
                                </div>
                                
                                <form onSubmit={submit}>
                                <div className='grid p-6 gap-3 m-3 sm:grid-cols-2'>
                                <Button disabled={processing}>
                                  Approve 
                                </Button>
                                
                                <Button variant="destructive" onClick={ondelete} >
                                  Delete
                                </Button>
                                <Transition
                                show={recentlySuccessful}
                                enter="transition ease-in-out"
                                enterFrom="opacity-0"
                                leave="transition ease-in-out"
                                leaveTo="opacity-0"
                                >
                                    <p className="text-sm text-gray-600">Saved.</p>
                                </Transition>
                                </div>
                                </form>
                          
                                
                          </div>
                        </div>
                    </div>
                </div>
            </div>
            </main>
        </AuthenticatedLayout>
    );
}

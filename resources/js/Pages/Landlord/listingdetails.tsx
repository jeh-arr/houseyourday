import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { PageProps } from '@/types';
import { Button } from '@/shadcn/ui/button'
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Transition } from '@headlessui/react';
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
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/shadcn/ui/select"
  

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
    });

    console.log(data.property_name)

    const submit: FormEventHandler = (e) => {
      e.preventDefault();

      post(route('landlord.update',listing.id));
    };

    const ondelete: FormEventHandler = (e) => {
      e.preventDefault();
      destroy(route('landlord.destroy',listing.id));
      //post(route('landlord.update',listing.id));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            
        >
            <Head title="Details" />
            
            <div className="container pt-8">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-slate-400/40 backdrop-blur-smshadow-sm sm:rounded-lg">
                        <div className="p-3 m-2 text-3xl font-extrabold text-left text-white rounded-lg shadow-sm bg-slate-500"> BOARDING HOUSE DETAILS:</div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 m-5">
                        <div className="flex flex-col justify-center items-center bg-slate-100">
                        
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
                      <form onSubmit={submit} >                  
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
                                        value={data.property_name}
                                        onChange={(e) => setData('property_name', e.target.value)}
                                        
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
                                        
                                        value={data.property_address}
                                        onChange={(e) => setData('property_address', e.target.value)}
                                        
                                    />
                                </div>

                                
                                <div className='grid sm:grid-cols-2'>
                          <div className='flex flex-col pt-2 px-3 gap-2'>
                          
                          <InputLabel htmlFor="rooms" value="Rooms" />
                          <TextInput
                              id="rooms"
                              name="rooms"
                              type='number'
                              value={data.rooms}
                              onChange={(e) => setData('rooms', e.target.value)}
                              />
                          </div>
                            <div className='flex flex-col pt-2 px-3 gap-2'>
                          
                            <InputLabel htmlFor="availability" value="Availability" />
                            <Select value={data.availability} onValueChange={(value:string) => setData('availability', value)}  >
                                <SelectTrigger className="bg-slate-50  w-full">
                                    <SelectValue placeholder="Select Availability" />
                                </SelectTrigger >
                                <SelectContent className="bg-slate-50 w-full">
                                    <SelectGroup>
                                        <SelectLabel>Availability</SelectLabel>
                                        <SelectItem value="Available">Available</SelectItem>
                                        <SelectItem value="Not Available">Not Available</SelectItem>
                                        <SelectItem value="Soon">Soon</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            
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
                                value= {data.description}
                                onChange={(e) => setData('description', e.target.value)}
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
                                        value={data.price}
                                        onChange={(e) => setData('price', e.target.value)}
                                        
                                    />
                                </div>
                                <div className='flex flex-col pt-2 px-3 gap-2'>
                            <TextInput
                              id="permit"
                              name="permit"
                              type='text'
                              value= {data.permit}
                              onChange={(e) => setData('permit', e.target.value)}
                              />
                          </div>
                                <div className='grid p-6 gap-3 m-3 sm:grid-cols-2'>
                                <Button disabled={processing}>
                                  Update
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

                          </div>
                          </form>      
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

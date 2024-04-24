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
  

export default function listingdetails({ auth, listing }: PageProps) {

    const { data, setData, post, processing, errors,delete:destroy, reset ,progress, recentlySuccessful} = useForm({
          
      user_id: auth.user.id,
      property_name: listing.property_name,
      property_address: listing.property_address,
      
      postal:listing.postal,
      price: listing.price,
      availability: listing.availability,
      bathroom: listing.bathroom,
      kitchen: listing.kitchen,
      other: listing.other,
      rules: listing.rules,
      curfew: listing.curfew,
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
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-3 m-2 text-3xl font-extrabold text-center text-white rounded-lg shadow-sm bg-slate-500"> PROPERTY DETAILS:</div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 m-5">
                            <div className="flex flex-col justify-center items-center bg-slate-100">
                                <div>
                                    <img
                                        src={`/storage/${listing.image}`}
                                        alt="Image Description"
                                        style={{
                                            width: "100%",
                                            height: "max-content",
                                            objectFit: "cover",
                                            marginBottom: "20px",
                                        }}
                                    />
                                </div>
                            </div>
                      <form onSubmit={submit} >                  
                          <div className='flex flex-col'>
                                <div className="flex flex-col pt-2 px-3 gap-2">
                                    <InputLabel
                                        htmlFor="property_name"
                                        value="Property Name"
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
                                        value="Property Address"
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
                                  <div className="flex flex-col pt-2 px-3 gap-2">
                                      <InputLabel
                                          htmlFor="kitchen"
                                          value="Kitchen"
                                      />
                                      <TextInput
                                          id="kitchen"
                                          name="Kitchen"
                                          type="text"
                                          value={data.kitchen}
                                          onChange={(e) => setData('kitchen', e.target.value)}
                                          
                                      />
                                  </div>

                                  <div className="flex flex-col pt-2 px-3 gap-2">
                                      <InputLabel
                                          htmlFor="bathroom"
                                          value="Bathroom"
                                      />
                                      <TextInput
                                          id="bathroom"
                                          name="bathroom"
                                          type="text"
                                          value={data.bathroom}
                                          onChange={(e) => setData('bathroom', e.target.value)}
                                          
                                      />
                                  </div>
                                </div>
                                <div className="flex flex-col pt-2 px-3 gap-2">
                                    <InputLabel
                                        htmlFor="other"
                                        value="Other Amenities"
                                    />
                                    <TextInput
                                        id="other"
                                        name="other"
                                        type="text"
                                        value={data.other}
                                        onChange={(e) => setData('other', e.target.value)}
                                        
                                    />
                                </div>
                                <div className='grid sm:grid-cols-2'>
                                  <div className="flex flex-col pt-2 px-3 gap-2">
                                      <InputLabel
                                          htmlFor="curfew"
                                          value="Curfew"
                                      />
                                      <TextInput
                                          id="curfew"
                                          name="curfew"
                                          type="text"
                                          value={data.curfew}
                                          onChange={(e) => setData('curfew', e.target.value)}
                                          
                                      />
                                  </div>

                                  <div className="flex flex-col pt-2 px-3 gap-2">
                                      <InputLabel
                                          htmlFor="rules"
                                          value="Rules"
                                      />
                                      <TextInput
                                          id="rules"
                                          name="rules"
                                          type="text"
                                          value={data.rules}
                                          onChange={(e) => setData('rules', e.target.value)}
                                          
                                      />
                                  </div>
                                </div>
                                <div className="flex flex-col pt-2 px-3 gap-2">
                                    <InputLabel
                                        htmlFor="availability"
                                        value="Availability"
                                    />
                                    <TextInput
                                        id="availability"
                                        name="availability"
                                        type="text"
                                        value={data.availability}
                                        onChange={(e) => setData('availability', e.target.value)}
                                        
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

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { Button } from '@/shadcn/ui/button'
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/shadcn/ui/card"
  

export default function listingdetails({ auth, listing }: PageProps) {

  console.log(listing)
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
                                        value={listing.property_name}
                                        readOnly={true}
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
                                        value={listing.property_address}
                                        readOnly={true}
                                    />
                                </div>

                                <div className="flex flex-col pt-2 px-3 gap-2">
                                    <InputLabel
                                        htmlFor="property_city"
                                        value="Property City"
                                    />
                                    <TextInput
                                        id="property_city"
                                        name="property_city"
                                        type="text"
                                        value={listing.city}
                                        readOnly={true}
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
                                          value={listing.kitchen}
                                          readOnly={true}
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
                                          value={listing.bathroom}
                                          readOnly={true}
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
                                        value={listing.other}
                                        readOnly={true}
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
                                          value={listing.curfew}
                                          readOnly={true}
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
                                          value={listing.rules}
                                          readOnly={true}
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
                                        value={listing.availability}
                                        readOnly={true}
                                    />
                                </div>
                                <div className="flex flex-col pt-2 px-3 gap-2">
                                    <InputLabel
                                        htmlFor="price"
                                        value="Price"
                                    />
                                    <TextInput
                                        id="price"
                                        name="price"
                                        type="text"
                                        value={listing.price}
                                        readOnly={true}
                                    />
                                </div>
                                <div className="flex flex-col pt-2 px-3 mt-2 gap-2">
                                <Button className='mx-16 bg-primary hover:bg-gray-600'>
                                  asd
                                </Button>
                                </div>  
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
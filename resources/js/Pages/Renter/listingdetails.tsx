import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head ,Link} from '@inertiajs/react';
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
  
  import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/shadcn/ui/popover"
  
export default function listingdetails({ auth, listing }: PageProps) {

  console.log(listing)
    return (
        <AuthenticatedLayout
            user={auth.user}
            
        >
            <Head title="Details" />
            
            <div className="container h-full pt-8">
                <div className="mx-auto  max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-slate-400/50 backdrop-blur-lg shadow-sm sm:rounded-lg">
                        <div className="p-3 m-2 text-3xl font-extrabold text-left text-white rounded-lg shadow-sm bg-slate-500"> BOARDING HOUSE DETAILS:</div>
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
                                            
                                        }}
                                    />
                                </div>
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

                                
                                <div className='grid sm:grid-cols-2 n'>
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
                                          htmlFor=""
                                          value="Contact Details"
                                      />
                                      <TextInput
                                          id="availability"
                                          name="availability"
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
        </AuthenticatedLayout>
    );
}

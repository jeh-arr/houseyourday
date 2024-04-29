import { useEffect, FormEventHandler } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import { format } from "date-fns"
import { LuCalendar } from "react-icons/lu";
import { useState } from "react"
import { Calendar } from "@/shadcn/ui/calendar"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/shadcn/ui/select"
  import {
    
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/shadcn/ui/card"
import { Button } from '@/shadcn/ui/button';
import { cn } from "@/Components/lib/utils"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shadcn/ui/popover"
import { PageProps } from '@/types';
// @ts-ignore



export default function addlisting({ auth }: PageProps){
    const [date, setDate] = useState<Date>()
    //const [cities, setCities] = useState<string[]>([]);
    

    const { data, setData, post, processing, errors, reset ,progress} = useForm({
        
        user_id: auth.user.id,
        property_name: '',
        property_address: '',
        price: '',
        availability: '',
        description: '',
        rooms: '',
        image: [] as string[],
        permit: '',
    });

      
      
      const handleFileChange = (files: any) => {
        if (files.length > 3) {
          alert('Please select up to 3 images.');
          return;
        }
      
        const imagesArray: string[] = [];

      
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          imagesArray.push(file);
          // Handle each file (e.g., upload, store, etc.)
          console.log(`Uploaded image ${i + 1}:`, file);
        }

        setData('image', imagesArray);

      };

    

    
  

    
    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('landlord.store'));
    };

    

    return (
        <AuthenticatedLayout 
            user={auth.user}

        >
            <Head title="AddListing"  />
            <div className="py-12 ">
                <div className="mx-auto max-w-4xl  sm:px-6 lg:px-8 ">
                <Card className='px-3 pt-2 rounded-sm bg-slate-400/40 backdrop-blur-sm font-sans text-2xl text-white' >
                    <CardHeader className='bg-slate-500 m-1 rounded-md' >
                        <CardTitle >BOARDING HOUSE REGISTRATION </CardTitle>                    
                    </CardHeader>
                    
                    
                    <form onSubmit={submit} >   
                        <CardContent className=' text-gray-900 grid  gap-1'>
                            <div className='flex flex-col pt-2 px-3 gap-2'>
                                <InputLabel htmlFor="property_name" value="Boarding House Name" />
                                <TextInput
                                id="property_name"
                                name="property_name"
                                type='text'
                                onChange={(e) => setData('property_name', e.target.value)}
                                />
                            </div>
                            <div className='flex flex-col pt-2 px-3 gap-2'>
                                <InputLabel htmlFor="property_address" value="Boarding House Address" />
                                <TextInput
                                id="property_address"
                                name="property_address"
                                type='text'
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
                              onChange={(e) => setData('rooms', e.target.value)}
                              />
                          </div>
                            <div className='flex flex-col pt-2 px-3 gap-2'>
                          
                            <InputLabel htmlFor="availability" value="Availability" />
                            <Select onValueChange={(value:string) => setData('availability', value)}  >
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
                          
                            <InputLabel htmlFor="price" value="Monthly Rent" />
                            <TextInput
                                id="price"
                                name="price"
                                type='number'
                                onChange={(e) => setData('price', e.target.value)}
                                />
                            </div>

                            <div className='flex flex-col pt-2 px-3 gap-2'>
                                <InputLabel htmlFor="description" value="Description" />
                                <textarea
                                className='text-base p-3 font-sans bg-slate-50 rounded-sm'
                                rows={3} // Specify the number of rows
                                cols={50}
                                id="description"
                                name="description"
                                
                                onChange={(e) => setData('description', e.target.value)}
                                />
                            </div>
                            
                            <div className='flex flex-col pt-2 px-3 gap-2'>
                                <InputLabel htmlFor="image" value="Upload Image" />
                                  

                            <input 
                                    type="file" 
                                    className='border-2 border-gray-200 bg-slate-50 font-sans text-base rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary'
                                    
                                    id="images" 
                                    name="images" 
                                    accept="image/*" 
                                    multiple
                                    onChange={(e) => handleFileChange(e.target.files)}
                                />
                            </div>
                            <div className='flex flex-col pt-2 px-3 gap-2'>
                          
                            <InputLabel htmlFor="permit" value="Business Permit No." />
                            <TextInput
                              id="permit"
                              name="permit"
                              type='text'
                              onChange={(e) => setData('permit', e.target.value)}
                              />
                          </div>
                        </CardContent>
                        <CardFooter className='  gap-3 m-3 grid sm:grid-cols-2' >
                            <Button  disabled={processing }  > 
                            Create
                            </Button>  

                            <Button  >
                              <Link
                                href=''>
                                  Back
                              </Link>
                            </Button>  
                        </CardFooter>

          
                    </form>    
                    
                    
                    
                </Card>
                </div>            
            </div>   
        </AuthenticatedLayout>
    );
}

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
import { city_mun,province, getCityMunByProvince, getProvincesByRegion} from 'phil-reg-prov-mun-brgy';


export default function addlisting({ auth }: PageProps){
    const [date, setDate] = useState<Date>()
    //const [cities, setCities] = useState<string[]>([]);
    

    const { data, setData, post, processing, errors, reset ,progress} = useForm({
        
        user_id: auth.user.id,
        property_name: '',
        property_address: '',
       
        price: '',
        availability: '',
        bathroom: '',
        kitchen: '',
        other: '',
        rules: '',
        curfew: '',
        image: null,
    });

    

    const handleFileChange = (files : any) => {
      if (files.length > 3) {
          alert('Please select up to 3 images.');
          return;
      }
  
      for (let i = 0; i < files.length; i++) {
          const file = files[i];
          setData('image', file);
          // Handle each file (e.g., upload, store, etc.)
          console.log(`Uploaded image ${i + 1}:`, file);
      }
  }

    // useEffect(() => {
        
    //     const region1 = getProvincesByRegion("09");
    //     const region2 = getProvincesByRegion("10");
    //     const region3 = getProvincesByRegion("11");
    //     const region4 = getProvincesByRegion("12");
    //     const region5 = getProvincesByRegion("15");
    //     const region6 = getProvincesByRegion("16");

    //     const mindanao = region1.concat(region2, region3, region4, region5, region6);
        
    //     const cityPromises = region3.map((province : any)  => getCityMunByProvince(province.prov_code));

    // Execute all promises and get the results
    //     Promise.all(cityPromises).then(cities => {
    //         // 'cities' is an array of arrays, flatten it
    //         const flattenedCities = cities.flat();

    //         // Do something with 'flattenedCities'
    //         console.log(flattenedCities);
    //         setCities(flattenedCities);
    //     }).catch(error => {
    //         console.error("Error fetching cities:", error);
    //     });
        
    // }, []); 

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
                <div className="mx-auto max-w-4xl sm:px-6 lg:px-8 ">
                <Card className='px-3 pt-2 rounded-sm font-sans text-2xl text-white' >
                    <CardHeader className='bg-[#366359] m-1 rounded-md' >
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
                          
                            <InputLabel htmlFor="bathroom" value="Bathroom" />
                            <TextInput
                                id="bathroom"
                                name="bathroom"
                                type='text'
                                onChange={(e) => setData('bathroom', e.target.value)}
                                />
                            </div>  
                            <div className='flex flex-col pt-2 px-3 gap-2'>
                          
                            <InputLabel htmlFor="kitchen" value="Kitchen" />
                            <TextInput
                                id="kitchen"
                                name="kitchen"
                                type='text'
                                onChange={(e) => setData('kitchen', e.target.value)}
                                />
                            </div>  
                            <div className='flex flex-col pt-2 px-3 gap-2'>
                          
                            <InputLabel htmlFor="rules" value="Rules" />
                            <TextInput
                                id="rules"
                                name="rules"
                                type='text'
                                onChange={(e) => setData('rules', e.target.value)}
                                />
                            </div>
                            <div className='flex flex-col pt-2 px-3 gap-2'>
                          
                            <InputLabel htmlFor="curfew" value="Curfew" />
                            <TextInput
                                id="curfew"
                                name="curfew"
                                type='text'
                                onChange={(e) => setData('curfew', e.target.value)}
                                />
                            </div>
                            <div className='flex flex-col pt-2 px-3 gap-2'>
                          
                            <InputLabel htmlFor="availability" value="Availability" />
                            <Select onValueChange={(value:string) => setData('availability', value)}  >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select Availability" />
                                </SelectTrigger >
                                <SelectContent className="w-full">
                                    <SelectGroup>
                                        <SelectLabel>Availability</SelectLabel>
                                        <SelectItem value="Available">Available</SelectItem>
                                        <SelectItem value="Not Available">Not Available</SelectItem>
                                        <SelectItem value="Soon">Soon</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            </div>
                            <div className='flex flex-col pt-2 px-3 gap-2'>
                          
                            <InputLabel htmlFor="price" value="Monthly Rent" />
                            <TextInput
                                id="price"
                                name="price"
                                type='text'
                                onChange={(e) => setData('price', e.target.value)}
                                />
                            </div>
                            </div>
                            
                            <div className='flex flex-col pt-2 px-3 gap-2'>
                          
                            <InputLabel htmlFor="other" value="Other Amenities" />
                            <TextInput
                                id="other"
                                name="other"
                                type='text'
                                onChange={(e) => setData('other', e.target.value)}
                                />
                            </div>  
                            <div className='flex flex-col pt-2 px-3 gap-2'>
                                <InputLabel htmlFor="image" value="Upload Image" />
                                  

                            <input 
                                    type="file" 
                                    className='border-2 border-gray-200 bg-white rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                                    
                                    id="images" 
                                    name="images" 
                                    accept="image/*" 
                                    multiple
                                    onChange={(e) => handleFileChange(e.target.files)}
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

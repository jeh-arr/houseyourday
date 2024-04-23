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
    const [cities, setCities] = useState<string[]>([]);
    

    const { data, setData, post, processing, errors, reset } = useForm({
        
      
        property_name: '',
        property_address: '',
        price: '',
        availability: '',
        bathroom: '',
        kitchen: '',
        other: '',
        rules: '',
        curfew: '',
        image: '',
    });

    

    // useEffect(() => {
        
    //     const region1 = getProvincesByRegion("09");
    //     const region2 = getProvincesByRegion("10");
    //     const region3 = getProvincesByRegion("11");
    //     const region4 = getProvincesByRegion("12");
    //     const region5 = getProvincesByRegion("15");
    //     const region6 = getProvincesByRegion("16");

    //     const mindanao = region1.concat(region2, region3, region4, region5, region6);
        
    //     const cityPromises = region3.map((province : any)  => getCityMunByProvince(province.prov_code));

    // // Execute all promises and get the results
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

        //post(route('register'));
    };

    return (
        <AuthenticatedLayout 
            user={auth.user}
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Add Listing</h2>}
        >
            <Head title="AddListing"  />
            <div className="py-12 ">
                <div className="mx-auto max-w-4xl sm:px-6 lg:px-8 ">
                <Card className='px-3 pt-2 rounded-sm font-sans text-2xl text-white' >
                    <CardHeader className='bg-[#366359] m-1 rounded-md' >
                        <CardTitle >PROPERTY REGISTRATION </CardTitle>                    
                    </CardHeader>
                    {/* <AddressForm/> */}
                    
                    <form onSubmit={submit} >   
                        <CardContent className=' text-gray-900 grid  gap-4'>
                            <div className='flex flex-col pt-4 px-3 gap-4'>
                                <InputLabel htmlFor="property_name" value="Property Name" />
                                <TextInput
                                id="property_name"
                                name="property_name"
                                type='text'
                                onChange={(e) => setData('property_name', e.target.value)}
                                />
                              </div>
                            
                            <div className='grid sm:grid-cols-3'>
                              
                              <div className='flex flex-col pt-4 px-3 gap-4'>
                                <InputLabel htmlFor="MiddleName" value="Middle Name" />
                                <TextInput
                                id="MiddleName"
                                name="MiddleName"
                                type='text'
                                onChange={(e) => setData('price', e.target.value)}
                                />
                              </div>
                              <div className='flex flex-col pt-4 px-3 gap-4'>
                                <InputLabel htmlFor="LastName" value="Last Name" />
                                <TextInput
                                id="LastName"
                                name="LastName"
                                type='text'
                                onChange={(e) => setData('price', e.target.value)}
                                />
                              </div>
                            </div>
                            
                        
                            <div className='grid sm:grid-cols-2'>
                              
                              
                            </div>
                            <div className='flex flex-col pt-4 px-3 gap-4'>
                          
                            <InputLabel htmlFor="ContactNumber" value="Contact No." />
                            <TextInput
                                id="ContactNumber"
                                name="ContactNumber"
                                type='text'
                                onChange={(e) => setData('price', e.target.value)}
                                />
                            </div>  
                        </CardContent>
                        <CardFooter className='font-sans text-white flex-1 justify-center' >
                            <Button variant="default" disabled={processing } className='hover:bg-gray-400 ' size="sm"
                            
                            > 
                            Create
                            </Button>    
                        </CardFooter>
                    </form>    
                    
                    
                    
                </Card>
                </div>            
            </div>   
        </AuthenticatedLayout>
    );
}

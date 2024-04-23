import { useEffect, FormEventHandler } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
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

import { cn } from "@/Components/lib/utils"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shadcn/ui/popover"

// @ts-ignore
import { city_mun,province, getCityMunByProvince, getProvincesByRegion} from 'phil-reg-prov-mun-brgy';


export default function Register() {
    const [date, setDate] = useState<Date>()
    const [cities, setCities] = useState<string[]>([]);
    

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        phone: '',
        birthdate: '',
        usertype: '',
        gender: '',
        city:'',
        address:'',
        postal:'',
        username:'',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    useEffect(() => {
        
        const region1 = getProvincesByRegion("09");
        const region2 = getProvincesByRegion("10");
        const region3 = getProvincesByRegion("11");
        const region4 = getProvincesByRegion("12");
        const region5 = getProvincesByRegion("15");
        const region6 = getProvincesByRegion("16");

        const mindanao = region1.concat(region2, region3, region4, region5, region6);
        
        const cityPromises = region3.map((province : any)  => getCityMunByProvince(province.prov_code));

    // Execute all promises and get the results
        Promise.all(cityPromises).then(cities => {
            // 'cities' is an array of arrays, flatten it
            const flattenedCities = cities.flat();

            // Do something with 'flattenedCities'
            console.log(flattenedCities);
            setCities(flattenedCities);
        }).catch(error => {
            console.error("Error fetching cities:", error);
        });
        
        }, []); 

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <GuestLayout >
            <Head title="Register"  />
            <div className='gap-4'>
                <form onSubmit={submit} >
                    <div>
                        <InputLabel htmlFor="name" value="Full name" />

                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            className="block w-full mt-1"
                            placeholder= "Enter full name"
                            autoComplete="name"
                            isFocused={true}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                        />

                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div className="flex flex-col gap-1 px-1 pt-1'">
                        <InputLabel htmlFor="email" value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            placeholder= "Enter email address"
                            className="block w-full mt-1"
                            
                            onChange={(e) => setData('email', e.target.value)}
                            required
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>
                    
                    <div className='grid mt-4 sm:grid-cols-2 ' >
                        <div className="flex flex-col gap-1 px-1 pt-1'">
                            <InputLabel htmlFor="phone" value="Phone Number" />

                            <TextInput
                                id="phone"
                                type="number"
                                name="phone"
                                value={data.phone}
                                placeholder= "Enter phone number"
                                className="block w-full mt-1"
                                
                                onChange={(e) => setData('phone', e.target.value)}
                                required
                            />

                            <InputError message={errors.phone} className="mt-2" />
                        </div>

                        <div className="flex flex-col gap-1 px-1 pt-1'">
                            <InputLabel htmlFor="birthdate" value="Birth Date" />

                            {/* <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                variant={"outline"}
                                className={cn(
                                    "w-[280px] justify-start text-left font-normal",
                                    !data.birthdate && "text-muted-foreground"
                                )}
                                >
                                <LuCalendar className="w-4 h-4 mr-2" />
                                {data.birthdate ? format(data.birthdate, "PPP") : <span>Pick a date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                mode="single"
                                selected={date}
                                onSelect=
                                initialFocus
                                />
                            </PopoverContent>
                            </Popover> */}

                            <InputError message={errors.birthdate} className="mt-2" />
                        </div>

                        <div className="flex flex-col gap-1 px-1 pt-1'">
                            <InputLabel htmlFor="usertype" value="User Type" />
                            <Select onValueChange={(value:string) => setData('usertype', value)}  >
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="User Type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>User Type</SelectLabel>
                                        <SelectItem value="Renter">Renter</SelectItem>
                                        <SelectItem value="Landlord">Landlord</SelectItem>
                                    
                                    </SelectGroup>
                                </SelectContent>
                            </Select>      
                            

                            <InputError message={errors.phone} className="mt-2" />
                        </div>

                        <div className="flex flex-col gap-1 px-1 pt-1'">
                            <InputLabel htmlFor="gender" value="Gender" />
                            <Select onValueChange={(value:string) => setData('gender', value)}  >
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select Gender" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Gender</SelectLabel>
                                        <SelectItem value="Male">Male</SelectItem>
                                        <SelectItem value="Female">Female</SelectItem>
                                        <SelectItem value="Prefer not to say">Prefer not to say</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>      
                            

                            <InputError message={errors.phone} className="mt-2" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 px-1 pt-1'">
                            <InputLabel htmlFor="address" value="Address" />

                            <TextInput
                                id="address"
                                type="string"
                                name="address"
                                value={data.address}
                                className="block w-full mt-1"
                                
                                onChange={(e) => setData('address', e.target.value)}
                                required
                            />

                            <InputError message={errors.address} className="mt-2" />
                        </div>
                    <div className='grid mt-4 sm:grid-cols-2 ' >
                        
                        <div className="flex flex-col gap-1 px-1 pt-1">
                            <InputLabel htmlFor="city" value="City" />

                            <Select onValueChange={(value:string) => setData('city', value)}  >
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select City" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>City</SelectLabel>
                                        {cities.map((city:any) => (
                                            <SelectItem key={city.reg_code} value={city.name}>
                                                {city.name}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>   

                            <InputError message={errors.city} className="mt-2" />
                    </div>

                        <div className="flex flex-col gap-1 px-1 pt-1'">
                            <InputLabel htmlFor="postal" value="Postal Code" />

                            <TextInput
                                id="postal"
                                type="number"
                                name="postal"
                                value={data.postal}
                                className="block w-full mt-1"
                                
                                onChange={(e) => setData('postal', e.target.value)}
                                required
                            />

                            <InputError message={errors.password} className="mt-2" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 px-1 pt-1'">
                        <InputLabel htmlFor="password" value="Password" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="block w-full mt-1"
                            autoComplete="new-password"
                            onChange={(e) => setData('password', e.target.value)}
                            required
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="flex flex-col gap-1 px-1 pt-1'">
                        <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="block w-full mt-1"
                            autoComplete="new-password"
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            required
                        />

                        <InputError message={errors.password_confirmation} className="mt-2" />
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <Link
                            href={route('login')}
                            className="text-sm text-gray-600 underline rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Already registered?
                        </Link>

                        <PrimaryButton className="ms-4" disabled={processing}>
                            Register
                        </PrimaryButton>
                    </div>
                </form>
            </div>    
        </GuestLayout>
    );
}

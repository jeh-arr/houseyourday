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
    
    

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        phone: '',
        usertype: '',
        gender: '',
        address:'',
        
        
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

   

    
        

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <GuestLayout >
            <Head title="Register"  />
            <div className='gap-5'>
                <form onSubmit={submit} >
                    <div className="flex flex-col gap-1 px-1 pt-2 mt-1">
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

                    <div className="flex flex-col gap-1 px-1 pt-2 mt-1">
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
                    
                    <div className="flex flex-col gap-1 px-1 pt-2 mt-1">
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

                    <div className='grid   pt-2 sm:grid-cols-2 ' >
                        

                        

                        <div className="flex flex-col gap-1 px-1 pt-2 mt-1">
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

                        <div className="flex flex-col gap-1 px-1 pt-2 mt-1">
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
                            

                            <InputError message={errors.gender} className="mt-2" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 px-1 pt-2 mt-1">
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
                    

                    
                    <div className="flex flex-col gap-1 px-1 pt-1 mt-1">
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

                    <div className="flex flex-col gap-1 px-1 pt-1 mt-1">
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

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { Button } from '@/shadcn/ui/button'


import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/shadcn/ui/card"
  

export default function index({ auth }: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Landlord Dashboard</h2>}
        >
            <Head title="Dashboard" />
            <div className="container pt-8">
                <Button className='mx-16 bg-primary hover:bg-gray-600'>
                    
                    <Link
                        href={route('landlord.create')}
                        //className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-gray-900 dark:hover:text-gray-900/80 dark:focus-visible:ring-white"
                        >
                        Add Listing
                    </Link>
                    
                </Button>
            </div>
            <div className="container pt-8">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-3 m-2 text-3xl font-extrabold text-center text-white rounded-lg shadow-sm bg-slate-500">LISTINGS: </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

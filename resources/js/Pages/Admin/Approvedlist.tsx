import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { Button } from '@/shadcn/ui/button'
import { useState} from "react"
import { Badge } from "@/shadcn/ui/badge"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/shadcn/ui/card"


export default function Approvedlist({ auth, listing }: PageProps) {
    console.log(listing)
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredListing, setFilteredListing] = useState(listing);
    
    const getBadgeColor = (availability: any) => {
        switch (availability) {
            case 'Available':
                return 'bg-green-200';
            case 'Not Available':
                return 'bg-red-200';
            case 'Soon':
                return 'bg-gray-200';
            default:
                return '';
        }
    };
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const term = event.target.value;
        setSearchTerm(term);
                        //@ts-ignore
        const filtered = listing.filter((list) => 
            list.property_name.toLowerCase().includes(term.toLowerCase()) ||
            list.property_address.toLowerCase().includes(term.toLowerCase())
        );
        
        setFilteredListing(filtered);
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Admin Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />
            
            <div className="container pt-8">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-slate-400/40 backdrop-blur-sm shadow-sm sm:rounded-lg">
                        <div className="p-3 m-2 text-3xl font-extrabold text-start text-white rounded-lg shadow-sm bg-slate-500">
                        APPROVED BOARDING HOUSE LISTINGS:
                        </div>
                        <div className="container pt-3 grid grid-cols-1 sm:grid-cols-2  gap-4">
                        <div className="">
                            <input
                                type="text"
                                
                                placeholder="Search listings..."
                                value={searchTerm}
                                onChange={handleSearchChange}
                                className="w-full px-3 py-2 border border-gray-600 rounded-md"
                            />
                            
                        </div>
                        <div>
                        <Button className=''>
                            <Link href={route('admin.index')} preserveScroll>
                            Show Pending
                        </Link></Button>
                        </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-5 ">
                                {filteredListing &&
                                    Array.isArray(filteredListing) &&
                                    filteredListing.map((list) => (
                                    <Card
                                        key={list.id}
                                        className="bg-white shadow-sm rounded-lg"
                                    >
                                        <CardHeader>
                                            <image>
                                                <img
                                                   src={`/storage/${JSON.parse(list.image)[0]}`}
                                                    alt="Image Description"
                                                    style={{
                                                        width: "100%",
                                                        height: "300px",
                                                        objectFit: "cover",
                                                        marginBottom: "20px",
                                                    }}
                                                />
                                            </image>
                                            <div>
                                                <CardTitle className="text-lg font-semibold leading-tight text-gray-800">
                                                    {list.property_name }
                                                </CardTitle>
                                                <CardDescription className="text-md text-gray-500">
                                                    {list.property_address}
                                                </CardDescription>
                                            </div>
                                        </CardHeader>
                                        <CardFooter className="flex justify-end gap-2 col-span-2">
                                            <Badge variant="outline" className={getBadgeColor(list.availability)}>
                                               {list.rooms !== 0 ? list.rooms + " Rooms" : ""} {list.availability}
                                            </Badge>
                                            <Button>
                                                <Link
                                                href={route('admin.show',[list.id] )} >
                                                    Details
                                                </Link>
                                            </Button>

                                        </CardFooter>
                                    </Card>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

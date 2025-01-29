import { Head } from '@inertiajs/react';

import Navbar from './Sections/Navbar';

export default function Welcome() {
    return (
        <>
            <Head title="InviCard" />
            
            <div className='px-4 py-8 sm:px-6 md:px-8 lg:px-12 xl:px-16'>
                <Navbar/>
            </div>
        </>
    )
}
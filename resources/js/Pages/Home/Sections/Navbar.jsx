import { useState } from 'react';
import { Link } from '@inertiajs/react';

import ApplicationLogo from '@/Components/ApplicationLogo';
import NavLink from '@/Components/NavLink';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import HarmburgerButton from '@/Components/HarmburgerButton';
import CloseButton from '@/Components/CloseButton';

export default function Navbar() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    return(
        <nav>
            <div className='flex justify-between items-center'>
                <ApplicationLogo className="h-10 w-10"/>
                <ul className='max-md:hidden flex md:gap-8 lg:gap-12'>
                    <li>
                        <NavLink
                            href={route('home')}
                            active={route().current('home')}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            // href={route('dashboard')}
                            // active={route().current('dashboard')}
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            // href={route('dashboard')}
                            // active={route().current('dashboard')}
                        >
                            Services
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            // href={route('dashboard')}
                            // active={route().current('dashboard')}
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <div className='flex flex-row-reverse gap-2 md:gap-4 max-md:hidden'>
                    <PrimaryButton>Sign Up</PrimaryButton>
                    <SecondaryButton>Log In</SecondaryButton>
                </div>

                {!menuIsOpen 
                    ? <HarmburgerButton
                        className="md:hidden" 
                        onClick={() => {setMenuIsOpen(!menuIsOpen)}}
                    />
                    : <CloseButton
                        className="md:hidden"
                        onClick={() => {setMenuIsOpen(!menuIsOpen)}}
                    />
                }
                
            </div>
            {menuIsOpen && <ul 
                className='flex flex-col gap-2 mt-4 text-xl md:hidden'
            >
                <li className='flex justify-between flex-row-reverse my-3'>
                    <PrimaryButton>Sign Up</PrimaryButton>
                    <SecondaryButton>Log In</SecondaryButton>
                </li>
                <li>
                    <NavLink
                        href={route('home')}
                        active={route().current('home')}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        // href={route('dashboard')}
                        // active={route().current('dashboard')}
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        // href={route('dashboard')}
                        // active={route().current('dashboard')}
                    >
                        Services
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        // href={route('dashboard')}
                        // active={route().current('dashboard')}
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>}
        </nav>
    )
}
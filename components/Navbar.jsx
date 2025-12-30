'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logo from '@/assets/images/logo-white.png';
import profileDefault from '@/assets/images/profile.png';
import { FaGoogle } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const pathname = usePathname();

  return (
    <nav className='bg-blue-700 border-b border-blue-500'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='relative flex h-20 items-center justify-between'>
          {/* Mobile menu button */}
          <div className='absolute inset-y-0 left-0 flex items-center md:hidden'>
            <button
              type='button'
              className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white'
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              <svg
                className='block h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                />
              </svg>
            </button>
          </div>

          {/* Logo + desktop menu */}
          <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
            <Link className='flex items-center' href='/'>
              <Image src={logo} alt='PropertyPulse' className='h-10 w-auto' />
              <span className='hidden md:block text-white text-2xl font-bold ml-2'>
                PropertyPulse
              </span>
            </Link>

            <div className='hidden md:ml-6 md:block'>
              <div className='flex space-x-2'>
                <Link
                  href='/'
                  className={`${pathname === '/' ? 'bg-black' : ''} text-white hover:bg-gray-900 rounded-md px-3 py-2`}
                >
                  Home
                </Link>

                <Link
                  href='/properties'
                  className={`${pathname === '/properties' ? 'bg-black' : ''} text-white hover:bg-gray-900 rounded-md px-3 py-2`}
                >
                  Properties
                </Link>

                {isLoggedIn && (
                  <Link
                    href='/properties/add'
                    className={`${pathname === '/properties/add' ? 'bg-black' : ''} text-white hover:bg-gray-900 rounded-md px-3 py-2`}
                  >
                    Add Property
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Logged out */}
          {!isLoggedIn && (
            <div className='hidden md:block md:ml-6'>
              <button className='flex items-center text-white bg-gray-700 hover:bg-gray-900 rounded-md px-3 py-2'>
                <FaGoogle className='mr-2' />
                Login or Register
              </button>
            </div>
          )}

          {/* Logged in */}
          {isLoggedIn && (
            <div className='absolute inset-y-0 right-0 flex items-center pr-2 md:static md:ml-6 md:pr-0'>
              <Link href='/messages' className='relative'>
                <button className='rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white'>
                  <svg
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022'
                    />
                  </svg>
                </button>
              </Link>

              <div className='relative ml-3'>
                <button
                  className='flex rounded-full bg-gray-800'
                  onClick={() => setIsProfileMenuOpen((prev) => !prev)}
                >
                  <Image
                    src={profileDefault}
                    alt=''
                    width={32}
                    className='h-8 w-8 rounded-full'
                  />
                </button>

                {isProfileMenuOpen && (
                  <div className='absolute right-0 z-10 mt-2 w-48 rounded-md bg-white shadow-lg'>
                    <Link href='/profile' className='block px-4 py-2 text-sm text-gray-700'>
                      Your Profile
                    </Link>
                    <Link href='/properties/saved' className='block px-4 py-2 text-sm text-gray-700'>
                      Saved Properties
                    </Link>
                    <button className='block w-full text-left px-4 py-2 text-sm text-gray-700'>
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className='px-2 pb-3 pt-2 space-y-1'>
          <Link href='/' className='block text-white px-3 py-2 rounded-md'>
            Home
          </Link>
          <Link href='/properties' className='block text-white px-3 py-2 rounded-md'>
            Properties
          </Link>
          {isLoggedIn && (
            <Link href='/properties/add' className='block text-white px-3 py-2 rounded-md'>
              Add Property
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import { NavLink } from 'react-router-dom';
/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import useDarkMode from '../composables/useDarkMode';

const navigation = [
  { name: 'AssemblyScript', href: '/example-list/as' },
  // { name: 'Rust', href: '/example-list/rust' },
  { name: 'Frontend', href: '/frontend' }
  // { name: 'Smart Contracts', href: '/soon' },
  // { name: 'Hacks', href: '/soon' }
  // { name: 'About', href: '#' }
];

const Navbar = () => {
  const { colorTheme, editTheme } = useDarkMode();

  return (
    <div className="w-full h-[5rem] pt-[1.2rem] align-middle dark:text-white sticky top-0 z-40 backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-gray-900/10 dark:border-gray-50/[0.06] supports-backdrop-blur:bg-white/60 bg-transparent">
      {/* <NavLink className="mr-10" to="/">
        Home
      </NavLink>
      <NavLink to="/about">About</NavLink> */}
      <Popover>
        <div className="max-w-8xl mx-auto px-4 sm:px-6">
          <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
            <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <NavLink to="/">
                  <p className="font-extrabold text-xl">
                    NEAR by <span className="text-green">Example</span>
                  </p>
                </NavLink>
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-white hover:text-white hover:bg-green focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-6 w-6 text-gray-600" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="hidden md:flex md:space-x-10">
              {navigation.map(item => (
                <NavLink key={item.name} to={item.href} className="font-medium text-gray-900  dark:text-white hover:text-green">
                  {item.name}
                </NavLink>
              ))}
            </div>
            <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
              {/* <span className="inline-flex rounded-md shadow mr-3">
                <NavLink to="#" className="inline-flex items-center px-4 py-2 text-base font-medium rounded-md text-gray-900  bg-green hover:bg-darkGreen">
                  Log in
                </NavLink>
              </span> */}
              {colorTheme === 'dark' ? (
                <button onClick={() => editTheme(colorTheme)}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </button>
              ) : (
                <button onClick={() => editTheme(colorTheme)}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </button>
              )}
            </div>
          </nav>
        </div>

        <Transition as={Fragment} enter="duration-150 ease-out" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="duration-100 ease-in" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
          <Popover.Panel focus className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>{/* <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" /> */}</div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6 text-gray-700" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3">
                {navigation.map(item => (
                  <a key={item.name} href={item.href} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                    {item.name}
                  </a>
                ))}
                <div className="ml-2 mt-2">
                  {colorTheme === 'dark' ? (
                    <button onClick={() => editTheme(colorTheme)}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-700 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                      </svg>
                    </button>
                  ) : (
                    <button onClick={() => editTheme(colorTheme)}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-700 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
              {/* <NavLink to="#" className="block w-full px-5 py-3 text-center font-medium text-white dark:bg-green hover:bg-gray-100">
                Log in
              </NavLink> */}
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
};

export default Navbar;

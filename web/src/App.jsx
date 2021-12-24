import React from 'react';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');

  // ,
  //   "lint": "eslint src/**/*.jsx --fix" 
}

const App = () => {
  const navigation = [
    { name: 'Home', to: '/' },
    { name: 'Search', to: '/search' },
    { name: 'Gallery', to: '/gallery' },
  ];
  console.log(document.getElementById(window.location.pathname)?.offsetWidth)

  return (
    <div>
      <Disclosure as="nav" className="bg-gray-100 h-16">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-400 focus:outline-none">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="hidden sm:block sm">
                    <div className="flex space-x-4 ">
                      {navigation.map((item) => (
                        <a
                          id={item.to}
                          key={item.name}
                          href={item.to}
                          // style={{ boxShadow:
                          // window.location.pathname === item.to ? 'inset 0 -2px 0 #1d4ed8' : '0' }}
                          className={classNames(
                            window.location.pathname === item.to
                              ? 'text-black'
                              : 'text-gray-400 hover:text-black',
                            'h-16 text-sm font-medium text-center flex justify-center items-center',
                          )}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <div className="ml-3 relative text-sm font-small">
                    <span>Nathen</span>
                  </div>
                </div>
                
              </div>
              <div 
                className="relative h-1 bg-blue-600 -top-1 w-10"
                style={{width: document.getElementById(window.location.pathname)?.offsetWidth}}

              >

              </div>
              
            </div>
            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col w-40">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.to}
                    className={classNames(
                      window.location.pathname === item.to
                        ? 'bg-gray-300 text-black'
                        : 'text-gray-400 hover:bg-gray-300 hover:text-black',
                      'px-3 py-2 rounded-md text-sm font-medium mr-auto',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default App;

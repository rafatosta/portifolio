import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { navigation } from "./Navbar";
import Link from "next/link";

export function MenuButton() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button>
          <Bars3Icon
            className="ml-2 -mr-1 h-5 w-5 hover:text-blue-500 text-white"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-300"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-primary border-2 border-secondary/30 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            {navigation.map((item) => {
              return (
                <Menu.Item key={item.name}>
                  {({ active }) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`${
                        active ? "bg-blue-400 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-4 py-2 text-sm font-bold`}
                    >
                      <p className="font-mono text-sm w-full hover:font-extrabold text-gray-200 hover:text-secondary hover:scale-105">
                        {item.name}
                      </p>
                    </Link>
                  )}
                </Menu.Item>
              );
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

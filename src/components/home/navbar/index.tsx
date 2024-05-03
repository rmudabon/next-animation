'use client';

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from '@/components/ui/menubar';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Image from 'next/image';
import Link from 'next/link';

export const Navbar = () => (
  <NavigationMenu className='fixed'>
    <div className='w-full max-w-7xl mx-5 flex items-center justify-between'>
      <div className='flex space-x-5'>
        <Image src='/vercel.svg' alt='Logo' width={100} height={100} />
        <NavigationMenuList>
          <NavigationMenuItem className='h-full'>
            <Link href='/' legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className='h-full'>
            <Link href='#about' legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className='h-full'>
            <Link href='#gifts' legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Gifts
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </div>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger className='transition duration-300 ease-in-out h-10 items-center space-x-1 rounded-md border bg-background hover:bg-mint/30'>
            Day
          </MenubarTrigger>
          <MenubarContent align='end'>
            <MenubarItem>
              Day <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>Night</MenubarItem>
            <MenubarItem>System</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  </NavigationMenu>
);

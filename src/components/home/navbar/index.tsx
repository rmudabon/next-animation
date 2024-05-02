
'use client'

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from "next/link";

export const Navbar = () => (
    <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <Link href='#about' legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            About
          </NavigationMenuLink>
          </Link>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
)
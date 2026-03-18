'use client'
import {Navbar, NavbarMenu, NavbarMenuItem, NavbarBrand, NavbarContent, NavbarMenuToggle, NavbarItem, Link, Button} from "@nextui-org/react";
import Image from "next/image";
import React from "react";
export default function TopNavbar() {
  const menuItems = [
    'Projects',
    'Contacts',
    'Resume'
  ];

  return (
    <Navbar position="static" className="font-semibold rounded-xl">
      <NavbarBrand >
        <Link href="/">
          <Image priority width={50} height={20} src="/img/web-dev-icon.svg" alt='web development logo' />
          Roustam blog
        </Link>
      </NavbarBrand>
            {/* <NavbarItem>
                <Link href="/portfolio">
                Useful links
                </Link>
            </NavbarItem> 
             <NavbarItem className="max-sm:hidden">
              <Link href="/resume">
                My resume
              </Link>
            </NavbarItem> */}
            <NavbarItem className="max-sm:hidden">
              <Link href="/contacts">
                Contacts
              </Link>
            </NavbarItem>
    </Navbar>
  );
}

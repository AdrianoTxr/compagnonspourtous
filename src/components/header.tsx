"use client";
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import Link from "next/link";
import {nav} from '@/modules/nav';
import Image from "next/image";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="w-full top-0 fixed bg-white border-b z-40">
            <nav className="mx-auto max-w-7xl py-4 flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3 link link-hover">
                        <Image src={'/logo.png'} alt={'Logo Compagnons pour Tous'} width={50} height={50} />
                        <p className="font-bold">Compagnons pour Tous</p>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <i className="fa-solid fa-bars" aria-hidden="true"></i>
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {nav.map((item) => (
                        <Link href={item.href} className="text-sm font-semibold leading-6 text-gray-900 link-hover">
                            {item.name}
                        </Link>
                    ))}
                </div>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                </div>
            </nav>
            <Dialog as="div" className="relative lg:hidden z-50" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link href="/public" className="-m-1.5 p-1.5">
                            <span className="sr-only">Compagnons pour Tous</span>
                            <Image src={'/logo.png'} alt={'Logo Compagnons pour Tous'} width={50} height={50} className={"h-8 w-auto"} />
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Fermer le menu</span>
                            <i className="fa-solid fa-xmark" aria-hidden="true"></i>
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {nav.map((item) => (
                                    <Link
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
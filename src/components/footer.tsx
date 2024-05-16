import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t bg-white">
            <div className="footer px-10 py-4 text-base-content border-base-300 max-w-screen-xl mx-auto">
                <div className={"flex justify-between w-full"}>
                    <aside className="flex items-center gap-2 lg:flex-1">
                        <Image src={'/logo.png'} alt={'Logo Compagnons pour Tous'} width={50} height={50}/>
                        <p><span className={'font-bold'}>Compagnons pour Tous.</span><br/>Association sous loi 1901</p>
                    </aside>
                    <Link href={"https://instagram.com/adriano.teixeira11"}
                          className={"link link-hover place-self-end justify-self-start hidden lg:block"}>Crée par
                        Adriano Teixeira</Link>
                    <nav className="lg:flex lg:flex-1 lg:justify-end place-self-center">
                        <div className="grid grid-flow-col gap-4">
                            <a href="https://instagram.com/compagnonspour.tous"><i
                                className="fa-brands fa-instagram text-xl"></i></a>
                        </div>
                    </nav>
                </div>
                <Link href={"https://instagram.com/adriano.teixeira11"}
                      className={"link link-hover place-self-center lg:hidden"}>Crée par Adriano Teixeira</Link>
            </div>
        </footer>
    )
}
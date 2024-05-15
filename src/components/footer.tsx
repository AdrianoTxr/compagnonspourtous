import Image from "next/image";

export default function Footer() {
    return (
        <footer className="border-t bg-white">
            <div className="footer px-10 py-4 text-base-content border-base-300 max-w-screen-xl mx-auto">
                <aside className="items-center grid-flow-col">
                    <Image src={'/logo.png'} alt={'Logo Compagnons pour Tous'} width={50} height={50}/>
                    <p><span className={'font-bold'}>Compagnons pour Tous.</span><br/>Association sous loi 1901</p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://instagram.com/compagnonspour.tous"><i
                            className="fa-brands fa-instagram text-xl"></i></a>
                    </div>
                </nav>
            </div>
        </footer>
    )
}
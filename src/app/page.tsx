import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
      // <main style={{
      //     maxHeight: 'calc(100vh - 80px)'
      // }}>
      //     <div className="relative isolate px-6 lg:px-8 flex justify-center items-center py-8 lg:py-32 z-10">
      //         <div
      //             className="absolute inset-x-0 -top-40 -z-50 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      //             aria-hidden="true"
      //         >
      //             <div
      //                 className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
      //                 style={{
      //                     clipPath:
      //                         'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
      //                 }}
      //             />
      //         </div>
      //         <div className="grid lg:grid-flow-rows lg:auto-cols-max lg:grid-cols-2 lg:px-8 gap-8 lg:gap-24">
      //             <div className="max-w-2xl flex flex-col justify-center">
      //                 <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
      //                     Compagnons pour Tous
      //                 </h1>
      //                 <p className="mt-6 text-lg">
      //                     Association ayant pour objectif de recréer un lien social entre les personnes agées, les animaux et leurs maîtres.
      //                 </p>
      //                 <div className="mt-10 flex items-center gap-x-6">
      //                     <Link
      //                         href={'/roots'}
      //                         className="btn btn-primary"
      //                     >
      //                         Faire une donation 😍
      //                     </Link>
      //                     <Link
      //                         href={'#'}
      //                         className="text-sm font-semibold leading-6 text-gray-900"
      //                     >
      //                         En apprendre plus sur l'asso<span aria-hidden="true">→</span>
      //                     </Link>
      //                 </div>
      //             </div>
      //             <Image src={'/images/image1.jpeg'} alt={'Image représentant un groupe de personnes âgées avec des animaux sur leurs genoux'}
      //                    width={500}
      //                    height={500}
      //                    className={'h-auto rounded-xl'}
      //             />
      //         </div>
      //         <div
      //             className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      //             aria-hidden="true"
      //         >
      //             <div
      //                 className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
      //                 style={{
      //                     clipPath:
      //                         'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
      //                 }}
      //             />
      //         </div>
      //     </div>
      // </main>
      <div className="hero min-h-screen mt-20 lg:mt-0">
          <div className="flex flex-col lg:flex-row h-full w-full justify-center items-center">
              <div className={'w-full'}>
                  <div className={"py-6 p-6 lg:p-40"}>
                      <h1 className="text-5xl font-bold">
                          Compagnons pour Tous
                      </h1>
                      <p className="mt-6">
                          Association ayant pour objectif de recréer un lien social entre les personnes agées, les
                          animaux
                          et leurs maîtres.
                      </p>
                      <div className="mt-10 flex items-center gap-x-6">
                          <Link
                              href={'#donation'}
                              className="btn btn-primary"
                          >
                              Faire une donation 😍
                          </Link>
                          <Link
                              href={'#about'}
                              className="text-sm font-semibold leading-6 text-gray-900"
                          >
                              En apprendre plus sur l'asso<span aria-hidden="true">→</span>
                          </Link>
                      </div>
                  </div>
              </div>
              <div className={"w-full h-full max-w-full overflow-hidden"}>
                  <Image src={'/images/image1.jpeg'}
                         alt={'Image représentant un groupe de personnes âgées avec des animaux sur leurs genoux'}
                         width={500}
                         height={500}
                         className={'h-full w-full object-cover aspect-square'}
                  />
              </div>
          </div>
      </div>
  );
}

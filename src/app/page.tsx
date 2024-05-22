import Link from "next/link";
import Image from "next/image";
import Newsletter from "@/components/newsletter";
import Team from "@/components/team";
import DialogAlert from "@/components/dialog";

export default function Home() {
  return (
      <>
          <div className="hero min-h-screen mt-20 lg:mt-0">
              <div
                  className="absolute inset-x-0 -top-40 -z-50 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                  aria-hidden="true"
              >
                  <div
                      className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                      style={{
                          clipPath:
                              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                      }}
                  />
              </div>
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
                                  className="btn btn-secondary"
                              >
                                  Faire une donation 😍
                              </Link>
                              <Link
                                  href={'#team'}
                                  className="text-sm font-semibold leading-6 text-gray-900 link-hover"
                              >
                                  En apprendre plus sur l'asso<span className={"ml-1"} aria-hidden="true">→</span>
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
          <Team />
          <Newsletter />
      </>
  );
}

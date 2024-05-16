export default function Newsletter() {
    return (
        <div className="relative isolate overflow-hidden py-16 sm:py-24 lg:py-32" id={"newsletter"}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto">
                    <div className="flex flex-row items-center justify-between flex-wrap">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Envie d'informations sur l'asso ?
                            <br/>Abonnez-vous à notre newsletter.</h2>
                        <div className="mt-6 lg:mt-0 flex w-full max-w-md gap-x-4">
                            <label htmlFor="email-address" className="sr-only">
                                Adresse mail
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="input input-bordered w-full max-w-xs"
                                placeholder="Entrer son email"
                            />
                            <button
                                type="submit"
                                className="btn btn-secondary"
                            >
                                S'abonner
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
                <div
                    className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
        </div>
    )
}
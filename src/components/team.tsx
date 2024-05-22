const people = [
    {
        name: 'Alexandre',
        role: 'Président',
        imageUrl:
            '/images/alexandre.JPEG',
    },
    {
        name: 'Emir',
        role: 'Trésorier',
        imageUrl:
            '/images/emir.JPEG',
    },
    {
        name: 'Adriano',
        role: 'Secrétaire',
        imageUrl:
            '/images/adriano.JPEG',
    },
    {
        name: 'Maya',
        role: 'Chargée de communcation',
        imageUrl:
            '/images/maya.JPEG',
    },
]

export default function Team() {
    return (
        <div className="bg-white py-24 sm:py-32" id={"team"}>
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Rencontrez notre direction</h2>
                    <p className="mt-6 text-lg leading-8">
                        Grâce à eux, des centaines de personnes âgées vont recréer un lien social.
                    </p>
                </div>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    {people.map((person) => (
                        <li key={person.name}>
                            <div className="flex items-center gap-x-6">
                                <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                                <div>
                                    <h3 className="text-base font-semibold leading-7 tracking-tight">{person.name}</h3>
                                    <p className="text-sm font-semibold leading-6 text-secondary">{person.role}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export async function generateStaticParams() {
    const { data } = await fetch(`${process.env.NEXT_PUBLIC_HOST_URI}/api/public?field=categories`).then((res) => res.json())

    return data.map((c) => ({
        id: c._id
    }))
}
export async function CategoryCard({ params }) {
    return (
        <>
            <div className="w-full relative px-3 pt-2">
                <h1 className="text-lg font-semibold text-left">Browse Top Categories</h1>
            </div>
            <section className="w-full grid grid-cols-3 px-2 relative">
                { false &&
                    subCategoryData.map((i, index) => <div className="calculate-grid-height p-2 relative" key={index}>
                        <div className="bg-blue-200 w-full relative h-full rounded-lg border">
                            <div className="bg-white relative p-1 w-full h-full transition translate-x-2 shadow border translate-y-2 rounded-lg">
                                <img className="w-full h-full object-contain" src="https://res.cloudinary.com/dm8t8pcfu/image/upload/v1693136342/alishan_media/61I3R2ioAlL._AC_UF350_350_QL50__a3ujt4.jpg" />
                                <span className="absolute bottom-1 left-1 right-1 rounded-lg text-center font-medium text-gray-700 bg-zinc-50 border px-1 py-0.5 text-xs truncate">Head Phones</span>
                            </div>
                        </div>
                    </div>)
                }
            </section>
        </>
    )
}
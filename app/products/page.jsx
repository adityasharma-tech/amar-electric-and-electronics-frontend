"use client"
import React, { Suspense, useCallback } from 'react'
import ProductStaticSearchNav from './searchBar'
import { usePathname, useSearchParams } from 'next/navigation'
import { useToast } from '@/components/ui/use-toast'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { sortItems } from '@/lib/constants'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { generateFilters, getPublicData } from '@/lib/utils'
import ProductGrid from '@/components/productGrid'
import ProductGridSkeleton from '@/components/skeleton/productGridHome'
import { Player } from '@lottiefiles/react-lottie-player'
import FilterContent from './filterContent'
import InfiniteScroll from 'react-infinite-scroll-component'
import ListProductView from './ListProductView'

const Page = () => {
    const toast = useToast()
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const router = useRouter()
    const category = searchParams.get("category")
    const [filters, setFilters] = React.useState([])
    const [products, setProducts] = React.useState([])
    const [categories, setCategories] = React.useState([])
    const [subCategories, setSubCategories] = React.useState([])
    const [search_loading, setSearch_loading] = React.useState(false)
    const [selectedLabel, setSelectedLabel] = React.useState(null)
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [page, setPage] = React.useState(1)
    const [hasMore, setHasMore] = React.useState(true)
    const [query, setQuery] = React.useState('')
    async function getCategory(category) {
        try {
            let response = await axios.get(`/api/public/category?category=${category}`)
            let res = await response.data
            setSubCategories([])
        } catch (error) {
            setSubCategories([])
            toast({
                title: "Some Error Occured",
                description: `Error: ${error?.message}`,
                variant: "distructive"
            })
        }
    }
    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams)
            params.set(name, value)
            return params.toString()
        },
        [searchParams]
    )

    async function searchProducts(refresh) {
        setSearch_loading(true)
        const binaryData = new TextEncoder().encode(searchParams.get('q') || "all")
        const base64String = btoa(String.fromCharCode.apply(null, binaryData))
        setSelectedCategory(searchParams.get('category'))
        let response = await fetch(`/api/public/filter?search=${base64String}&page=${page}`)
        let res = await response.json()
        if (response.status !== 200){
            toast.error(`Error: ${res?.message}`)
        } else {
            const filters = generateFilters(res.data)
            setFilters(filters)
            setSearch_loading(false)
            if(refresh) return res.data
            setProducts(res.data)
        }
        setSearch_loading(false)
    }

    

    async function fetchMoreData() {
        const newData = await searchProducts(true)
        if (newData.length === 0) {
            setHasMore(false)
        } else {
            setProducts(products.concat(newData))
            setPage(page + 1)
        }
    }

    async function getCategories() {
        const allCategories = await getPublicData("category")
        setCategories(allCategories)
    }
    React.useEffect(() => {
        searchProducts()
    }, [searchParams])
    React.useEffect(() => {
        getCategories()
    }, [])
    React.useEffect(() => {
        if (category) {
            getCategory(category)
        }
    }, [category])
    React.useEffect(() => {
        const all_filters = generateFilters(products)
        setFilters(all_filters)
        setSelectedLabel(all_filters[0]?.label_id ?? "")
    }, [products])
    return (
        <main>
            <style global>{`.bottom-bar{ display: none }`}</style>
            <ProductStaticSearchNav onValueChange={(value) => setPage(value)} />
            {subCategories && subCategories.length > 0 ? <>
                <div className="w-full relative px-3 pt-2">
                    <h1 className="text-lg font-semibold text-left">Browse Top Categories</h1>
                </div>
                <section className="w-full grid grid-cols-3 hide-y-scroll lg:flex lg:flex-row lg:overflow-x-scroll lg:max-h-32 md:grid-cols-4 px-2 relative">
                    {subCategories.map((i, index) => <button onClick={() => router.push(pathname + '?' + createQueryString('sub', i._id))} className="calculate-grid-height lg:max-h-24 p-2 relative" key={index}>
                        <div className="w-full lg:max-h-24 p-1 relative h-full rounded-lg border">
                            <img className="w-full h-full object-contain" alt={i.image.alt} src={i.image.url} />
                        </div>
                        <span className="rounded-lg text-center font-medium text-gray-700 px-1 text-xs truncate">{i.title}</span>
                    </button>)}
                </section>
                <div className='w-full h-1.5 bg-zinc-100 mt-4' />
            </> : null}
            <div className='py-0.5 bg-zinc-50 sticky top-16 z-30'>
                <div className='w-full h-12 border-t border-b flex lg:hidden xl:hidden flex-row shadow-sm'>
                    <Sheet>
                        <SheetTrigger className='w-full h-full'><Button variant="ghost" className='gap-x-2 bg-white h-full w-full rounded-none border-r-2 border-zinc-300'>
                            Sort
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                            </svg>
                        </Button></SheetTrigger>
                        <SheetContent className="p-0 rounded-t-xl" side="bottom">
                            <SheetHeader className="pt-0 border-b px-6 py-6 pb-4 text-left">
                                <CardTitle className="text-xs">SORT</CardTitle>
                            </SheetHeader>
                            <CardContent className="px-4">
                                <RadioGroup className="gap-y-6" defaultValue={sortItems[0].id}>
                                    {sortItems.map((i) => <div key={i.id} className="flex justify-between w-full pt-6 px-3">
                                        <Label htmlFor={i.id}>{i.name}</Label>
                                        <RadioGroupItem value={i.id} id={i.id} />
                                    </div>)}
                                </RadioGroup>
                            </CardContent>
                        </SheetContent>
                    </Sheet>
                    {categories && categories.length > 0 && <Sheet>
                        <SheetTrigger className='w-full h-full'>
                            <Button variant="ghost" className='gap-x-2 bg-white h-full w-full rounded-none border-r-2 border-zinc-300'>
                                Category
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </Button></SheetTrigger>
                        <SheetContent className="p-0 rounded-t-xl" side="bottom">
                            <SheetHeader className="pt-0 border-b px-6 py-6 pb-4 text-left">
                                <CardTitle className="text-xs">CATEGORIES</CardTitle>
                            </SheetHeader>
                            <CardContent className="px-4">
                                {categories && categories.length > 0 ? <RadioGroup onValueChange={(value) => setSelectedCategory(value)} className="gap-y-6" value={null}>
                                    {categories.map((i) => <div key={i._id} className="flex justify-between w-full pt-6 px-3">
                                        <Label htmlFor={i._id}>{i.title}</Label>
                                        <RadioGroupItem value={i._id} id={i._id} />
                                    </div>)}
                                </RadioGroup> : null}
                            </CardContent>
                        </SheetContent>
                    </Sheet>}
                    <Sheet>
                        <SheetTrigger className='w-full h-full'>
                            <Button variant="ghost" className='gap-x-2 bg-white h-full w-full rounded-none'>
                                Filter
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
                                </svg>
                            </Button></SheetTrigger>
                        <SheetContent className="p-0 rounded-t-xl" side="bottom">
                            <SheetHeader className="pt-0 border-b px-6 py-6 pb-4 text-left">
                                <CardTitle className="text-xs">FILTER</CardTitle>
                            </SheetHeader>
                            <FilterContent filters={filters} setSelectedLabel={(value) => setSelectedLabel(value)} selectedLabel={selectedLabel} />
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
            {products && products.length <= 0 ? !search_loading ? <div className='w-full h-full flex flex-col'><Player
                autoplay
                loop
                src="/lottie/no-product.json"
                className='mt-auto'
                style={{ height: '300px', width: '300px' }}
            >
            </Player>
                <div className='text-lg mt-3 mb-auto text-gray-700 text-center font-medium'>No Product found</div>
            </div> : null :
                <InfiniteScroll
                    dataLength={products?.length || 0}
                    next={fetchMoreData}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                    className='grid grid-cols-1 lg:grid-cols-2 gap-2 p-2'
                    hasMore={hasMore}
                    loader={<React.Fragment></React.Fragment>}
                >
                    <div className="">
                       {products.map((p, idx)=><ListProductView key={idx} {...p}/>)}
                    </div>
                </InfiniteScroll>
            }
            {
                search_loading ? <ProductGridSkeleton /> : null
            }
        </main>
    )
}

export default Page

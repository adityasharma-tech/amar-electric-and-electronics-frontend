"use client"
import SearchBar from '@/components/searchbar'
import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

const ProductStaticSearchNav = ({ onValueChange }) => {
    const router = useRouter()
    const params = useSearchParams()

    const [query, setQuery] = React.useState('')

    function replaceQueryParam(url, paramName, newValue) {
        const searchParams = new URLSearchParams(url);

        const updatedParams = new URLSearchParams(searchParams.toString());
        updatedParams.set(paramName, newValue);

        return '?' + updatedParams.toString();
    }

    React.useEffect(() => {
        setQuery(params.get("q"))
    }, [])
    function handleSubmit(e) {
        e.preventDefault()
        if(query != params.get('q')) onValueChange(1)
        router.push(`/products${replaceQueryParam(params.toString(), "q", query)}`)
    }

    return (
        <SearchBar handleSubmit={handleSubmit} query={query} setQuery={(value) => {
            setQuery(value)
        }} />
    )
}

export default ProductStaticSearchNav
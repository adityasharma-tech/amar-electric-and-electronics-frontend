import { Tabs, TabsContent, TabsList, TabsTrigger } from "./collection-tab"

export default function ProductCollection() {
    return (
        <Tabs defaultValue="featured" className="w-[400px]">
            <TabsList>
                <TabsTrigger value="featured">Featured</TabsTrigger>
                <TabsTrigger value="on-sale">On Sale</TabsTrigger>
                <TabsTrigger value="top-rated">Top Rated</TabsTrigger>
            </TabsList>
            <TabsContent value="featured">
                
            </TabsContent>
        </Tabs>

    )
}
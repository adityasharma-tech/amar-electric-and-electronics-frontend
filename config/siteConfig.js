const siteConfig = {
    appName: "Amar Electric And Electronics",
    description: "Welcome to the Alishan Showroom website, your premier destination for exquisite home furnishings and decor. Explore our curated collection of timeless pieces that blend artistry, functionality, and comfort seamlessly. Discover a world of elegance as you browse through our range of furniture, lighting, textiles, and accessories, each meticulously crafted to elevate your living spaces. Whether you\'re seeking to transform a room or add a touch of sophistication, Alishan Showroom invites you to immerse yourself in a symphony of design possibilities that cater to your unique aesthetic.",
    url: process.env.NEXT_PUBLIC_HOST_URI ?? 'https://store.adityasharma.tech',
    backend_uri: process.env.NEXT_PUBLIC_BACKEND_URI,
    logo: {
        _rec: "/assets/logo/1.png",
        _sqr: "/assets/logo/2.png"
    }
}

export default siteConfig
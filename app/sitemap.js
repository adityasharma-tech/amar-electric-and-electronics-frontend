export default function sitemap() {
  const URL = "https://store.adityasharma.tech";

  return [
    {
      url: `${URL}/`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${URL}/contactUs`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.1,
    },
    {
      url: `${URL}/privacyPolicy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.1,
    },
    {
      url: `${URL}/refundAndCancellation`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.1,
    },
    {
      url: `${URL}/shipAndDelivery`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.1,
    },
    {
      url: `${URL}/termsAndConditions`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.1,
    },
    {
      url: `${URL}/auth/sign_in`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.4,
    },
    {
      url: `${URL}/products`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}

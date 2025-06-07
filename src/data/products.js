export const products = [
  {
    id: 1,
    name: "HydroElastic",
    category: "Hydration",
    price: 25.00,
    image: "/product picture.png",
    description: "Advanced hydration formula that supports tissue elasticity and cellular water retention. Science-backed ingredients for optimal daily wellness.",
    isNew: true,
    rating: 4.9,
    reviews: 128,
    benefits: [
      "Optimal hydration",
      "Fascial support",
      "Clinically tested"
    ],
    usage: "Take 1-2 capsules daily with water",
    contents: "60 capsules per bottle"
  }
];

export const categories = [
  { id: 1, name: "Hydration", slug: "hydration", count: 1 },
  { id: 2, name: "Coming Soon", slug: "coming-soon", count: 0 }
]; 
export interface Phone {
  id: number;
  name: string;
  brand: string;
  image: string;
  price: number;
  weeklyPayment: number;
  specs: {
    screen: string;
    camera: string;
    battery: string;
    storage: string;
  };
  available: boolean;
}

export const phones: Phone[] = [
  {
    id: 1,
    name: "Samsung Galaxy A14",
    brand: "Samsung",
    image: "https://d64gsuwffb70l.cloudfront.net/690321995c848010f5a202d4_1761812938959_ed204574.webp",
    price: 18500,
    weeklyPayment: 850,
    specs: { screen: "6.6\" FHD+", camera: "50MP", battery: "5000mAh", storage: "64GB" },
    available: true
  },
  {
    id: 2,
    name: "Tecno Spark 10",
    brand: "Tecno",
    image: "https://d64gsuwffb70l.cloudfront.net/690321995c848010f5a202d4_1761812938959_ed204574.webp",
    price: 14500,
    weeklyPayment: 650,
    specs: { screen: "6.6\" HD+", camera: "32MP", battery: "5000mAh", storage: "128GB" },
    available: true
  },
  {
    id: 3,
    name: "Infinix Hot 30",
    brand: "Infinix",
    image: "https://d64gsuwffb70l.cloudfront.net/690321995c848010f5a202d4_1761812938959_ed204574.webp",
    price: 16000,
    weeklyPayment: 720,
    specs: { screen: "6.78\" FHD+", camera: "50MP", battery: "5000mAh", storage: "128GB" },
    available: true
  },
  {
    id: 4,
    name: "Nokia C32",
    brand: "Nokia",
    image: "https://d64gsuwffb70l.cloudfront.net/690321995c848010f5a202d4_1761812938959_ed204574.webp",
    price: 12500,
    weeklyPayment: 550,
    specs: { screen: "6.5\" HD+", camera: "50MP", battery: "5000mAh", storage: "64GB" },
    available: true
  },
  {
    id: 5,
    name: "Oppo A17",
    brand: "Oppo",
    image: "https://d64gsuwffb70l.cloudfront.net/690321995c848010f5a202d4_1761812938959_ed204574.webp",
    price: 15500,
    weeklyPayment: 700,
    specs: { screen: "6.56\" HD+", camera: "50MP", battery: "5000mAh", storage: "64GB" },
    available: true
  },
  {
    id: 6,
    name: "Realme C55",
    brand: "Realme",
    image: "https://d64gsuwffb70l.cloudfront.net/690321995c848010f5a202d4_1761812938959_ed204574.webp",
    price: 19500,
    weeklyPayment: 900,
    specs: { screen: "6.72\" FHD+", camera: "64MP", battery: "5000mAh", storage: "128GB" },
    available: true
  },
  {
    id: 7,
    name: "Xiaomi Redmi 12C",
    brand: "Xiaomi",
    image: "https://d64gsuwffb70l.cloudfront.net/690321995c848010f5a202d4_1761812938959_ed204574.webp",
    price: 13500,
    weeklyPayment: 600,
    specs: { screen: "6.71\" HD+", camera: "50MP", battery: "5000mAh", storage: "64GB" },
    available: true
  },
  {
    id: 8,
    name: "Itel S23",
    brand: "Itel",
    image: "https://d64gsuwffb70l.cloudfront.net/690321995c848010f5a202d4_1761812938959_ed204574.webp",
    price: 11000,
    weeklyPayment: 500,
    specs: { screen: "6.6\" HD+", camera: "32MP", battery: "5000mAh", storage: "128GB" },
    available: true
  },
  {
    id: 9,
    name: "Samsung Galaxy A04",
    brand: "Samsung",
    image: "https://d64gsuwffb70l.cloudfront.net/690321995c848010f5a202d4_1761812938959_ed204574.webp",
    price: 14000,
    weeklyPayment: 630,
    specs: { screen: "6.5\" HD+", camera: "50MP", battery: "5000mAh", storage: "64GB" },
    available: true
  },
  {
    id: 10,
    name: "Tecno Camon 20",
    brand: "Tecno",
    image: "https://d64gsuwffb70l.cloudfront.net/690321995c848010f5a202d4_1761812938959_ed204574.webp",
    price: 22000,
    weeklyPayment: 1000,
    specs: { screen: "6.67\" AMOLED", camera: "64MP", battery: "5000mAh", storage: "256GB" },
    available: true
  },
  {
    id: 11,
    name: "Infinix Note 30",
    brand: "Infinix",
    image: "https://d64gsuwffb70l.cloudfront.net/690321995c848010f5a202d4_1761812938959_ed204574.webp",
    price: 24500,
    weeklyPayment: 1100,
    specs: { screen: "6.78\" FHD+", camera: "108MP", battery: "5000mAh", storage: "256GB" },
    available: true
  },
  {
    id: 12,
    name: "Oppo A78",
    brand: "Oppo",
    image: "https://d64gsuwffb70l.cloudfront.net/690321995c848010f5a202d4_1761812938959_ed204574.webp",
    price: 26000,
    weeklyPayment: 1200,
    specs: { screen: "6.56\" HD+", camera: "50MP", battery: "5000mAh", storage: "128GB" },
    available: true
  }
];

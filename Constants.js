export const prices = [
  {
    name: "Basic",
    Price: 97,
    accounts: 2,
    id: process.env.NEXT_PUBLIC_PRICE_BASIC,
    limit: false,
  },
  {
    name: "Advanced",
    Price: 189,
    accounts: 6,
    id: process.env.NEXT_PUBLIC_PRICE_ADVANCED,
    limit: false,
  },
  {
    name: "Pro",
    Price: 259,
    accounts: 18,
    id: process.env.NEXT_PUBLIC_PRICE_PRO,
    limit: false,
  },
  {
    name: "Life Time",
    Price: 959,
    accounts: 10,
    id: process.env.NEXT_PUBLIC_PRICE_LIFETIME,
    limit: true,
    expire: 10,
    lifetime: true,
  },
];

export const firebaseConfig = {
  apiKey: "AIzaSyCNboygqhiVSCRWZ-RGAhgwityFtLdJgOQ",
  authDomain: "ea-website-5968a.firebaseapp.com",
  projectId: "ea-website-5968a",
  storageBucket: "ea-website-5968a.appspot.com",
  messagingSenderId: "555783767028",
  appId: "1:555783767028:web:fed6f60d92a9216597afa1",
};

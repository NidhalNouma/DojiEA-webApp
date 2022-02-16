export const paths = {
  home: "/",
  dashboard: "/Dashboard",
  accounts: "/Accounts",
  membership: "/Membership",
  howtouse: "/HowToUse",
  settings: "/Settings",
};

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

export const firebaseConfig =
  process.env.NEXT_PUBLIC_MODE === "Live"
    ? {
        apiKey: "AIzaSyD4MgfC1xAiy8w57ppsh4I0QRRXNH62u2U",
        authDomain: "dojibot-29cb7.firebaseapp.com",
        projectId: "dojibot-29cb7",
        storageBucket: "dojibot-29cb7.appspot.com",
        messagingSenderId: "496467423343",
        appId: "1:496467423343:web:d1e8082b746de8bbc35d9a",
      }
    : {
        apiKey: "AIzaSyCNboygqhiVSCRWZ-RGAhgwityFtLdJgOQ",
        authDomain: "ea-website-5968a.firebaseapp.com",
        projectId: "ea-website-5968a",
        storageBucket: "ea-website-5968a.appspot.com",
        messagingSenderId: "555783767028",
        appId: "1:555783767028:web:fed6f60d92a9216597afa1",
      };

export function getNameByPriceId(id) {
  let r = null;
  prices.forEach((v) => {
    if (v.id == id) r = v.name;
  });

  return r;
}

export function getAccountsByPriceId(id) {
  let r = null;
  prices.forEach((v) => {
    if (v.id == id) r = v.accounts;
  });

  return r;
}

export const files = {
  ex4: () => (window.location = "/robot/DojiBot.ex4"),
};

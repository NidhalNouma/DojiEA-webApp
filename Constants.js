export const paths = {
  home: "/",
  // dashboard: "/Dashboard",
  dashboard: "/Accounts",
  accounts: "/Accounts",
  membership: "/Membership",
  howtouse: "/Docs",
  settings: "/Settings",
};

export const prices = {
  free: {
    name: "Free",
    Price: 0,
    accounts: 0,
    demoAccounts: 2,
    id: null,
    limit: false,
    type: "subscription",
  },
  basic: {
    name: "Basic",
    Price: 98,
    accounts: 2,
    demoAccounts: 4,
    id: process.env.NEXT_PUBLIC_PRICE_BASIC,
    limit: false,
    type: "subscription",
  },
  advanced: {
    name: "Advanced",
    Price: 198,
    accounts: 5,
    demoAccounts: 6,
    id: process.env.NEXT_PUBLIC_PRICE_ADVANCED,
    limit: false,
    type: "subscription",
  },
  pro: {
    name: "Pro",
    Price: 358,
    accounts: 10,
    demoAccounts: 10,
    id: process.env.NEXT_PUBLIC_PRICE_PRO,
    limit: false,
    type: "subscription",
  },
  lifetime: {
    name: "Life Time",
    Price: 998,
    OldPrice: 1888,
    accounts: 8,
    demoAccounts: 8,
    id: process.env.NEXT_PUBLIC_PRICE_LIFETIME,
    limit: true,
    expire: 10,
    lifetime: true,
    type: "intent",
  },
};

export const accountsTypes = {
  real: "Real",
  demo: "Demo",
};

export const firebaseConfig =
  process.env.NEXT_PUBLIC_MODE === "Live"
    ? {
        apiKey: "AIzaSyD4MgfC1xAiy8w57ppsh4I0QRRXNH62u2U",
        authDomain: "auth.dojibot.com",
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

export function getAccountsByPriceId(id, type) {
  let r = null;

  for (const key in prices) {
    const v = prices[key];
    if (v.id === id) {
      if (!type) r = v.accounts + v.demoAccounts;
      else if (type === accountsTypes.demo) r = v.demoAccounts;
      else if (type === accountsTypes.real) r = v.accounts;
    }
  }

  return r;
}

export const version = process.env.NEXT_PUBLIC_VERSION;
export const message = process.env.NEXT_PUBLIC_MSG;

export const files = {
  ex4: () => (window.location = process.env.NEXT_PUBLIC_MT4_FILE),
  ex5: () => (window.location = process.env.NEXT_PUBLIC_MT5_FILE),
};

export const email = {
  address: "dojibot1@gmail.com",
};

export const questions = [
  {
    question: "What's the minimum balance to start using our bot?",
    answer:
      "Our recommended balance to use Irins Expert Advisor is $5000. You can start as low as $200 to start EA and make profit in cent account. Our client divide it on many cent account and still get best result.",
  },
  {
    question: "What's the minimum balance to start using our bot?",
    answer:
      "Our recommended balance to use Irins Expert Advisor is $5000. You can start as low as $200 to start EA and make profit in cent account. Our client divide it on many cent account and still get best result.",
  },
  {
    question: "What's the minimum balance to start using our bot?",
    answer:
      "Our recommended balance to use Irins Expert Advisor is $5000. You can start as low as $200 to start EA and make profit in cent account. Our client divide it on many cent account and still get best result.",
  },
  {
    question: "What's the minimum balance to start using our bot?",
    answer:
      "Our recommended balance to use Irins Expert Advisor is $5000. You can start as low as $200 to start EA and make profit in cent account. Our client divide it on many cent account and still get best result.",
  },
  {
    question: "What's the minimum balance to start using our bot?",
    answer:
      "Our recommended balance to use Irins Expert Advisor is $5000. You can start as low as $200 to start EA and make profit in cent account. Our client divide it on many cent account and still get best result.",
  },
  {
    question: "What's the minimum balance to start using our bot?",
    answer:
      "Our recommended balance to use Irins Expert Advisor is $5000. You can start as low as $200 to start EA and make profit in cent account. Our client divide it on many cent account and still get best result.",
  },
];

export const team = [
  {
    name: "Nidhal Nouma",
    freelancer: "https://www.freelancer.com/u/nidhalnouma",
    upwork: "https://www.upwork.com/freelancers/~01768cb96edce5aa4c",
    fiver: "",
    skype: "",
    whatsapp: "",
    email: "",
  },
  {
    name: "Hamdi Garraz",
    freelancer: "https://www.freelancer.com/u/hamdigarraz",
    upwork: "",
    fiver: "https://www.fiverr.com/hamdi_g",
    skype: "",
    whatsapp: "",
    email: "",
  },
];

export const followUs = {
  youtube: "https://www.youtube.com/channel/UC-TYTy9aMvJbUz6lW89aLlA",
  facebook: "https://www.facebook.com/",
  telegram: "https://www.telegram.com/",
  twitter: "https://twitter.com/",
  discord: "https://discordapp.com",
};

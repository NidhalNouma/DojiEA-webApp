import { Stripe } from "stripe";
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_PRIVATE_KEY);
import { getUserByEmail, addAccount } from "../../../hooks/firebase";
import { allowedAccounts } from "../../../hooks/Stripe";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).end(`Method ${req.method} Not Allowed`);

  let { accountNumber, accountServer, accountName, email } = req.body;
  // email = "nidhal.nouma.0@gmail.com";
  // accountNumber = 111151008;
  // accountServer = "bbbbbb";
  // accountName = "test";
  const user = await getUserByEmail(email);

  if (user) {
    const subscriptions = await stripe.subscriptions.list({
      customer: user.customerId,
    });
    if (subscriptions?.data?.length === 0)
      return res.status(200).json({ error: "No valid subscriptiom" });

    let ac = allowedAccounts(subscriptions.data);

    if (ac <= user.accounts.length)
      return res
        .status(200)
        .json({ error: "You reach the maximum of acoounts" });

    if (!findAccount(accountNumber, accountServer, user.accounts))
      await addAccount(
        accountServer,
        accountNumber,
        accountName,
        user.email,
        user.uid
      );

    return res.status(200).json({ error: "", accounts: user.accounts, ac });
  } else return res.status(200).json({ error: "Account not exist!" });
}

function findAccount(number, server, accounts) {
  let r = false;
  accounts.forEach((v) => {
    // console.log(v);
    if (number === v.accountNumber && server === v.accountServer) r = true;
  });

  return r;
}

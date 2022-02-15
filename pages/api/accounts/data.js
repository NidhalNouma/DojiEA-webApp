import { Stripe } from "stripe";
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_PRIVATE_KEY);
import { getUserByEmail, addAccount } from "../../../hooks/firebase";
import { allowedAccounts } from "../../../hooks/Stripe";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).end(`Method ${req.method} Not Allowed`);

  let { accountNumber, accountServer, data, email } = req.body;
  const user = await getUserByEmail(email);
  console.log(data);

  return res.status(200).json({ data });
}

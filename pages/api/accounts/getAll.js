import { getUserByEmail } from "../../../hooks/firebase";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).end(`Method ${method} Not Allowed`);

  const { email } = req.body;

  const user = await getUserByEmail(email);

  if (user) res.status(200).json({ accounts: user?.accounts });
}

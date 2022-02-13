import { getUserByEmail } from "../../../hooks/firebase";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).end(`Method ${req.method} Not Allowed`);

  let { accountNumber, accountServer, email } = req.body;
  const user = await getUserByEmail(email);

  if (user) {
    let valid = false;

    user.accounts.forEach((a) => {
      if (
        a.accountNumber == accountNumber &&
        a.accountServer == accountServer &&
        a.isActive
      )
        valid = true;
    });

    return res.status(200).json({ error: "", valid });
  } else return res.status(200).json({ error: "Account not exist!" });
}

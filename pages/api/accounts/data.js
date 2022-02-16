import { addData } from "../../../hooks/firebase";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).end(`Method ${req.method} Not Allowed`);

  let { accountNumber, accountServer, data, email, lastOrder } = req.body;

  const r = await addData(data, lastOrder, accountServer, accountNumber, email);

  return res.status(200).json({ r });
}

import { addData } from "../../../model/Accounts";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).end(`Method ${req.method} Not Allowed`);

  let { accountNumber, accountServer, data, ID: id, lastOrder } = req.body;
  console.log(lastOrder);

  const r = await addData(id, data, lastOrder);

  return res.status(200).json({ r });
}

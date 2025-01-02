// send-email.ts

import { NextApiRequest, NextApiResponse } from "next"

// Define the expected structure of the request body
interface RequestBody {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const body: RequestBody = req.body

    try {
      // Your email-sending logic goes here

      return res.status(200).json({ success: true })
    } catch (error) {
      return res.status(500).json({ success: false, error: error.message })
    }
  } else {
    return res.status(405).json({ success: false, error: "Method Not Allowed" })
  }
}

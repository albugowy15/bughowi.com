import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { email } = req.body;

	if (!email) {
		return res.status(400).json({ error: "Email is required" });
	}

	const result = await fetch("https://api.sendinblue.com/v3/contacts", {
		method: "POST",
		headers: {
			accept: "application/json",
			// Authorization: `Token ${process.env.REVUE_API_KEY}`,
			"Content-Type": "application/json",
			"api-key": "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",
		},
		body: JSON.stringify({ updateEnabled: false, email: email }),
	});

	const data = await result.json();

	if (!result.ok) {
		return res.status(500).json({ error: data.error.email[0] });
	}

	return res.status(201).json({ error: "" });
}

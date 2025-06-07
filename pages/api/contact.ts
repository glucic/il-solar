// pages/api/contact.ts
import type {NextApiRequest, NextApiResponse} from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({error: "Method not allowed"});
    }

    try {
        const response = await fetch(`https://formspree.io/f/${process.env.FORMSPREE_ID}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(req.body),
        });

        const data = await response.json();

        if (response.ok) {
            return res.status(200).json({message: "Success", data});
        } else {
            return res.status(500).json({error: "Failed to submit", details: data});
        }
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : "Unknown error";
        return res.status(500).json({error: "Server error", details: message});
    }
}
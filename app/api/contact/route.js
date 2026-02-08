import dns from "dns"
dns.setDefaultResultOrder("ipv4first")

import clientPromise from "@/lib/mongodb"

export async function POST(req) {
    try {
        const body = await req.json()

        const client = await clientPromise
        const db = client.db("manisha_site")

        await db.collection("contacts").insertOne({
            ...body,
            createdAt: new Date(),
        })

        return Response.json({ success: true })
    } catch (error) {
        return Response.json(
            { error: error.message },
            { status: 500 }
        )
    }
}

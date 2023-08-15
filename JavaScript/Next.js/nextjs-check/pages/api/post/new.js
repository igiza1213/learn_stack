import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  if (req.method === "POST") {
    if (req.body.title == "") {
      res.status(500).json("please insert title");
    }

    try {
      const db = (await connectDB).db("next-check");
      let result = await db.collection("write").insertOne(req.body);
      res.redirect(302, "/");
    } catch (error) {
      res.status(500).json("error: database error");
    }
  }
}

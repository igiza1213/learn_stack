import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
    if (req.method == "POST") {
        let session = await getServerSession(req, res, authOptions);

        let db = (await connectDB).db("forum");
        let data = await db
            .collection("post")
            .findOne({ _id: new ObjectId(req.body) });
        try {
            if (data.author == session.user.email) {
                let result = await db
                    .collection("post")
                    .deleteOne({ _id: new ObjectId(req.body) });
                return res.redirect(200, "/list");
            }
        } catch (error) {
            try {
                console.log(session.user.email);
            } catch (error) {
                res.status(401).json("로그인 하지않음");
            }
            if (data.author != session.user.email) {
                res.status(401).json("작성자가 일치하지 않음");
            } else {
                res.redirect(500, "/error/500");
            }
        }
    }
}

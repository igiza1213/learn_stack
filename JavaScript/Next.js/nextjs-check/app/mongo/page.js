import { connectDB } from "@/util/database";
import Link from "next/link";

export default async function Mongo() {
  const db = (await connectDB).db("next-check");
  let result = await db.collection("mongo").find().toArray();
  return (
    <>
      <div className="list-bg">
        {result.map((a, i) => (
          <div className="list-item" key={i}>
            <Link href={`/detail/${result[i]._id}`}>
              <h4>{result[i].title}</h4>
            </Link>
            <p>{result[i].content}</p>
          </div>
        ))}
      </div>
    </>
  );
}

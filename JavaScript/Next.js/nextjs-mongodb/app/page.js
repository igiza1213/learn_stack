import { connectDB } from "/util/database.js";

// export const revalidate = 60;

export default async function Home() {
    const db = (await connectDB).db("forum");
    let result = await db.collection("post").find().toArray();

    return (
        <main>
            <div className="list-bg">
                {result.map((a, i) => (
                    <div className="list-item" key={i}>
                        <h4>{a.title}</h4>
                        <p>1월 1일</p>
                    </div>
                ))}
            </div>
        </main>
    );
}

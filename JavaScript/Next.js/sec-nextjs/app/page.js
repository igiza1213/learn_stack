import Link from "next/link";

export default function Home() {
  const name = "park";
  return (
    <main>
      <h4 className="title" style={{ color: "red", fontSize: "20px" }}>
        애플후레시
      </h4>
      <p className="title-sub">by dev {name}</p>
    </main>
  );
}

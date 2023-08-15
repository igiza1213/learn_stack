import Link from "next/link";

export default function Arrow({ location }) {
  return (
    <>
      <Link href={location}>
        <div className="arrow">
          <div className="one" />
          <div className="two" />
          <div className="three" />
        </div>
      </Link>
    </>
  );
}

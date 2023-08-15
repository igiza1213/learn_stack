"use client";

import Link from "next/link";

export default function ListItem({ result }) {
    return (
        <div>
            {result.map((a, i) => (
                <div className="list-item" key={i}>
                    <Link href={`/detail/${a._id}`}>
                        <h4>{a.title}</h4>
                    </Link>
                    <Link href={`/edit/${a._id}`}>✏️</Link>
                    <span
                        onClick={(e) => {
                            fetch("/api/post/delete", {
                                method: "POST",
                                body: a._id,
                            })
                                .then((r) => r.json)
                                .then(() => {
                                    e.target.parentElement.style.opacity = 0;
                                });
                        }}
                    >
                        🗑️
                    </span>
                    <p>{result[i].content}</p>
                </div>
            ))}
        </div>
    );
}

"use client";

import { useEffect, useState } from "react";

export default function Comment(props) {
    let [comment, setComment] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/api/comment/list?id=" + props._id)
            .then((r) => r.json())
            .then((result) => {
                setData(result);
            });
    }, []);

    return (
        <div>
            <hr></hr>
            {data.length > 0
                ? data.map((a, i) => <p key={i}>{a.content}</p>)
                : "댓글 없음"}
            <input
                onChange={(e) => {
                    setComment(e.target.value);
                }}
            />
            <button
                onClick={() => {
                    fetch("/api/comment/new ", {
                        method: "POST",
                        body: JSON.stringify({
                            comment: comment,
                            _id: props._id,
                        }),
                    }).then();
                }}
            >
                댓글 전송
            </button>
        </div>
    );
}

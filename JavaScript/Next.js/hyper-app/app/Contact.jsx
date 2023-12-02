"use client";

export default function Contact({ email, tel }) {
  return (
    <>
      <h2
        onClick={() => {
          console.log("Clicked!");
        }}
      >
        연락처
      </h2>
      <p>이메일: {email}</p>
      <p>전화번호: {tel}</p>
    </>
  );
}

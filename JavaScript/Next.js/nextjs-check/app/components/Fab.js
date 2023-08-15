"use client";
import Link from "next/link";
import { useState } from "react";

export default function Fab() {
  const name = ["", "button", "object"];
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className="fab"
        onMouseEnter={() => {
          setOpen(true);
        }}
        onMouseLeave={() => {
          setOpen(false);
        }}
      ></div>
      <div
        className="menubar"
        id="menubar_f"
        style={open ? { display: "flex" } : { display: "none" }}
        onMouseEnter={() => {
          setOpen(true);
        }}
        onMouseLeave={() => {
          setOpen(false);
        }}
      >
        <div className="menu_top">
          <div className="menubar_line">
            <div className="menubar_menuline">
              <div className="menubar_menuline1" />
              <div className="menubar_menuline2" />
              <div className="menubar_menuline3" />
            </div>
          </div>
        </div>
        <div className="menu_bottom">
          <Link href="/">
            <div className="menu_column">main</div>
          </Link>
          <Link href="/button">
            <div className="menu_column">button</div>
          </Link>
          <Link href="/object">
            <div className="menu_column">object</div>
          </Link>
        </div>
      </div>
    </>
  );
}

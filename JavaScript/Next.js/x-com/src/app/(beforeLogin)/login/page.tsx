"use client";

import { useRouter } from "next/navigation";
import Main from "@/app/(beforeLogin)/_component/Main";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export default function Login() {
  const router: AppRouterInstance = useRouter();
  router.replace("/i/flow/login");
  return <Main />;
}

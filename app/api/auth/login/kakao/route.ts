import { encryptData } from "@feature/auth/utils/encryptData";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_SERVER_API
    }/api/v1/auth/kakao/login?code=${searchParams.get("code")}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (res.ok) {
    const data = await res.json();
    const expires = new Date(Date.now() + 2 * 7 * 24 * 60 * 60 * 1000);
    const auth_session = await encryptData({ data, expires });
    cookies().set("auth_session", auth_session, { expires, httpOnly: true });
    return NextResponse.json(
      { success: "Data Storing Successful" },
      { status: 200 }
    );
  }
  return NextResponse.json({ error: "Data Storing Failed" }, { status: 400 });
}
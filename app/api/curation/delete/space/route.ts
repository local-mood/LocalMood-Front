import { getSession } from "@/common/utils/session/get-session";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
  const body = await request.json();
  const curationId = Number(body.curationId);
  const spaceId = Number(body.spaceId);
  const auth_info = await getSession();
  const token = auth_info?.data?.accessToken;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/curation/${curationId}/space/${spaceId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (res.ok) {
    return NextResponse.json("Success", { status: 200 });
  } else {
    return NextResponse.json("Error", { status: 400 });
  }
}

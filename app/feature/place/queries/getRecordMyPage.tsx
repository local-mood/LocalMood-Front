import { getSession } from "@common/utils/session/getSession";

export default async function GetRecordMyPage(): Promise<{
  reviewCount: number;
  reviews: any[];
}> {
  const auth_info = await getSession();
  const token = auth_info?.data?.accessToken;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/review/member`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await res.json();
  return data;
}
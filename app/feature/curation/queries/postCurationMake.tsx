interface CurationDataProps {
  title: string;
  keyword: string;
  privacy: boolean;
}

export default async function PostCurationMake(
  dataCurationMake: CurationDataProps
) {
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhY2Nlc3MtdG9rZW4iLCJlbWFpbCI6InN0cmlkMjJnQG5hdmVyLmNvbSIsInJvbGUiOiLtmozsm5AiLCJpYXQiOjE3MDY0NTU4NzYsImV4cCI6MTcwNjQ5OTA3Nn0.o1x0nNZaQFZAHTziLTSLSjTrdMGJmv1SGp8EagLbe8NKSZ3HCI_lIUs-cQKZItmoZp4S6nFTpzFxRGWnBfiRHw";
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/curation`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(dataCurationMake),
    }
  );

  const data = await res;

  return data;
}
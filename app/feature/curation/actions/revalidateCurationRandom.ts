"use server";

import { revalidateTag } from "next/cache";

export default async function revalidateCurationRandom() {
  revalidateTag("getRandomCuration");
}

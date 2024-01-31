"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export default async function revalidateScrapSpace() {
  revalidateTag("getPlaceScrapped");
  revalidatePath("/record");
}

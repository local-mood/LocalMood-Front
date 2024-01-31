"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export default async function revalidateMyCuration() {
  revalidateTag("getMyCuration");
  revalidatePath("/curation");
}

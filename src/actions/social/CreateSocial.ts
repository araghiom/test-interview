"use server";

import { db } from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

interface CreateTopicFormState {
  errors: {};
}

export async function createSocial(data: { type: string; link: string }) {
  try {
    const newSocialLink = await db.socialDetail.create({
      data: {
        type: data.type,
        link: data.link,
      },
    });

    return newSocialLink;
  } catch (error) {
    throw error;
  }
}

// revalidatePath("/");
// redirect("/");

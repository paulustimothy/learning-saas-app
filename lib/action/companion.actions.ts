"use server";

import { auth } from "@clerk/nextjs/server";
import { createSupabaseClient } from "../supabase";

export const createCompanion = async (formData: CreateCompanion) => {
  const { userId: author } = await auth();
  const supabase = createSupabaseClient();

  const { data, error } = await supabase
    .from("companions")
    .insert({ ...formData, author })
    .select();

  if (error || !data)
    throw new Error(error?.message || "Failed to create a companion");

  return data[0];
};

export const getAllCompanions = async ({limit = 10, page = 1, subject, topic}: GetAllCompanions) => {
  const supabase = createSupabaseClient();

  let query = supabase.from("companions").select();

  if(subject && topic){
    query = query.ilike('subject', `%${subject}%`).or(`topic.ilike.%${topic}%,name.ilike.%${topic}%`)
  } else if (subject){
    query = query.ilike("subject", `%${subject}%`);
  } else if (topic){
    query = query.or(`topic.ilike.%${topic}%,name.ilike.%${topic}%`)
  }

  // this formula calculates the ending index of the query
  // Example: Page 1 will return items 0-9 (first 10 items)
  query = query.range((page - 1) * limit, page * limit - 1);

  const {data:companions, error} = await query;

  if(error) throw new Error(error.message);

  return companions;
}

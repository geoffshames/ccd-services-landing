import { redirect } from "next/navigation";
import { getAllSlugs } from "@/lib/projects";

export default function Home() {
  const slugs = getAllSlugs();
  if (slugs.length > 0) {
    redirect(`/${slugs[0]}`);
  }
  return null;
}

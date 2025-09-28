import { redirect } from "next/navigation";
export default function LegacyPestRedirect({ params }: { params: { slug: string } }) {
  redirect(`/pests/${params.slug}`);
}


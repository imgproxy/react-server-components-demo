import { redirect } from 'next/navigation';

export default async function Page() {
  redirect(`/image/1?preset=format_webp`);
}

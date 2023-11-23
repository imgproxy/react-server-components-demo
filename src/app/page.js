import { redirect } from 'next/navigation';
import { formatDay } from '@/app/util/day';

export default async function Page() {
  const today = formatDay(new Date());
  redirect(`/day/${today}?preset=format_webp`);
}

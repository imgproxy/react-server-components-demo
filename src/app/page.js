import { redirect } from 'next/navigation';
import { formatDay } from '@/app/components/dayUtils';

export default async function Page() {
  const today = formatDay(new Date());
  redirect(`/day/${today}?preset=format_webp`);
}

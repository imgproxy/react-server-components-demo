import Day from '@/app/components/day';
import Intro from '@/app/components/intro';

export default async function Page({ params, searchParams }) {
  const activeDay = params.ymd;
  const preset = searchParams.preset;

  return (
    <>
      <Day value={activeDay} preset={preset} />
      <Intro activeDay={activeDay} />
    </>
  );
}

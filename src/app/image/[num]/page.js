import Day from '@/app/components/image';
import Intro from '@/app/components/intro';

export default async function Page({ params, searchParams }) {
  const activeImg = params.num;
  const preset = searchParams.preset;

  return (
    <>
      <Day value={activeImg} preset={preset} />
      <Intro activeDay={activeImg} />
    </>
  );
}

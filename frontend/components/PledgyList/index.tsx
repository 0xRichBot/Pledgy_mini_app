'use client';
import { useRouter } from 'next/navigation';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const PledgyItem = ({
  endTime,
  goalId,
}: {
  endTime: string;
  goalId: string;
}) => {
  const router = useRouter();
  const isOver = new Date(endTime) < new Date();
  return (
    <div className="w-full p-2.5 pb-0 bg-[#f6f6f6] rounded-lg flex-col justify-start items-end gap-8 inline-flex mt-5">
      <div className="pr-1 pb-3 justify-start items-center inline-flex">
        <div className="w-100 self-stretch flex-col justify-start items-start gap-3 inline-flex">
          <div className="w-72 justify-start items-center gap-24 inline-flex">
            <div className="w-64 flex-col justify-start items-start inline-flex">
              <div className="self-stretch justify-start items-start gap-2.5 inline-flex">
                <div className="text-black text-sm font-semibold font-['Inter'] leading-tight">
                  Pledgy Test Title for test{' '}
                </div>
                <div className="grow shrink basis-0 text-black text-sm font-normal font-['Inter'] leading-tight">
                  0.02 WLD
                </div>
              </div>
              <div className="self-stretch text-[#828282] text-xs font-normal font-['Inter'] leading-none">
                {dayjs(endTime).fromNow()}
              </div>
            </div>
          </div>
          <div className="h-24 flex-col justify-center items-start gap-3 flex">
            <div className="self-stretch text-black text-sm font-normal font-['Inter'] leading-tight">
              Body text for a post. Since it’s a social app, sometimes it’s a
              hot take, and sometimes it’s a question.
            </div>
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="grow shrink basis-0 h-5 justify-start items-center gap-4 flex">
                <div className="justify-start items-center gap-2 flex">
                  <img src="/assets/loader.svg" alt="loading" />
                  <div className="text-black text-sm font-medium font-['Inter'] leading-tight">
                    6 Challengers
                  </div>
                </div>
              </div>
              <div
                className="w-24 h-8 px-4 bg-black rounded-lg justify-center items-center gap-2 flex"
                onClick={() => {
                  if (isOver) {
                    router.push(`/result?goalId=${goalId}`);
                  } else {
                    router.push(`/pledgy?goalId=${goalId}`);
                  }
                }}
              >
                <div className="text-white text-sm font-medium font-['Inter'] leading-tight">
                  {isOver ? 'Result' : 'Challenge'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const PledgyList = () => {
  const router = useRouter();
  return (
    <div>
      <div className="h-14 flex justify-between items-center">
        <div className="w-1/2">
          <p className="font-bold text-xl">Pledgy</p>
        </div>
        <img
          src="/assets/add.svg"
          alt="add"
          onClick={() => router.push('/create')}
        />
      </div>
      <PledgyItem endTime="2024-11-13T16:00:00.000Z" goalId="123" />
      <PledgyItem endTime="2024-11-16T16:00:00.000Z" goalId="123" />
    </div>
  );
};

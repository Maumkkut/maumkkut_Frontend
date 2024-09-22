import { useNavigate } from 'react-router-dom';
import { useFetchMyGroupList } from '@/hooks/queries/group';

export default function GroupManage() {
  const navigate = useNavigate();

  const { data } = useFetchMyGroupList();

  return (
    <div className="flex w-[800px] flex-col gap-y-5">
      <div className="flex justify-end">
        <button onClick={() => navigate('/grouptrip/groupmake')}>
          <span className="text-bold text-mk-logo3">그룹추가</span>
        </button>
      </div>
      {/* 이게 진짜임 */}
      <div className="flex flex-col">
        {/* 컴포넌트 하나 */}
        {data &&
          data.result.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-y px-4 py-7"
            >
              <div className="flex items-center gap-x-5 text-mk-darkgray">
                <div className="flex h-[50px] w-[75px] items-center justify-center rounded-lg bg-mk-logo0 text-center">
                  <span>
                    D-
                    {new Date(
                      new Date(item.start_date).getTime() -
                        new Date().getTime(),
                    ).getDate()}
                  </span>
                </div>
                <p className="text-3xl">{item.name}</p>
              </div>

              <button
                className="text-2xl text-mk-logo3"
                onClick={() => navigate(`/grouptrip/${item.id}`)}
              >
                일정 확인
              </button>
              {/* <div className="flex flex-col gap-y-5">
                <button className="rounded-lg bg-mk-logo3 px-10 py-4">
                  <span className="text-white">수정</span>
                </button>
                <button className="rounded-lg border border-mk-logo3 px-10 py-4">
                  <span className="text-mk-darkgray">삭제</span>
                </button>
              </div> */}
            </div>
          ))}

        {/* <div className="flex items-center justify-between border-y px-4 py-7">
          <div className="flex items-center gap-x-5 text-mk-darkgray">
            <div className="flex h-[50px] w-[75px] items-center justify-center rounded-lg bg-mk-logo0 text-center">
              <span>D-16</span>
            </div>
            <p className="text-3xl">아이고두야(4명)</p>
          </div>

          <p className="text-2xl text-mk-logo3">일정 확인</p>
          <div className="flex flex-col gap-y-5">
            <button className="rounded-lg bg-mk-logo3 px-10 py-4">
              <span className="text-white">수정</span>
            </button>
            <button className="rounded-lg border border-mk-logo3 px-10 py-4">
              <span className="text-mk-darkgray">삭제</span>
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}

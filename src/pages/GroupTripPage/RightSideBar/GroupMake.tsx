import { REGION_CODE } from '@/constants/regionCode';
import { TMakeGroupPayload } from '@/types/group';
import SearchMate from '@/components/SearchMate';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { usePostMakeGroup } from '@/hooks/queries/group';
import { useUserInfo } from '@/hooks/queries/user';
import { useQueryClient } from '@tanstack/react-query';

import { useNavigate } from 'react-router-dom';
const GroupMake = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [mateNumber, setMateNumber] = useState<number>(1);
  const [tripMateList, setTripMateList] = useState<number[]>([]);
  const [selectRegion, setSelectRegion] = useState(null);

  const { data: userInfo } = useUserInfo();
  const { mutate } = usePostMakeGroup();

  const {
    register,
    handleSubmit,
    // resetField,
  } = useForm<TMakeGroupPayload>();

  const handleGroupMake = async (formValues: TMakeGroupPayload) => {
    if (!selectRegion) {
      return alert('지역을 선택해야 합니다.');
    }
    if (!userInfo) {
      return alert('로그인을 해야합니다.');
    }

    const payload = {
      leader: userInfo.pk,
      members: [userInfo?.pk, ...tripMateList],
      name: formValues.name,
      region: selectRegion,
      start_date: formValues.start_date,
      end_date: formValues.end_date,
    };
    console.log(payload);

    mutate(payload, {
      onSuccess: () => {
        navigate('/grouptrip');
        queryClient.invalidateQueries({ queryKey: ['groupList'] });
      },
    });
  };

  const groupNameRegister = register('name', {
    required: {
      value: true,
      message: '해당 칸이 빈칸입니다.',
    },
  });

  const startDateRegister = register('start_date', {
    required: {
      value: true,
      message: '해당 칸이 빈칸입니다.',
    },
  });

  const endDateRegister = register('end_date', {
    required: {
      value: true,
      message: '해당 칸이 빈칸입니다.',
    },
  });

  // const handleGroupMake = () => {
  //   const payload = {
  //     leader: userInfo?.pk,
  //     members: [1],
  //     name: '그룹임',
  //     region: '강릉',
  //     start_date: new Date().toISOString().split('T')[0],
  //     end_date: new Date().toISOString().split('T')[0],
  //   };

  //   // 그거 해야함 리액트 hook form으로 만들고 저거 적용하기.
  //   // mutate(payload,{
  //   //   onSuccess: () => {

  //   //   }
  //   // });
  // };

  const handleAddMember = () => {
    setMateNumber(mateNumber + 1);
  };

  return (
    <div className="flex justify-center text-sm">
      <form
        className="flex flex-col gap-y-20"
        onSubmit={handleSubmit(handleGroupMake)}
      >
        <h1 className="flex justify-center text-3xl font-bold text-mk-logo4">
          <span>새 여행 그룹 만들기</span>
        </h1>

        <div className="flex flex-col">
          {/* group info */}
          <div className="flex flex-col gap-y-4">
            {/* 이름 */}
            <div className="flex h-[40px] items-center gap-x-5">
              <span>그룹 이름</span>
              <div className="flex h-full w-[410px] items-center justify-between">
                <input
                  id="name"
                  type="text"
                  className="h-full w-[320px] rounded-md border border-black"
                  {...groupNameRegister}
                />
                <button className="h-[30px] w-[70px] rounded-lg bg-mk-newgrey text-xs font-light text-white">
                  중복확인
                </button>
              </div>
            </div>
            {/* 일정 */}
            <div className="flex h-[40px] items-center gap-x-5">
              <span>그룹 일정</span>
              <div className="flex h-full w-[410px] items-center justify-between gap-x-5">
                <input
                  id="start_date"
                  type="date"
                  className="h-full w-[320px] rounded-md border border-black"
                  {...startDateRegister}
                />
                <span> ~ </span>
                <input
                  id="end_date"
                  type="date"
                  className="h-full w-[320px] rounded-md border border-black"
                  {...endDateRegister}
                />
              </div>
            </div>
            {/* 숙소 */}
            <div>
              <span>여행 지역 선택</span>
            </div>
            <div className="flex items-center gap-x-5">
              <div className="grid w-[400px] grow grid-cols-4 gap-3">
                {Object.values(REGION_CODE).map((item) => (
                  <button
                    type="button"
                    key={item}
                    onClick={() => setSelectRegion(item)}
                    className={`rounded-md border border-mk-newgrey px-4 py-2 ${selectRegion === item && `border-mk-logo3 bg-mk-logo3 text-white`}`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <span className="font-bold">여행 메이트 검색</span>
            </div>

            <div className="flex flex-col items-center gap-y-3">
              {Array.from({ length: mateNumber }).map((_, index) => (
                <SearchMate
                  key={index}
                  setTripMateList={setTripMateList}
                />
              ))}

              <button
                className="h-[30px] w-[90px] rounded-3xl border border-mk-newgrey text-xs"
                onClick={() => handleAddMember()}
              >
                + 인원 추가
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-x-12">
          <button className="h-[40px] w-[100px] rounded-lg bg-mk-newgrey text-sm font-light text-white">
            생성 취소
          </button>
          <button
            type="submit"
            className="h-[40px] w-[100px] rounded-lg bg-mk-logo3 text-sm font-light text-white"
          >
            그룹 생성
          </button>
        </div>
      </form>
    </div>
  );
};

export default GroupMake;

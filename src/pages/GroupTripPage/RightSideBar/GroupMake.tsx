import Swal from 'sweetalert2';

import { REGION_CODE } from '@/constants/regionCode';
import { TMakeGroupPayload } from '@/types/group';
import SearchMate from '@/components/SearchMate';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { usePostMakeGroup } from '@/hooks/queries/group';
import { useUserInfo } from '@/hooks/queries/user';
import { useQueryClient } from '@tanstack/react-query';
import { ErrorMessage } from '@hookform/error-message';
import { checkGroupName, postTourRecommend } from '@/api/group';
import { useNavigate } from 'react-router-dom';

const GroupMake = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [mateNumber, setMateNumber] = useState<number>(1);
  const [tripMateList, setTripMateList] = useState<number[]>([]);
  const [selectRegion, setSelectRegion] = useState(null);
  const [isCheckGroupName, setCheckGroupName] = useState<boolean>(false);

  const { data: userInfo } = useUserInfo();
  const { mutate } = usePostMakeGroup();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    // resetField,
  } = useForm<TMakeGroupPayload>();

  const startDate = watch('start_date');
  const groupName = watch('name');
  const today = new Date().toISOString().split('T')[0]; // 오늘 날짜

  const handleGroupMake = async (formValues: TMakeGroupPayload) => {
    if (!selectRegion) {
      return Swal.fire({
        icon: 'error',
        title: '그룹 생성 오류',
        text: '지역을 선택해야 합니다.',
      });
    }
    if (!userInfo) {
      return Swal.fire({
        icon: 'error',
        title: '그룹 생성 오류',
        text: '로그인을 해야합니다.',
      });
    }

    if (!isCheckGroupName) {
      return Swal.fire({
        icon: 'error',
        title: '그룹 생성 오류',
        text: '그룹이름 중복검사는 필수입니다.',
      });
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
      onSuccess: (res) => {
        const payload = {
          group_id: res.id,
          region: res.region,
        };
        postTourRecommend(payload);
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
    validate: {
      notPast: (value) =>
        value >= today || '오늘보다 이전 날짜는 선택할 수 없습니다.',
    },
  });

  const endDateRegister = register('end_date', {
    required: {
      value: true,
      message: '해당 칸이 빈칸입니다.',
    },
    validate: {
      notPast: (value) =>
        value >= today || '오늘보다 이전 날짜는 선택할 수 없습니다.',
      afterStartDate: (value) =>
        value >= startDate || '종료 날짜는 시작 날짜보다 빠를 수 없습니다.',
    },
  });

  const handleAddMember = () => {
    setMateNumber(mateNumber + 1);
  };

  const handleCheckGroupName = async () => {
    if (!groupName) return;
    if (isCheckGroupName) return;

    const res = await checkGroupName(groupName);
    if (res) {
      setCheckGroupName(true);
      return Swal.fire({
        icon: 'success',
        title: '그룹이름 사용가능',
        text: '사용가능한 그룹 이름입니다!',
      });
    }
    return Swal.fire({
      icon: 'error',
      title: '그룹이름 중복',
      text: '중복된 그룹 이름입니다',
    });
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
                  className={`h-full w-[320px] rounded-md border border-black px-2 ${isCheckGroupName && `bg-mk-newgrey`}`}
                  {...groupNameRegister}
                  disabled={isCheckGroupName}
                />
                <button
                  type="button"
                  onClick={() => handleCheckGroupName()}
                  className={`h-[30px] w-[70px] rounded-lg bg-mk-logo3 text-xs font-light text-white ${isCheckGroupName && `bg-mk-newgrey`}`}
                >
                  중복확인
                </button>
              </div>
            </div>
            {/* 일정 */}
            <div className="flex items-center gap-x-5">
              <span>그룹 일정</span>
              <div className="flex h-full w-[410px] items-center justify-between gap-x-5">
                <div className="flex h-full w-full flex-col">
                  <input
                    id="start_date"
                    type="date"
                    className="h-[40px] rounded-md border border-black"
                    {...startDateRegister}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="start_date"
                    render={({ message }) => (
                      <span className="text-xs text-mk-gangwon">{message}</span>
                    )}
                  />
                </div>
                <span> ~ </span>
                <div className="flex h-full w-full flex-col">
                  <input
                    id="end_date"
                    type="date"
                    className="h-[40px] rounded-md border border-black"
                    {...endDateRegister}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="end_date"
                    render={({ message }) => (
                      <span className="text-xs text-mk-gangwon">{message}</span>
                    )}
                  />
                </div>
              </div>
            </div>
            <div></div>
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

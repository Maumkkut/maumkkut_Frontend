import ContentLayout from '@/layout/ContentLayout';
import Swal from 'sweetalert2';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useEffect, useState } from 'react';
import { fetchcheckNickname, socialAddInfo } from '@/api/user';
import { useNavigate } from 'react-router-dom';
import { useUserInfo } from '@/hooks/queries/user';

import { IAddInfo } from '@/types/user';
export default function AddInfoPage() {
  const navigate = useNavigate();
  const [isCheckNickname, setCheckNickname] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    resetField,
    watch,
    setValue,
  } = useForm<IAddInfo>();
  const { data, isSuccess, refetch } = useUserInfo();

  const openAddressPopup = useDaumPostcodePopup();
  const handleOpenSearchAddress = () => {
    openAddressPopup({ onComplete: handleComplete });
  };

  const handleComplete = (data: { zonecode: string; address: string }) => {
    setValue('postalCode', data.zonecode);
    setValue('address', data.address);
  };

  const nicknameInput = watch('nickname');

  const checkNickname = async () => {
    if (isCheckNickname) return;
    if (!nicknameInput) return;

    const res = await fetchcheckNickname(nicknameInput);
    if (!res) {
      return Swal.fire({
        icon: 'error',
        title: '닉네임 중복',
        text: '이미 사용중인 닉네임입니다!',
      });
    }
    Swal.fire({
      icon: 'success',
      title: '닉네임 사용가능',
      text: '사용가능한 닉네임입니다!',
    });
    setCheckNickname(true);
  };

  const signupSubmit = async (formValues: IAddInfo) => {
    if (!isCheckNickname) {
      return Swal.fire({
        icon: 'error',
        title: '닉네임 중복',
        text: '닉네임 중복체크는 필수입니다!',
      });
    }

    const payload = {
      name: formValues.name,
      phone_number: formValues.phone_number
        .replace(/[^0-9]/g, '')
        .replace(
          /(^02.{0}|^01.{1}|[0-9]{3,4})([0-9]{3,4})([0-9]{4})/g,
          '$1-$2-$3',
        ),
      nickname: formValues.nickname,
      date_of_birth: formValues.date_of_birth,
      address: formValues.address,
    };
    try {
      await socialAddInfo(payload);
      await refetch();
    } catch {
      return Swal.fire({
        icon: 'error',
        title: '오류',
        text: '오류가 발생했습니다.',
      });
    }
    resetField('name');
    resetField('phone_number');
    resetField('nickname');
    resetField('date_of_birth');
    navigate('/signin');
  };

  const birthDateRegister = register('date_of_birth', {
    required: {
      value: true,
      message: '해당 칸이 빈칸입니다.',
    },
  });

  const nameRegister = register('name', {
    required: {
      value: true,
      message: '해당 칸이 빈칸입니다.',
    },
  });

  const nickNameRegister = register('nickname', {
    required: {
      value: true,
      message: '해당 칸이 빈칸입니다.',
    },
  });

  const phoneNumberRegister = register('phone_number', {
    required: {
      value: true,
      message: '해당 칸이 빈칸입니다.',
    },
    pattern: {
      value: /^(010)(\d{4})(\d{4})$/,
      message: '전화번호 형식을 확인해주세요.',
    },
  });

  const postalCodeRegister = register('postalCode', {
    required: true,
  });

  const addressRegister = register('address', {
    required: {
      value: true,
      message: '해당 칸이 빈칸입니다.',
    },
  });

  const addressDetailRegister = register('addressDetail');

  useEffect(() => {
    if (isSuccess) {
      const isAuthenticated = sessionStorage.getItem('token');
      if (isAuthenticated && data && data?.nickname) {
        navigate('/');
      }
    }
  });

  return (
    <ContentLayout>
      {/* 회원가입 폼 */}
      <div className="mt-16 flex w-full justify-center">
        <div className="mb-32 w-[800px] bg-mk-light py-10">
          {/* 회원가입 텍스트 */}
          <div className="mt-10">
            <h2 className="text-center text-3xl font-bold text-mk-logo4">
              추가정보 입력
            </h2>
          </div>
          {/* 회원가입 폼 */}
          <div className="flex justify-center">
            <form
              className="w-[500px]"
              onSubmit={handleSubmit(signupSubmit)}
            >
              <div className="my-6"></div>
              {/*  */}
              <div className="flex flex-col gap-y-7">
                {/* name input */}
                <div className="flex items-center justify-center">
                  <div className="mr-10 w-24 text-right">
                    <label
                      htmlFor="name"
                      className="text-sm"
                    >
                      이름
                    </label>
                  </div>
                  <div className="relative flex-grow">
                    <ErrorMessage
                      errors={errors}
                      name="name"
                      render={({ message }) => (
                        <span className="absolute -bottom-6 pb-1 text-xs text-mk-gangwon">
                          {message}
                        </span>
                      )}
                    />
                    <input
                      id="name"
                      className="h-10 w-full rounded-md border-2 border-mk-newgrey px-3"
                      autoComplete="name"
                      {...nameRegister}
                    />
                  </div>
                </div>

                {/* nickname input */}
                <div className="flex items-center justify-center">
                  <div className="mr-10 w-24 text-right">
                    <label
                      htmlFor="nickname"
                      className="text-sm"
                    >
                      닉네임
                    </label>
                  </div>
                  <div className="relative flex-grow">
                    <ErrorMessage
                      errors={errors}
                      name="nickname"
                      render={({ message }) => (
                        <span className="absolute -bottom-6 pb-1 text-xs text-mk-gangwon">
                          {message}
                        </span>
                      )}
                    />
                    <input
                      id="nickname"
                      className="mr-5 h-10 w-52 rounded-md border-2 border-mk-newgrey px-3"
                      readOnly={isCheckNickname}
                      {...nickNameRegister}
                    />
                    <button
                      type="button"
                      className={`h-[30px] w-[70px] rounded-md bg-mk-logo3 text-xs text-white ${isCheckNickname ? 'bg-mk-newgrey' : 'bg-mk-logo3'}`}
                      onClick={() => checkNickname()}
                    >
                      중복확인
                    </button>
                  </div>
                </div>

                {/* birth_date input */}
                <div className="flex items-center justify-center">
                  <div className="mr-10 w-24 text-right">
                    <label
                      htmlFor="date_of_birth"
                      className="text-sm"
                    >
                      생년월일
                    </label>
                  </div>
                  <div className="relative flex-grow">
                    <ErrorMessage
                      errors={errors}
                      name="date_of_birth"
                      render={({ message }) => (
                        <span className="absolute -bottom-6 pb-1 text-xs text-mk-gangwon">
                          {message}
                        </span>
                      )}
                    />
                    <input
                      id="birth_date"
                      type="date"
                      className="h-10 w-full rounded-md border-2 border-mk-newgrey px-3"
                      {...birthDateRegister}
                    />
                  </div>
                </div>

                {/* phone_number input */}
                <div className="flex items-center justify-center">
                  <div className="mr-10 w-24 text-right">
                    <label
                      htmlFor="phone_number"
                      className="text-sm"
                    >
                      휴대전화
                    </label>
                  </div>
                  <div className="relative flex-grow">
                    <ErrorMessage
                      errors={errors}
                      name="phone_number"
                      render={({ message }) => (
                        <span className="absolute -bottom-6 pb-1 text-xs text-mk-gangwon">
                          {message}
                        </span>
                      )}
                    />
                    <input
                      id="phone_number"
                      type="tel"
                      className="h-10 w-full rounded-md border-2 border-mk-newgrey px-3"
                      {...phoneNumberRegister}
                    />
                  </div>
                </div>

                {/* address input */}
                <div className="flex items-center justify-center">
                  <div className="mr-10 w-24 text-right">
                    <label
                      htmlFor="address"
                      className="text-sm"
                    >
                      주소
                    </label>
                  </div>
                  <div className="relative flex flex-grow flex-col gap-y-2">
                    <ErrorMessage
                      errors={errors}
                      name="address"
                      render={({ message }) => (
                        <span className="absolute -bottom-6 pb-1 text-xs text-mk-gangwon">
                          {message}
                        </span>
                      )}
                    />
                    <div>
                      <input
                        id="postalCode"
                        className="mr-2 h-10 w-[150px] rounded-md border-2 border-mk-newgrey px-3"
                        {...postalCodeRegister}
                      />
                      <button
                        type="button"
                        className={`h-[30px] w-[100px] rounded-md bg-mk-logo3 text-xs text-white`}
                        onClick={() => handleOpenSearchAddress()}
                      >
                        우편번호 찾기
                      </button>
                    </div>
                    <input
                      id="address"
                      className="h-10 w-full rounded-md border-2 border-mk-newgrey px-3"
                      placeholder="기본 주소"
                      {...addressRegister}
                    />
                    <input
                      id="detailAddress"
                      className="h-10 w-full rounded-md border-2 border-mk-newgrey px-3"
                      placeholder="상세 주소"
                      {...addressDetailRegister}
                    />
                  </div>
                </div>
              </div>

              <div className="my-6 mt-20 flex justify-center">
                <button className="h-14 w-56 rounded-lg bg-mk-logo3 text-white">
                  정보 업데이트
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
}

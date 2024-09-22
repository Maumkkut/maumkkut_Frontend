/* eslint-disable no-useless-escape */
import ContentLayout from '@/layout/ContentLayout';
import logoTitle from '@assets/images/logo/logo_title.svg';
import Swal from 'sweetalert2';
import { useDaumPostcodePopup } from 'react-daum-postcode';

import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useState } from 'react';
import { originSignup } from '@/api/user';

import { fetchcheckNickname, fetchcheckUserName } from '@/api/user';
import { useNavigate } from 'react-router-dom';

interface SignupType {
  id: string;
  password: string;
  birth_date: number;
  nickname: string;
  name: string;
  confirm_password: string;
  username: string;
  phone_number: string;
  email: string;
  address: string;
  postalCode: string;
  addressDetail?: string;
  agreeTerms: boolean;
  agreePrivacy: boolean;
}

const SignupPage = () => {
  const [isCheckId, setCheckId] = useState(false);
  const [isCheckNickname, setCheckNickname] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    resetField,
    watch,
    setValue,
  } = useForm<SignupType>();

  // 다음 주소찾기 API
  const openAddressPopup = useDaumPostcodePopup();

  const handleOpenSearchAddress = () => {
    openAddressPopup({ onComplete: handleComplete });
  };

  const handleComplete = (data: { zonecode: string; address: string }) => {
    setValue('postalCode', data.zonecode);
    setValue('address', data.address);
  };

  const usernameInput = watch('id');
  const nicknameInput = watch('nickname');

  const signupSubmit = async (formValues: SignupType) => {
    if (!isCheckId) {
      return Swal.fire({
        icon: 'error',
        title: '아이디 중복체크',
        text: '아이디 중복체크는 필수입니다!',
      });
    }
    if (!isCheckNickname) {
      return Swal.fire({
        icon: 'error',
        title: '닉네임 중복체크',
        text: '닉네임 중복체크는 필수입니다!',
      });
    }

    const payload = {
      username: formValues.id,
      email: formValues.email,
      password1: formValues.password,
      password2: formValues.confirm_password,
      name: formValues.name,
      phone_number: formValues.phone_number
        .replace(/[^0-9]/g, '')
        .replace(
          /(^02.{0}|^01.{1}|[0-9]{3,4})([0-9]{3,4})([0-9]{4})/g,
          '$1-$2-$3',
        ),
      address: formValues.address,
      nickname: formValues.nickname,
      date_of_birth: formValues.birth_date,
    };
    const res = await originSignup(payload);
    if (!res) {
      return Swal.fire({
        icon: 'error',
        title: '회원가입 오류',
        text: '회원가입 중 오류가 발생했습니다. 나중에 다시 시도해주세요!',
      });
    }
    resetField('id');
    resetField('email');
    resetField('password');
    resetField('confirm_password');
    resetField('name');
    resetField('phone_number');
    resetField('address');
    resetField('nickname');
    resetField('birth_date');
    navigate('/signin');
    return Swal.fire({
      icon: 'success',
      title: '회원가입 성공',
      text: '회원가입을 성공했습니다. 로그인을 해주세요!',
    });
  };

  const idRegister = register('id', {
    required: {
      value: true,
      message: '해당 칸이 빈칸입니다.',
    },
  });

  const passwordRegister = register('password', {
    required: {
      value: true,
      message: '해당 칸이 빈칸입니다.',
    },
    pattern: {
      value:
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{};:'"\\|,.<>\/?]).{8,16}$/,
      message:
        '8자 이상 16자 이하, 한 개 이상의 숫자/영어/특수문자를 포함해야 합니다.',
    },
  });

  const confirmPasswordRegister = register('confirm_password', {
    required: {
      value: true,
      message: '해당 칸이 빈칸입니다.',
    },
  });
  const birthDateRegister = register('birth_date', {
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

  const emailRegister = register('email', {
    required: {
      value: true,
      message: '해당 칸이 빈칸입니다.',
    },
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: '이메일 형식을 확인해주세요.',
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

  const agreeTermsRegister = register('agreeTerms', {
    required: {
      value: true,
      message: '이용약관을 체크해주세요.',
    },
  });

  const agreePrivacyRegister = register('agreePrivacy', {
    required: {
      value: true,
      message: '개인정보 수집 및 이용동의에 체크해주세요.',
    },
  });

  const checkId = async () => {
    if (isCheckId) return;
    if (!usernameInput) return;
    const res = await fetchcheckUserName(usernameInput);
    if (!res) {
      return Swal.fire({
        icon: 'error',
        title: '아이디 중복',
        text: '이미 사용중인 아이디입니다!',
      });
    }
    Swal.fire({
      icon: 'success',
      title: '아이디 사용가능',
      text: '사용가능한 아이디입니다!',
    });
    setCheckId(true);
  };

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

  return (
    <ContentLayout>
      <div className="">
        {/* 상위 타이틀 로고 부분 */}
        <div className="mt-16 flex w-full justify-center">
          <img
            src={logoTitle}
            alt="logo_title"
          />
        </div>

        {/* 회원가입 폼 */}
        <div className="mt-16 flex w-full justify-center">
          <div className="mb-32 h-[1550px] w-[800px] bg-mk-light">
            {/* 회원가입 텍스트 */}
            <div className="mt-10">
              <h2 className="text-center text-3xl font-bold text-mk-logo4">
                회원가입
              </h2>
            </div>
            {/* 회원가입 폼 */}
            <div className="flex justify-center">
              <form
                className="w-[500px]"
                onSubmit={handleSubmit(signupSubmit)}
              >
                <div className="my-6">
                  <h3 className="text-xl font-bold">기본정보</h3>
                </div>
                {/*  */}
                <div className="flex flex-col gap-y-7">
                  {/* id input */}
                  <div className="flex items-center justify-center">
                    <div className="mr-10 w-24 text-right">
                      <label
                        htmlFor="id"
                        className="text-sm"
                      >
                        아이디
                      </label>
                    </div>
                    <div className="relative flex-grow">
                      <ErrorMessage
                        errors={errors}
                        name="id"
                        render={({ message }) => (
                          <span className="absolute -bottom-6 pb-1 text-xs text-mk-gangwon">
                            {message}
                          </span>
                        )}
                      />
                      <input
                        id="id"
                        className="mr-5 h-10 w-52 rounded-md border-2 border-mk-newgrey px-3"
                        readOnly={isCheckId}
                        autoComplete="username"
                        {...idRegister}
                      />
                      <button
                        type="button"
                        className={`h-[30px] w-[70px] rounded-md bg-mk-logo3 text-xs text-white ${isCheckId ? 'bg-mk-newgrey' : 'bg-mk-logo3'}`}
                        onClick={() => checkId()}
                      >
                        중복확인
                      </button>
                    </div>
                  </div>

                  {/* password input */}
                  <div className="flex items-center justify-center">
                    <div className="mr-10 w-24 text-right">
                      <label
                        htmlFor="password"
                        className="text-sm"
                      >
                        비밀번호
                      </label>
                    </div>
                    <div className="relative flex-grow">
                      <ErrorMessage
                        errors={errors}
                        name="password"
                        render={({ message }) => (
                          <span className="absolute -bottom-6 pb-1 text-xs text-mk-gangwon">
                            {message}
                          </span>
                        )}
                      />
                      <input
                        id="password"
                        type="password"
                        className="h-10 w-full rounded-md border-2 border-mk-newgrey px-3"
                        autoComplete="new-password"
                        {...passwordRegister}
                      />
                    </div>
                  </div>

                  {/* confirm_password input */}
                  <div className="flex items-center justify-center">
                    <div className="mr-10 w-24 text-right">
                      <label
                        htmlFor="confirm_password"
                        className="text-sm"
                      >
                        비밀번호 확인
                      </label>
                    </div>
                    <div className="relative flex-grow">
                      <ErrorMessage
                        errors={errors}
                        name="confirm_password"
                        render={({ message }) => (
                          <span className="absolute -bottom-6 pb-1 text-xs text-mk-gangwon">
                            {message}
                          </span>
                        )}
                      />
                      <input
                        id="confirm_password"
                        type="password"
                        className="h-10 w-full rounded-md border-2 border-mk-newgrey px-3"
                        autoComplete="new-password"
                        {...confirmPasswordRegister}
                      />
                    </div>
                  </div>

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
                        htmlFor="birth_date"
                        className="text-sm"
                      >
                        생년월일
                      </label>
                    </div>
                    <div className="relative flex-grow">
                      <ErrorMessage
                        errors={errors}
                        name="birth_date"
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

                  {/* email input */}
                  <div className="flex items-center justify-center">
                    <div className="mr-10 w-24 text-right">
                      <label
                        htmlFor="email"
                        className="text-sm"
                      >
                        이메일
                      </label>
                    </div>
                    <div className="relative flex-grow">
                      <ErrorMessage
                        errors={errors}
                        name="email"
                        render={({ message }) => (
                          <span className="absolute -bottom-6 pb-1 text-xs text-mk-gangwon">
                            {message}
                          </span>
                        )}
                      />
                      <input
                        id="email"
                        type="email"
                        className="h-10 w-full rounded-md border-2 border-mk-newgrey px-3"
                        autoComplete="email"
                        {...emailRegister}
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

                  {/* 이용약관 */}
                  <div className="">
                    <h3 className="text-xl font-bold">이용약관 동의</h3>
                    <div className="mt-2 h-44 w-full overflow-y-scroll border-2 border-mk-newgrey px-5 py-5">
                      <span>
                        제 1 장 총칙
                        <br />제 1 조 (목적)
                        <br />본 약관은 아이고두야-마음끗 (이하 마음끗)이
                        제공하는 모든 서비스(이하 서비스)의 이용조건 및 절차,
                        이용자와 마음끗의 권리, 의무, 책임사항과 기타 제반
                        사항을 규정함을 목적으로 합니다. 제 2 조 (약관의 명시와
                        개정) 1. 누리집은 이 약관의 내용과 주소지, 관리자의
                        성명, 개인정보보호 담당자의 성명, 연락처(전화, 팩스,
                        전자우편 주소 등) 등을 이용자가 알 수 있도록 누리집의
                        초기 서비스화면(전면)에 게시합니다.
                      </span>
                    </div>
                    <div className="mt-2 flex items-center">
                      <input
                        id="agreeTerms"
                        type="checkbox"
                        className="mr-2 h-5 w-5"
                        {...agreeTermsRegister}
                      />
                      <label
                        htmlFor="agreeTerms"
                        className="text-lg"
                      >
                        이용약관에 동의합니다.
                      </label>
                    </div>
                    <ErrorMessage
                      errors={errors}
                      name="agreeTerms"
                      render={({ message }) => (
                        <span className="absolute pb-1 text-xs text-mk-gangwon">
                          {message}
                        </span>
                      )}
                    />
                  </div>
                  <div className="">
                    <h3 className="text-xl font-bold">
                      개인정보 수집 및 이용동의
                    </h3>
                    <div className="mt-2 h-44 w-full overflow-y-scroll border-2 border-mk-newgrey px-5 py-5">
                      <span>
                        제 1 장 총칙
                        <br />제 1 조 (목적)
                        <br />본 약관은 아이고두야-마음끗 (이하 마음끗)이
                        제공하는 모든 서비스(이하 서비스)의 이용조건 및 절차,
                        이용자와 마음끗의 권리, 의무, 책임사항과 기타 제반
                        사항을 규정함을 목적으로 합니다. 제 2 조 (약관의 명시와
                        개정) 1. 누리집은 이 약관의 내용과 주소지, 관리자의
                        성명, 개인정보보호 담당자의 성명, 연락처(전화, 팩스,
                        전자우편 주소 등) 등을 이용자가 알 수 있도록 누리집의
                        초기 서비스화면(전면)에 게시합니다.
                      </span>
                    </div>
                    <div className="mt-2 flex items-center">
                      <input
                        id="agreePrivacy"
                        type="checkbox"
                        className="mr-2 h-5 w-5"
                        {...agreePrivacyRegister}
                      />
                      <label
                        htmlFor="agreePrivacy"
                        className="text-lg"
                      >
                        이용약관에 동의합니다.
                      </label>
                    </div>
                    <ErrorMessage
                      errors={errors}
                      name="agreePrivacy"
                      render={({ message }) => (
                        <span className="absolute pb-1 text-xs text-mk-gangwon">
                          {message}
                        </span>
                      )}
                    />
                  </div>
                </div>

                <div className="my-6 flex justify-between">
                  <button
                    className="h-14 w-56 rounded-lg bg-mk-grey2 text-white"
                    type="button"
                  >
                    뒤로가기
                  </button>
                  <button className="h-14 w-56 rounded-lg bg-mk-logo3 text-white">
                    회원가입
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
};

export default SignupPage;

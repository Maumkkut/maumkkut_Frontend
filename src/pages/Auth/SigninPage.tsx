import bgImage from '@assets/images/signin/signin_image.svg';
import googleSI from '@assets/images/signin/google_SI.svg';
import logoTitle from '@assets/images/logo/logo_title.svg';

import ContentLayout from '@/layout/ContentLayout';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { NavLink } from 'react-router-dom';
import { useUserSignin, useUserInfo } from '@/hooks/queries/user';
// import { socialLogin } from '@/api/user';

interface LoginType {
  id: string;
  password: string;
}

const SigninPage = () => {
  const { mutateAsync: signinMutate } = useUserSignin();
  const { refetch } = useUserInfo();

  const {
    register,
    formState: { errors },
    handleSubmit,
    // resetField,
  } = useForm<LoginType>();

  const signinSubmit = async (formValues: LoginType) => {
    const payload = {
      username: formValues.id,
      password: formValues.password,
    };

    await signinMutate(payload);
    refetch();
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
  });

  return (
    <ContentLayout>
      <div className="mt-8 flex w-full justify-center">
        <img
          src={logoTitle}
          alt="logo_title"
        />
      </div>
      <div className="mb-20 mt-10 flex justify-around">
        <div className="flex items-center">
          <img
            src={bgImage}
            alt="signin background"
          />
        </div>
        <div className="right-0 h-[850px] w-[640px]">
          {/* 로그인 타이틀 */}
          <div className="flex justify-center">
            <h2 className="text-2xl font-bold text-mk-logo4">회원 로그인</h2>
          </div>

          {/* 로그인 폼 */}
          <div className="flex justify-center">
            <div className="h-[600px] w-[530px]">
              <form
                className="mt-10 flex flex-col gap-y-10"
                onSubmit={handleSubmit(signinSubmit)}
              >
                <div className="relative flex flex-col">
                  <label
                    className="mb-2 text-mk-grey3"
                    htmlFor="id"
                  >
                    아이디
                  </label>
                  <input
                    id="id"
                    type="text"
                    className="h-14 rounded-md bg-mk-light px-5"
                    placeholder="아이디를 입력하세요"
                    autoComplete="username"
                    {...idRegister}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="id"
                    render={({ message }) => (
                      <span className="absolute -bottom-7 text-sm text-mk-gangwon">
                        {message}
                      </span>
                    )}
                  />
                </div>
                <div className="relative flex flex-col">
                  <label
                    className="mb-2 text-mk-grey3"
                    htmlFor="password"
                  >
                    비밀번호
                  </label>
                  <input
                    id="password"
                    type="password"
                    className="h-14 rounded-md bg-mk-light px-5"
                    placeholder="비밀번호를 입력하세요"
                    autoComplete="new-password"
                    {...passwordRegister}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="password"
                    render={({ message }) => (
                      <span className="absolute -bottom-7 text-sm text-mk-gangwon">
                        {message}
                      </span>
                    )}
                  />
                </div>

                <button className="h-16 rounded-md bg-mk-logo3 text-white">
                  로그인
                </button>
              </form>
              {/* 로그인 옵션 */}
              {/* <div className="my-10 flex justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="saveId"
                    className="mr-2 h-5 w-5"
                  />
                  <label
                    htmlFor="saveId"
                    className="text-mk-logo4"
                  >
                    아이디 저장
                  </label>
                </div> */}
              {/* 추후 아이디&비밀번호 찾기 페이지 navlink */}
              {/* <div>
                  <span className="text-mk-gangwon underline">아이디 찾기</span>
                  <span className="ml-6 text-mk-gangwon underline">
                    비밀번호 찾기
                  </span>
                </div>
              </div> */}
              {/* 소셜로그인  */}
              <div className="mt-10 flex flex-col items-center">
                <h3 className="text-lg text-mk-grey3">소셜 로그인</h3>
                <button
                  className="mt-7 cursor-pointer"
                  // onClick={() => socialLogin()}
                  onClick={() => {
                    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${import.meta.env.VITE_GOOGLE_CLIENT_ID}&redirect_uri=${import.meta.env.VITE_GOOGLE_REDIRECT_URL}&response_type=code&scope=email profile&access_type=offline`;
                  }}
                >
                  <img
                    src={googleSI}
                    alt="google signin"
                  />
                </button>
              </div>
            </div>
          </div>
          {/* 회원가입 유도 */}
          <div className="flex items-center justify-between">
            <div className="h-[2px] w-[185px] bg-mk-grey3 opacity-25"></div>
            <h2 className="text-xl text-mk-grey3">마음끗 회원이 아니신가요?</h2>
            <div className="h-[2px] w-[185px] bg-mk-grey3 opacity-25"></div>
          </div>
          <div className="mb-7 mt-9">
            <h3 className="text-center text-xl text-mk-grey2">
              회원가입을 하시면 더욱 다양하고 특별한 혜택이 준비되어 있습니다.
            </h3>
          </div>
          <div className="flex justify-center">
            <NavLink
              to={'/signup'}
              className="flex h-[66px] w-[530px] items-center justify-center rounded-md bg-mk-logo3 text-xl font-semibold text-white"
            >
              <span>계정 생성하기</span>
            </NavLink>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
};

export default SigninPage;

/* eslint-disable no-useless-escape */

import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { updatePassword } from '@/api/profile';
import { TEditPassword } from '@/types/profile';

export default function EditProfile() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    resetField,
    setError,
    clearErrors,
    // resetField,
  } = useForm<TEditPassword>();

  const editPasswordSubmit = async (formValues: TEditPassword) => {
    const payload = {
      new_password1: formValues.new_password1,
      new_password2: formValues.new_password2,
    };

    try {
      await updatePassword(payload);

      resetField('new_password1');
      resetField('new_password2');
      Swal.fire({
        icon: 'success',
        title: '비밀번호 수정 성공',
        text: '비밀번호 수정이 완료되었습니다!',
      });
    } catch {
      setError('submitError', {
        type: 'manual',
        message: '비밀번호가 서로 일치하지 않습니다.',
      });
    }
  };

  const passwordRegister = register('new_password1', {
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

  const confirmPasswordRegister = register('new_password2', {
    required: {
      value: true,
      message: '해당 칸이 빈칸입니다.',
    },
  });

  return (
    <div className="flex justify-center">
      <form
        className="flex w-[500px] flex-col gap-y-10 text-sm"
        onSubmit={handleSubmit(editPasswordSubmit)}
      >
        <div className="t border-b px-5 py-10 text-center">
          <h1 className="text-3xl font-bold text-mk-logo4">회원정보 수정</h1>
        </div>

        {/* 비밀번호 수정 */}
        <h2>비밀번호</h2>
        <div className="flex flex-col gap-y-2">
          <div className="flex items-center gap-x-10">
            <label
              htmlFor="new_password1"
              className="flex w-24 justify-end"
            >
              새 비밀번호
            </label>
            <div className="flex grow flex-col gap-y-2">
              <input
                id="new_password1"
                className="h-10 rounded-md border border-mk-grey2 bg-[#F9F9F9] px-2"
                type="password"
                {...passwordRegister}
              />
              <ErrorMessage
                className="text-mk-gangwon"
                errors={errors}
                name="new_password1"
                as="p"
              />
            </div>
          </div>
          <div className="flex items-center gap-x-10">
            <label
              htmlFor="new_password2"
              className="flex w-24 justify-end"
            >
              비밀번호 확인
            </label>
            <div className="flex grow flex-col gap-y-2">
              <input
                id="new_password2"
                className="h-10 rounded-md border border-mk-grey2 bg-[#F9F9F9] px-2"
                type="password"
                {...confirmPasswordRegister}
              />
              <ErrorMessage
                className="text-mk-gangwon"
                errors={errors}
                name="new_password2"
                as="p"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <ErrorMessage
            className="text-mk-gangwon"
            errors={errors}
            name="submitError"
            as="p"
          />
        </div>
        <div className="flex justify-center">
          <button
            className="h-10 w-[130px] rounded-lg border border-mk-newgrey p-2"
            onClick={() => clearErrors('submitError')}
          >
            <span className="text-mk-darkgray">비밀번호 저장</span>
          </button>
        </div>
      </form>
    </div>
  );
}

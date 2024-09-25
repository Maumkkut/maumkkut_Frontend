import { searchUser } from '@/api/group';
import { ChangeEvent, useState } from 'react';

type TSearchMateProps = {
  setTripMateList: React.Dispatch<React.SetStateAction<number[]>>;
};

export default function SearchMate({ setTripMateList }: TSearchMateProps) {
  const [tripMate, setTripMate] = useState<string>('');
  const [isDisabled, setDisabled] = useState<boolean>(false);
  const [, setTripMateId] = useState(-1);

  const handleSearchMate = async () => {
    const res = await searchUser(tripMate);

    if (res) {
      setDisabled(true);
      setTripMateId(res);
      setTripMateList((prevList) => [...prevList, res]);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTripMate(e.target.value);
  };

  return (
    <div className="flex h-[40px] items-center gap-x-5">
      <span>아이디</span>
      <div className="flex h-full w-[410px] items-center justify-between">
        <input
          type="text"
          value={tripMate}
          onChange={(e) => handleChange(e)}
          className={`h-full w-[320px] rounded-md border border-black px-3 ${isDisabled && `border-mk-newgrey bg-mk-newgrey`}`}
          disabled={isDisabled}
        />
        <button
          type="button"
          className="te h-[40px] w-[70px] rounded-lg bg-mk-logo3 text-xs font-light text-white"
          onClick={() => handleSearchMate()}
        >
          검색
        </button>
      </div>
    </div>
  );
}

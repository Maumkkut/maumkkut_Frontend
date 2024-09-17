export default function SearchMate() {
  return (
    <div className="flex h-[40px] items-center gap-x-5">
      <span>아이디</span>
      <div className="flex h-full w-[410px] items-center justify-between">
        <input
          type="text"
          className="h-full w-[320px] rounded-md border border-black"
        />
        <button className="te h-[40px] w-[70px] rounded-lg bg-mk-logo3 text-xs font-light text-white">
          검색
        </button>
      </div>
    </div>
  );
}

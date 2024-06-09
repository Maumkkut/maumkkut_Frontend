import ContentLayout from '@layout/ContentLayout';

const Footer = () => {
  return (
    <div className="h-[250px] bg-mk-light">
      <ContentLayout>
        <div className="ml-[65px] flex h-full items-center text-[#A8A8A8]">
          <div className="flex">
            {/* left info */}
            <div className="flex h-[160px] flex-col justify-between">
              <div>
                <span className="font-tantan text-xl text-mk-logo4">
                  IGODOYA!
                </span>
              </div>
              <div className="flex flex-col py-2 text-[12px]">
                <span className="pb-2">Copyright &copy IGODOYA</span>
                <span>All rights reserved.</span>
              </div>
              {/* 추후 링크 추가 */}
              <div className="text-[10px] text-black">
                <span>이용약관 | 개인정보처리방침 | 고객지원 | 1:1 문의</span>
              </div>
            </div>

            {/* right info */}
            <div className="ml-[100px]">
              <div className="flex flex-col text-[10px]">
                <span className="pb-1">About us</span>
                <span className="pb-1">Notion</span>
                <span className="pb-1">Contact us</span>
              </div>
            </div>
          </div>
        </div>
      </ContentLayout>
    </div>
  );
};

export default Footer;

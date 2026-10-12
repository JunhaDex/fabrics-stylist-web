import { Google_Sans } from "next/font/google";
import Image from "next/image";

const googleSans = Google_Sans({ weight: "500", subsets: ["latin"] });

// 크기·모서리·아이콘 위치는 모든 버튼이 공유한다. 아이콘은 Apple 로고 파일 폭(31px) 슬롯의 중앙에 둔다.
const base =
  "relative flex h-11 w-full items-center justify-center rounded-[12px] font-medium";
const slot =
  "absolute inset-y-0 left-3 flex w-[31px] items-center justify-center";

// 색상·글꼴·문구는 제공자별 공식 가이드 값이다. 인증 전이라 동작은 없다.
export function SocialButtons() {
  return (
    <div className="flex w-full flex-col gap-3">
      {/* Kakao: #FEE500, 심볼 #191919, 레이블 #000 85%, radius 12px */}
      <button
        type="button"
        className={`${base} bg-[#FEE500] text-base text-black/85`}
      >
        <span className={slot}>
          <Image src="/social/kakao-symbol.svg" alt="" width={18} height={17} />
        </span>
        카카오 로그인
      </button>
      {/* Naver: #03A94D, 흰색 N 16px */}
      <button
        type="button"
        className={`${base} bg-[#03A94D] text-base text-white`}
      >
        <span className={slot}>
          <Image
            src="/social/naver-n-white.svg"
            alt=""
            width={16}
            height={16}
          />
        </span>
        네이버 로그인
      </button>
      {/* Apple: light는 black, dark는 white. 로고 높이 = 버튼 높이, 글자 = 높이의 43%(19px) */}
      <button
        type="button"
        className={`${base} bg-black font-[family-name:-apple-system,system-ui,sans-serif] text-[19px] text-white dark:bg-white dark:text-black`}
      >
        <span className={slot}>
          <Image
            src="/social/apple-white-md.svg"
            alt=""
            width={31}
            height={44}
            className="dark:hidden"
          />
          <Image
            src="/social/apple-black-md.svg"
            alt=""
            width={31}
            height={44}
            className="hidden dark:block"
          />
        </span>
        Apple로 로그인
      </button>
      {/* Google: light #FFF/#747775/#1F1F1F, dark #131314/#8E918F/#E3E3E3, Google Sans Medium 14/20 */}
      <button
        type="button"
        className={`${base} ${googleSans.className} ring-1 ring-[#747775] ring-inset bg-white text-sm/5 text-[#1F1F1F] dark:ring-[#8E918F] dark:bg-[#131314] dark:text-[#E3E3E3]`}
      >
        <span className={slot}>
          <Image src="/social/google-g.svg" alt="" width={20} height={20} />
        </span>
        Google 계정으로 로그인
      </button>
    </div>
  );
}

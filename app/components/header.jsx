import Image from "next/image";
import Link from "next/link";

export default function Header(){
    return(
        <header className="flex items-center justify-between h-24 bg-white border-b px-11">
          <h1 className="text-2xl">
            <Link href={"/"} className="font-bold font-NanumSquareRound">디디다: 충청남도 청소년시설자원맵</Link>
          </h1>
          <Image src={'/cn-brand-logo.svg'} width={214} height={48} alt="청소년활동진흥원 브랜드이미지"></Image>
        </header>
    )
}
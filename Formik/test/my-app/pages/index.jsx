import Link from "next/link";

export default function Home() {
  return (
    <div className="flex w-full h-[100vh] justify-center items-center bg-[gray] ">
      <Link href="staticForm">
        <button className="bg-[white] p-[5px] rounded-[8px]">StaticFrom</button>
      </Link>
    </div>
  );
}

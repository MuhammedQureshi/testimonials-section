import Image from "next/image";
import ReviewArticle from "./components/ReviewArticle";

export default function Home() {

  const svg = <Image src={"/Done_ring_round_fill.svg"} alt={""} width={25} height={50} className="mr-2"/>;
  
  return (
    <main className="flex min-h-screen items-center justify-center p-10 text-black">
      <div className="container lg:flex md:grid-cols-2 gap-[32px] sm:h-fit h-screen items-center">
        <section className="lg:w-1/2">
        <div className="">
            <p className="info__logo">⭐</p>
            <h1 className="text-[36px] font-semibold mt-3">Reviewers</h1>
            <p className="text-[20px] mt-4 md:mr-20">
              Reviewers is where people can access guidelines, checklists, and
              other tools to assist them in reviewing papers or manuscripts. It
              provides a structured approach to ensure that the review process
              is thorough, efficient, and consistent.
            </p>
            <ul className="mt-6 text-[14px]">
              <li className="flex items-center"> {svg} Checklist to Review an Academic Paper</li>
              <li className="flex items-center">{svg} Peer Review Checklist</li>
              <li className="flex items-center">
                {svg}
                Checklist for Editors, Reviewers, and Authors of SPIE Journals
              </li>
            </ul>
          </div>
        </section>
        <section className=" lg:w-1/2 pb-10">
          <ReviewArticle />
        </section>
      </div>
    </main>
  );
}

import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black text-white text-2xl w-screen h-screen flex justify-center items-center gap-6">
      <Image
        src={"/images/jmb-logo.png"}
        alt={"JMB logo"}
        width={42}
        height={42}
      />{" "}
      <h1 className="font-extrabold">Jai Maa Bhawani Dal Bati Churma</h1>
    </main>
  );
}

import Image from "next/image";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <div className="flex min-h-screen w-1/2 bg-primary text-primary-foreground">
        <div className="flex items-start justify-start w-full pl-8 pt-8">
          <Image alt="Fitmate Logo" height={100} width={100} src="/fit.png" />
        </div>
      </div>
      <div className="min-h-screen flex items-center justify-center w-1/2 ">
        {children}
      </div>
    </div>
  );
}

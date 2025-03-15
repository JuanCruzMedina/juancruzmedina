import { Image } from "@heroui/image";

export const ProfileImage = () => {
  // TODO: hacer imagen reponsive
  return (
    <div className="col-span-1 flex relative overflow-visible">
      <div className="flex flex-col w-[350px] h-[350px] justify-center items-center overflow-visible relative">
        <div className="overflow-visible relative">
          <Image
            alt="Juan Cruz Photo"
            className="
              transition-transform duration-300 ease-in-out
              hover:scale-110
              object-contain
              relative
            "
            height={340}
            src="foto-con-indio.png"
            width={340}
          />
        </div>
      </div>
    </div>
  );
};

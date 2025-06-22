import { Text, Heading, Avatar, AvatarGroup } from "@chakra-ui/react";
// import Waves from "../Animations/Waves/Waves.jsx";

export default function Banner({ title, subtitle }) {
  return (
    <div className="hidden lg:flex  items-center justify-center p-12 bg-[#202020] rounded-lg ">
      <div className="max-w-md text-center ">
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-2xl bg-[#474747] ${
                i % 2 === 0 ? "animate-pulse" : ""
              }`}
            />
          ))}
        </div>

        <Heading fontSize="2xl" fontWeight="bold" color="#F5E8D8" mb={"10px"}>
          {title}
        </Heading>

        <Text color="#F5E8D8" opacity={0.6} mb={"10px"}>
          {subtitle}
        </Text>

        <AvatarGroup size="md" max={4} justifyContent={"center"}>
          <Avatar
            name="Uchiha Sasuke"
            src="https://cdn.myanimelist.net/r/84x124/images/characters/9/131317.webp?s=d4b03c7291407bde303bc0758047f6bd"
          />
          <Avatar
            name="Baki Ani"
            src="https://cdn.myanimelist.net/r/84x124/images/characters/7/284129.webp?s=a8998bf668767de58b33740886ca571c"
          />
          <Avatar
            name="Uchiha Chan"
            src="https://cdn.myanimelist.net/r/84x124/images/characters/9/105421.webp?s=269ff1b2bb9abe3ac1bc443d3a76e863"
          />
          <Avatar name="+3" />
        </AvatarGroup>
      </div>

      {/* 
      <Waves
        lineColor="#FF4500"
        backgroundColor="#1C1C1C"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
      /> */}
    </div>
  );
}

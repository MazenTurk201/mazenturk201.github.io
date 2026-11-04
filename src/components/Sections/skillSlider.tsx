"use client";
import Skill from "@/components/Widgets/skillWidgets";
import { skills } from "@/components/Data/globalData";

import {
  CarouselCounter,
  CarouselDots,
} from '@animate-ui/react/primitives/carousel';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function SkillSlider() {
  return (
    <div className="w-full py-4">
      <Carousel opts={{ loop: true, align: 'center' }} className="w-full">
        <CarouselContent className="-ml-1">
          {skills.map((skillInfo, index) => (
            <CarouselItem key={index} className="pl-1 md:basis-1/2 flex items-center justify-center pt-10 pb-10">
              <Skill
                title={skillInfo.title}
                tags={skillInfo.tags}
                icon={skillInfo.icon}
                percent={skillInfo.percent}
                color={skillInfo.color}
                ImgStyle={skillInfo.ImgStyle}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        <CarouselDots />
        <CarouselCounter />
      </Carousel>
    </div>
  );
}
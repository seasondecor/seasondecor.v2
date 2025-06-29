"use client";

import { Box, Image, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import type { Swiper as SwiperClass } from "swiper";

export function ImageGallery({ images }: { images: string[] }) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Stack
      width="full"
      gap={4}
      maxW={{ base: "93vw", md: "93vw", lg: "35vw" }}
      h={{ base: "60vh", md: "65vh" }}
    >
      {/* Main Swiper */}
      <Box borderRadius="xl" overflow="hidden" borderWidth="1px">
        <Swiper
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Navigation, Thumbs]}
          style={{ width: "100%", height: "100%" }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <Image
                src={img}
                alt={`Image ${i + 1}`}
                w="full"
                h="full"
                objectFit="fill"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* Thumbnail Swiper */}
      <Box maxW={{ base: "93vw", md: "93vw", lg: "35vw" }}>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          watchSlidesProgress
          modules={[Thumbs]}
          style={{ width: "100%", height: "auto" }}
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <Box
                borderWidth="2px"
                borderColor={activeIndex === i ? "blue.500" : "gray.200"}
                borderRadius="md"
                overflow="hidden"
                cursor="pointer"
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${i + 1}`}
                  w="100%"
                  h="100px"
                  objectFit="fill"
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Stack>
  );
}

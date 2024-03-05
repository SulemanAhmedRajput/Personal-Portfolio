import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Template from "./Template";
import Image from "next/image";

export default function Testimonial() {
  const testimonialData = [
    {
      id: 1,
      name: "John Doe",
      comment:
        "Amazing work! I&quot;m really impressed with the quality and attention to detail.",
      timestamp: "2024-02-24T08:30:00Z",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Alice Smith",
      comment: "Absolutely fantastic! Your work exceeded my expectations.",
      timestamp: "2024-02-23T15:45:00Z",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Michael Johnson",
      comment:
        "Great job! I&quot;m impressed with the professionalism and creativity.",
      timestamp: "2024-02-22T10:20:00Z",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Emily Brown",
      comment: "Wonderful experience working with you. Highly recommend!",
      timestamp: "2024-02-21T13:55:00Z",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      name: "David Wilson",
      comment: "Excellent service! Quick turnaround and exceptional results.",
      timestamp: "2024-02-20T11:10:00Z",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      name: "Sarah Thompson",
      comment:
        "Impressive work! Will definitely work with you again in the future.",
      timestamp: "2024-02-19T14:25:00Z",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <Template heading={`Testimonial`} id={"testimonail"}>
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full max-w-lg mx-auto max-sm:max-w-sm max-xs:max-w-xs"
      >
        <CarouselContent>
          {testimonialData.map((testimonial, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className={`bg-background/60`}>
                  <div key={testimonial.id} className="testimonial">
                    <CardHeader className={`relative`}>
                      <span className="absolute right-3 top-3 text-xs">
                        {index + 1}/{testimonialData.length}
                      </span>
                      <Card className="h-[150]  rounded-lg p-3 overflow-hidden mx-auto ">
                        <Image
                          src={`https://placehold.com/600x400`}
                          alt="avatar"
                          className="w-28 h-28"
                        />
                      </Card>
                    </CardHeader>
                    <CardContent
                      className={`mt-3 text-sm flex gap-3 flex-col justify-center`}
                    >
                      <div className="flex justify-between ">
                        <span className="flex gap-2 items-center font-bold text-lg">
                          {testimonial.name}
                        </span>
                        <Card className="px-6 py-2 text-xs">
                          {new Date(testimonial.timestamp).toLocaleDateString()}
                        </Card>
                      </div>
                      <p className="text-foreground/60">
                        "{testimonial.comment}"
                      </p>
                    </CardContent>
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Template>
  );
}

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
        "Amazing work! I'm really impressed with the quality and attention to detail.",
      timestamp: "2024-02-24T08:30:00Z",
    },
    {
      id: 2,
      name: "Alice Smith",
      comment: "Absolutely fantastic! Your work exceeded my expectations.",
      timestamp: "2024-02-23T15:45:00Z",
    },
    {
      id: 3,
      name: "Michael Johnson",
      comment:
        "Great job! I'm impressed with the professionalism and creativity.",
      timestamp: "2024-02-22T10:20:00Z",
    },
    {
      id: 4,
      name: "Emily Brown",
      comment: "Wonderful experience working with you. Highly recommend!",
      timestamp: "2024-02-21T13:55:00Z",
    },
    {
      id: 5,
      name: "David Wilson",
      comment: "Excellent service! Quick turnaround and exceptional results.",
      timestamp: "2024-02-20T11:10:00Z",
    },
    {
      id: 6,
      name: "Sarah Thompson",
      comment:
        "Impressive work! Will definitely work with you again in the future.",
      timestamp: "2024-02-19T14:25:00Z",
    },
    {
      id: 7,
      name: "Sophia Rodriguez",
      comment:
        "I'm blown away by your creativity! The design is exactly what I envisioned.",
      timestamp: "2024-02-18T09:30:00Z",
    },
    {
      id: 8,
      name: "Daniel Lee",
      comment:
        "Your attention to detail is unmatched! The final product exceeded my expectations.",
      timestamp: "2024-02-17T12:15:00Z",
    },
    {
      id: 9,
      name: "Emma Garcia",
      comment:
        "Thank you for your professionalism and timely delivery! Highly recommended.",
      timestamp: "2024-02-16T14:45:00Z",
    },
    {
      id: 10,
      name: "William Martinez",
      comment:
        "Your work speaks volumes! I'm impressed with the results and will definitely be a returning customer.",
      timestamp: "2024-02-15T11:20:00Z",
    },
  ];

  return (
    <Template heading={`Testimonial`} id={"testimonail"}>
      <div className="mx-auto">
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="relative mx-auto max-w-lg w-full max-md:max-w-xs mmax-md:max-w-[80"
        >
          <CarouselContent className={`-ml-4`}>
            {testimonialData.map((testimonial, index) => (
              <CarouselItem key={testimonial.id} className={`pl-4`}>
                <Card className="bg-background/60 w-11/12 mx-auto">
                  <CardHeader>
                    <span className="text-xs">
                      {index + 1}/{testimonialData.length}
                    </span>
                    <div className="w-28 h-28 overflow-hidden rounded-full mx-auto">
                      <Image
                        src={`https://api.dicebear.com/7.x/bottts/svg?seed=${testimonial.name}`}
                        width={150}
                        height={150}
                        alt="avatar"
                        className="object-cover"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="mt-3 text-sm flex flex-col justify-center items-center">
                    <div className="flex justify-between w-full items-center">
                      <span className="font-bold text-lg line-clamp-1">
                        {testimonial.name}
                      </span>
                      <Card className="px-6 py-2 text-xs">
                        {new Date(testimonial.timestamp).toLocaleDateString()}
                      </Card>
                    </div>
                    <p className="text-foreground/60 text-center">
                      "{testimonial.comment}"
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className={`max-xs:absolute z-50 max-md:left-5 left-10`}
          />
          <CarouselNext className={`max-xs:absolute max-md:right-5 right-10`} />
        </Carousel>
      </div>
    </Template>
  );
}

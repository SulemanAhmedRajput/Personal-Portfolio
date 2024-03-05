"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import portfolioImage from "@/public/image.png";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import Template from "./Template";
import { FullscreenIcon } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const Project = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const projects = [
    {
      id: 1,
      title: "ConnectU (Social-Media-Application) ",
      description: `
      ConnectU a social media application designed for secure and seamless user interaction. Explore a platform that prioritizes simplicity and connection.
      
      Key Feature:
      User Registration:
      Hashed passwords during user registration for enhanced security.
      Utilized JSON Web Token (JWT) for authentication.
      Email Verification:
      Implemented email verification process through a "Verify" button sent to the user's email.
      Protected Routes:
      Created protected routes to ensure users cannot access certain pages without authentication.
      React Router Navigation:
      Integrated react-router-dom for smooth navigation between different pages within the application.
      Conditional Form Handling:
      Implemented conditional form handling to enhance the user experience during data input.
      Profile Updates:
      Users can update profile details, including profile and background URLs, profession, address, and social media links.
      Post Creation and Deletion:
      Users can create text, emoji, and image posts.
      Implemented the ability for users to delete their own posts.
      Likes and Comments:
      Users can like and comment on posts, fostering engagement within the community.
      Friendship Features:
      Enabled friend requests between users.
      Users can accept or deny friend requests, managing their friends list.
      Suggested Friends:
      Implemented a suggested friends feature based on users who haven't been added as friends.
      Profile Viewing:
      Users can view others' profiles, including posts and details.
      Single Post Viewing:
      Implemented a feature allowing users to view a single post in detail.
      Password Change Request:
      Users can request a password change, receiving an email with instructions.
      Implemented a page for users to change their password securely.
      
      Github Repository
      User: suleman15
      Project Link:   https://github.com/suleman15/mern-47-project
      
      Project Loom Vedio Link
      Part-1: https://www.loom.com/share/999c0689be9b4e6daa8dbfa9a32a43da?sid=fc7f8caa-a20f-4b18-93f1-b27c7a1b3ef3
      Part-2: 
      https://www.loom.com/share/8f076c7ef95642e7b5b1cf9b4de06254?sid=eda7fe6f-a5fb-4f57-81c3-a85e9210d5ef
      `,
      imageUrl: "/images/project1.jpg",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      githubUrl: "https://github.com/username/project1",
      demoUrl: "https://demo.project1.com",
    },
    {
      id: 2,
      title: "Project 2",
      description: "Description of Project 2",
      imageUrl: "/images/project2.jpg",
      technologies: ["Vue.js", "Express.js", "MongoDB"],
      githubUrl: "https://github.com/username/project2",
      demoUrl: "https://demo.project2.com",
    },
  ];

  // Filter projects based on search query
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Template heading={`Project`} id={"project"}>
      <div className="flex gap-3 flex-col p-5">
        <div className="flex justify-end">
          <Input
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects"
          />
        </div>
        {searchQuery !== ""
          ? // Display filtered projects if search query is not empty
            filteredProjects.map((project, index) => (
              <div
                key={index}
                className="relative flex items-stretch max-md:flex-col max-md:gap-2 "
              >
                <Card className="w-3/5  border z-10 bg-background/50 shadow-2xl   gap-3 max-md:w-full ">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className={`line-clamp-5`}>{project.description}</div>
                  </CardContent>
                  <CardFooter>
                    <div className="flex gap-3 flex-wrap text-xs ">
                      {project?.technologies.map((tech, techindex) => (
                        <div
                          className="px-4 py-2 border border-foreground rounded-full"
                          key={techindex}
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </CardFooter>
                </Card>
                <ScrollArea className="my-auto max-md:w-full max-md:hover:scale-105 h-[300px] md:hover:scale-110 max-md:mt-[-10%] bg-white hover:shadow-2xl w-3/4 md:ml-[-30%] hover:z-20 rounded-md border p-4">
                  <Image
                    className="w-full"
                    src={portfolioImage}
                    width={500}
                    height={500}
                  />
                </ScrollArea>
              </div>
            ))
          : // Display all projects if search query is empty
            projects.map((project, index) => (
              <div
                key={index}
                className="relative flex items-stretch max-md:flex-col max-md:gap-2 "
              >
                <Card className="w-3/5 border z-10 bg-background/70 shadow-2xl   gap-3 max-md:w-full ">
                  <CardHeader className={`relative`}>
                    <Card className="absolute right-2 p-3 rounded-full cursor-pointer hover:bg-primary hover:text-secondary">
                      <FullscreenIcon />
                    </Card>

                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className={`line-clamp-6`}>{project.description}</div>
                  </CardContent>
                  <CardFooter>
                    <div className="flex gap-3 flex-wrap text-xs ">
                      {project?.technologies.map((tech, techindex) => (
                        <Card key={techindex} className={`px-3 py-2`}>
                          {tech}
                        </Card>
                      ))}
                    </div>
                  </CardFooter>
                </Card>
                <div className="w-3/5  max-md:w-full -ml-[200px] hover:scale-110  hover:z-50  ">
                  <Carousel className=" w-[80%] mx-auto ">
                    <CarouselContent>
                      {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                          <div className="p-1">
                            <ScrollArea className={`h-[300px]`}>
                              <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                  <span className="">
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Quam, ratione harum culpa
                                    itaque illo ullam laboriosam dolore nam sed
                                    delectus non, consectetur magnam ea est
                                    veniam quis. Odit modi dolores natus qui
                                    excepturi iure nisi, quidem at enim quae
                                    sint aut, mollitia eveniet numquam
                                    asperiores assumenda laborum voluptate
                                    quaerat itaque. Dolores ex quam in modi. Id
                                    quis harum ratione assumenda at porro est
                                    modi voluptatem voluptatum itaque earum,
                                    doloremque aut consectetur sed eum iusto
                                    nemo, animi in. Laborum exercitationem
                                    sapiente sint animi, possimus distinctio
                                    quibusdam. Nulla obcaecati, quos excepturi
                                    inventore aliquam autem ut, ipsa ex deserunt
                                    ab dolor laudantium nam vel amet non!
                                    Mollitia hic minus architecto? A provident
                                    quam modi amet aut? Mollitia eius magnam in,
                                    aliquam, vitae soluta tempore maxime eaque
                                    inventore, labore iste sed nesciunt commodi
                                    vero quo voluptatem earum ipsam incidunt.
                                    Commodi tempora eius asperiores modi dolorem
                                    voluptates nulla nisi, quidem, officiis
                                    delectus ratione iste consequuntur facilis!
                                    Ipsum sit sequi id dignissimos impedit,
                                    recusandae laboriosam dolor culpa ea
                                    doloremque, a rem error iusto eligendi
                                    sapiente et, rerum fugiat soluta cupiditate
                                    possimus hic odio provident? Ab magnam
                                    blanditiis nihil odio! Consequuntur illo,
                                    incidunt beatae iusto dolor cupiditate
                                    ipsum, autem quos nam, error dolorem
                                    tempora? Molestias recusandae doloremque,
                                    iusto eius doloribus nulla temporibus nam
                                    cum, alias delectus laborum dolore voluptate
                                    ut aperiam quod, at porro eum maiores fugit
                                    sit ea? Dolor iusto culpa odio nobis quia,
                                    est tenetur, provident perspiciatis officiis
                                    laboriosam tempore? Quia, blanditiis
                                    recusandae ratione officiis consequatur
                                    delectus sunt fugiat quaerat quis facere
                                    repudiandae voluptates aut hic! Ratione,
                                    quis magni maiores mollitia deserunt fugit
                                    eaque officia eveniet velit molestiae
                                    adipisci expedita aut? Quaerat, at omnis.
                                    Alias, architecto neque assumenda fugiat cum
                                    recusandae esse nisi possimus ab porro,
                                    similique error praesentium. Odio illum
                                    dignissimos officiis temporibus dolore totam
                                    optio. Distinctio natus quam nulla ipsum hic
                                    veritatis quidem praesentium, laborum magnam
                                    quod, ex repudiandae perferendis?
                                    Consequatur rerum, praesentium repudiandae
                                    dicta iusto soluta maiores, unde repellat
                                    dolore explicabo earum eligendi facere illo.
                                    Obcaecati temporibus accusantium unde optio
                                    explicabo. Sit repellendus perferendis
                                    voluptates optio voluptate. Suscipit, optio
                                    numquam! Assumenda corrupti maiores quod sed
                                    natus aliquam ducimus, asperiores ad tempore
                                    cupiditate, eveniet repellat voluptates quo,
                                    eos consequuntur quasi libero. Repudiandae
                                    totam minus qui magni reiciendis quibusdam
                                    ab nisi? Odit commodi facere reprehenderit,
                                    accusamus voluptatibus, quasi autem at minus
                                    aperiam sapiente labore temporibus
                                    laboriosam in fugit? Tempore nam quae
                                    repudiandae, ea suscipit magnam quis
                                    corporis molestiae temporibus reiciendis at
                                    vero, delectus natus dolores nulla
                                    voluptates repellendus minus pariatur
                                    excepturi eius quo, cupiditate earum
                                    blanditiis! Magnam iusto labore voluptas
                                    facere ab saepe id? Maxime quo enim amet
                                    voluptatibus vel incidunt itaque, tempore
                                    totam! Incidunt unde aliquam mollitia
                                    tempore nulla eligendi? Non ducimus rem
                                    assumenda quasi illum, corrupti numquam
                                    architecto ipsum animi est ipsa vitae
                                    reiciendis, aliquid delectus molestias
                                    voluptatem culpa quia? Dicta labore nostrum
                                    voluptas nobis perspiciatis nihil ullam,
                                    tenetur minus non ipsa dolor aliquam esse
                                    ipsam, illum at. Dolores officia veniam eius
                                    consectetur fugit et. Illo nobis dolores
                                    minus cum fuga, ullam dignissimos voluptatum
                                    deleniti minima sit in totam esse. Quam,
                                    neque.
                                  </span>
                                </CardContent>
                              </Card>
                            </ScrollArea>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>

                {/* {Array(3)
                    .fill()
                    .map(() => (
                      <Image
                        className="w-full mb-5 rounded-lg hover:shadow-2xl"
                        src={portfolioImage}
                        width={500}
                        height={500}
                      />
                    ))} */}
              </div>
            ))}
      </div>
    </Template>
  );
};

export default Project;

"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MonitorSmartphone, Mail, MapIcon } from "lucide-react";
import Template from "./Template";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Textarea } from "../ui/textarea";
import { useToast } from "../ui/use-toast";

const formSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Must be 3 or more characters long" })
    .max(20, { message: "Must be 20 or fewer characters long" }),
  email: z.string().email(),
  message: z
    .string()
    .min(30, { message: "Must be 30 or more  characters long" }),
});

const Contact = () => {
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const resData = await response.json();
      console.log(resData);

      if (resData.success) {
        toast({
          title: "Success",
          description: "Your message has been sent!",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Error sending message. Please try again..",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Error submitting form. Please try again later.",
      });
    }
  };

  return (
    <Template
      id={"contact"}
      heading={"Contact"}
      headingDescription={
        "Please fill the below form and we will get back to you as soon as possible."
      }
    >
      <div className="flex gap-3 max-md:flex-col">
        <div className="  w-2/5 max-md:w-full flex gap-3 flex-col ">
          <div className={` sticky top-20 flex gap-3 flex-col`}>
            <Card className={`flex gap-3 p-3 items-center`}>
              <CardHeader>
                <CardTitle className={`flex gap-5 items-center`}>
                  <div className="w-8 h-8 border-2 border-foreground/50  flex items-center justify-center rounded-lg">
                    <MapIcon size={16} />
                  </div>{" "}
                  <div className="text-lg">Location:</div>
                </CardTitle>
                <CardDescription>
                  Sukkur Township Sector#3 Street#3 Banglow#3
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className={`flex gap-3 p-3 items-center`}>
              <CardHeader>
                <CardTitle className={`flex gap-5 items-center`}>
                  <div className="w-8 h-8 border-2 border-foreground/50  flex items-center justify-center rounded-lg">
                    <Mail size={16} />
                  </div>{" "}
                  <div className="text-lg">Email:</div>
                </CardTitle>
                <CardDescription>sulemanahmed2704@gmail.com</CardDescription>
              </CardHeader>
            </Card>
            <Card className={`flex gap-3 p-3 items-center`}>
              <CardHeader>
                <CardTitle className={`flex gap-5 items-center`}>
                  <div className="w-8 h-8 border-2 border-foreground/50  flex items-center justify-center rounded-lg">
                    <MonitorSmartphone size={16} />
                  </div>{" "}
                  <div className="text-lg">Call:</div>
                </CardTitle>
                <CardDescription>+92 313-8194805</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
        <Card className="w-3/5 max-md:w-full py-10">
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-2"
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="username" {...field} />
                      </FormControl>
                      <FormMessage className={`text-sm ml-4 `} />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="email" {...field} />
                      </FormControl>

                      <FormMessage className={`text-sm ml-4 `} />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Message" {...field} />
                      </FormControl>

                      <FormMessage className={`text-sm ml-4 `} />
                    </FormItem>
                  )}
                />
                <Button type="submit">Submit</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </Template>
  );
};

export default Contact;

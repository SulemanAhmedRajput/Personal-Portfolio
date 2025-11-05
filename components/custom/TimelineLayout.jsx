"use client";

import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineHeader,
  TimelineTitle,
  TimelineDescription,
  TimelineTime,
} from "@/components/ui/timeline";
import { BlurFade } from "@/components/ui/blur-fade";

export const TimelineLayout = ({ items }) => {
  return (
    <Timeline className="mt-8">
      {items.map((item, index) => (
        <BlurFade key={item.id} delay={0.25 * (index + 1)} inView>
          <TimelineItem>
            <TimelineHeader>
              <TimelineTime>{item.date}</TimelineTime>
              <TimelineTitle>{item.title}</TimelineTitle>
            </TimelineHeader>
            {item.description && (
              <TimelineDescription>{item.description}</TimelineDescription>
            )}
          </TimelineItem>
        </BlurFade>
      ))}
    </Timeline>
  );
};

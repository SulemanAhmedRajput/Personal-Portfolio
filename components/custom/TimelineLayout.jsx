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

export const TimelineLayout = ({ items }) => {
  return (
    <Timeline className="mt-8">
      {items.map((item) => (
        <TimelineItem key={item.id}>
          <TimelineHeader>
            <TimelineTime>{item.date}</TimelineTime>
            <TimelineTitle>{item.title}</TimelineTitle>
          </TimelineHeader>
          {item.description && (
            <TimelineDescription>{item.description}</TimelineDescription>
          )}
        </TimelineItem>
      ))}
    </Timeline>
  );
};

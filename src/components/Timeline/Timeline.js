import React from "react";
import "./Timeline.css";

const timelineData = [
  {
    text: "El'mour Africa is an organization set up to economically and mentally empower people by facilitating the development of both soft and hard skills through physical and online trainings, confrences and seminars.",
    category: {
      tag: "Introduction",
      color: "#926c15",
    }
  },
  {
    text: "We aim to build confident, mentally strong people who are outstanding in their spheres and capable of standing in both local and global stage. Our major areas of interest includes: Personal development, Mental health awareness, HUman capacity building through the provision of hard skills training and image building.",
    category: {
      tag: "what we do?",
      color: "#926c15",
    }
  },
  {
    text: "We do what we do because our major goal is to build high value people that will contribute their quota towards the develpment of the nation and as well impact the world globally.",
    category: {
      tag: "why we do it?",
      color: "#926c15",
    }
  },
  {
    text: "We facilitate the development of both soft and hard skills through physical training, online trainings, conferences and seminars.",
    category: {
      tag: "how we do it?",
      color: "#926c15",
    }
  }
];

const TimelineItem = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <span className="tag" style={{ background: data.category.color }}>
        {data.category.tag}
      </span>
      <p>{data.text}</p>
      <span className="circle" />
    </div>
  </div>
);

const Timeline = () =>
  timelineData.length > 0 && (
    <div className="timeline-container">
      {timelineData.map((data, idx) => (
        <TimelineItem data={data} key={idx} />
      ))}
    </div>
  );

export default Timeline;

import React from "react";
import "./Timeline.css";

const timelineData = [
  {
    text: "El'mour Africa is an image consultancy firm set up to physically and mentally empower people by facilitating the development of both soft and hard skills through physical and online trainings, confrences, seminars and one-on-one coaching services.",
    category: {
      tag: "Introduction",
      color: "#926c15",
    }
  },
  {
    text: "We aim to build confident, mentally strong people who are outstanding in their spheres and capable of standing in both local and global stage.",
    category: {
      tag: "Aim",
      color: "#926c15",
    }
  },
  {
    text: "Our major goal is to build high value people role models, knowledge experts and global change makers.",
    category: {
      tag: "Goals",
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

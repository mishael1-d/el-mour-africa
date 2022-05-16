import React from "react";
import "./Timeline.css";

const timelineData = [
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam labore quasi distinctio saepe hic eligendi, possimus unde repellendus rem. Fugit doloribus ducimus natus libero iusto ea hic quod nisi consequuntur.",
    category: {
      tag: "Introduction",
      color: "#35133b",
    }
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam labore quasi distinctio saepe hic eligendi, possimus unde repellendus rem. Fugit doloribus ducimus natus libero iusto ea hic quod nisi consequuntur.",
    category: {
      tag: "what we do?",
      color: "#35133b",
    }
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam labore quasi distinctio saepe hic eligendi, possimus unde repellendus rem. Fugit doloribus ducimus natus libero iusto ea hic quod nisi consequuntur.",
    category: {
      tag: "why we do it?",
      color: "#35133b",
    }
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam labore quasi distinctio saepe hic eligendi, possimus unde repellendus rem. Fugit doloribus ducimus natus libero iusto ea hic quod nisi consequuntur.",
    category: {
      tag: "how we do it?",
      color: "#35133b",
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

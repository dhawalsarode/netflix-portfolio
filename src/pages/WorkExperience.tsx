import React, { useEffect, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork as WorkIcon } from 'react-icons/md';
import { IoSchool as SchoolIcon } from 'react-icons/io5';
import { FaStar as StarIcon } from 'react-icons/fa';
import './WorkExperience.css';
import { TimelineItem } from '../types';
import { getTimeline } from '../queries/getTimeline';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WorkExperience: React.FC = () => {
  const [timeLineData, setTimeLineData] = useState<TimelineItem[] | null>(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    async function fetchTimelineItem() {
      const data = await getTimeline();
      setTimeLineData(data);
    }
    fetchTimelineItem();
  }, []);

  if (!timeLineData) return <div>Loading...</div>;

  return (
    <>
      <div className="timeline-container" data-aos="fade-up">
        <h2 className="timeline-title">Work Experience & Education Timeline</h2>
      </div>

      <VerticalTimeline>
        {timeLineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            data-aos="fade-up"
            className={`vertical-timeline-element--${item.timelineType}`}
            contentStyle={{
              background: '#1e1e1e',
              color: '#fff',
              borderLeft: '5px solid #e50914',
              boxShadow: '0 0 10px rgba(229, 9, 20, 0.2)',
              borderRadius: '12px',
            }}
            contentArrowStyle={{ borderRight: '7px solid #e50914' }}
            date={item.dateRange}
            iconStyle={{
              background: item.timelineType === 'work' ? '#e50914' : '#e63946',
              color: '#fff',
              boxShadow: '0 0 15px rgba(229, 9, 20, 0.6)',
            }}
            icon={item.timelineType === 'work' ? <WorkIcon /> : <SchoolIcon />}
          >
            {item.timelineType === 'Education' ? (
              <div>
                <h3 className="vertical-timeline-element-title" style={{ color: '#fff' }}>
                  {item.name}
                </h3>
                <h4 className="vertical-timeline-element-subtitle" style={{ color: '#e50914' }}>
                  {item.title}
                </h4>

                {/* handle both string and string[] summary formats */}
                <ul
                  style={{
                    color: '#ddd',
                    textAlign: 'left',
                    marginTop: '10px',
                    marginLeft: '15px',
                  }}
                >
                  {Array.isArray(item.summaryPoints)
                    ? item.summaryPoints.map((point: string, i: number) => (
                        <li key={i} style={{ marginBottom: '6px' }}>
                          {point}
                        </li>
                      ))
                    : item.summaryPoints
                        .split('•')
                        .filter((point: string) => point.trim() !== '')
                        .map((point: string, i: number) => (
                          <li key={i} style={{ marginBottom: '6px' }}>
                            {point.trim()}
                          </li>
                        ))}
                </ul>
              </div>
            ) : (
              <div>
                <h3 className="vertical-timeline-element-title" style={{ color: '#fff' }}>
                  {item.title}
                </h3>
                <h4 className="vertical-timeline-element-subtitle" style={{ color: '#e50914' }}>
                  {item.name}
                </h4>
                <p className="vertical-timeline-element-tech" style={{ color: '#ccc' }}>
                  {item.techStack && `🔧 ${item.techStack}`}
                </p>
                <p style={{ color: '#ddd' }}>{item.summaryPoints}</p>
              </div>
            )}
          </VerticalTimelineElement>
        ))}

        {/* End marker */}
        <VerticalTimelineElement
          iconStyle={{
            background: '#0f0',
            color: '#fff',
            boxShadow: '0 0 15px rgba(16, 204, 82, 0.6)',
          }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </>
  );
};

export default WorkExperience;

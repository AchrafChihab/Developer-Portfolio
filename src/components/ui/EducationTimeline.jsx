import React from 'react';
import pkg from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const { VerticalTimeline, VerticalTimelineElement } = pkg;

const EducationTimeline = ({ title }) => {
  const educationData = [
    {
      date: '2024 - Present',
      title: 'Master in Big Data',
      subtitle: 'SUP Technologie',
      description: 'Casablanca, Morocco',
      icon: '🎓',
    },
    {
      date: '2017 - 2020',
      title: 'Bachelor in Computer Science',
      subtitle: 'CESA Sup',
      description: 'Casablanca, Morocco',
      icon: '🎓',
    },
    {
      date: '2015 - 2016',
      title: 'High School Diploma (Baccalaureate)',
      subtitle: 'Groupe Scolaire Verdun',
      description: 'Casablanca, Morocco',
      icon: '🎓',
    },
  ];

  const careerData = [
    {
      date: 'March 2024 - Present',
      title: 'Full-Stack Developer',
      subtitle: 'Digitalia Solution',
      description:
        'Developing and maintaining high-quality web applications and software solutions.',
      icon: '💼',
    },
    {
      date: 'March 2023 - February 2024',
      title: 'Full-Stack Developer',
      subtitle: 'Eurofive Consulting',
      description:
        'Contributed to full-stack development projects and enhanced application performance.',
      icon: '💼',
    },
    {
      date: 'May 2022 - February 2023',
      title: 'Full-Stack Developer',
      subtitle: 'SLS',
      description:
        'Worked on multiple web development projects and collaborated with cross-functional teams.',
      icon: '💼',
    },
  ];

  const dataToDisplay = title === 'Education Timeline' ? educationData : careerData;

  return (
    <div className="border_timeline_box rounded-sm border-current">
      <div className="text-center">
        {title && <h2 className="mb-4 text-xl font-bold">{title}</h2>}
      </div>
      <VerticalTimeline>
        {dataToDisplay.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            date={item.date}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            position={index % 2 === 0 ? 'left' : 'right'}
          >
            <h3 className="vertical-timeline-element-title">{item.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
            <p>{item.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default EducationTimeline;

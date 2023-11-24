import { FC, useState } from 'react';

type ShortResumeProps = {};

type Project = {
  name: string;
  definition: string;
};

type Experience = {
  title: string;
  dateFrom: string;
  dateTo: string;
  company: string;
  projects: Project[];
};

const ShortResume: FC<ShortResumeProps> = ({}) => {
  const emptyProject: Project = {
    name: '',
    definition: ''
  };

  const emptyExperience: Experience = {
    title: '',
    dateFrom: '',
    dateTo: '',
    company: '',
    projects: [emptyProject]
  };

  const [resumeTitle, setResumeTitle] = useState('');

  const [experiences, setExperiences] = useState<Experience[]>([
    emptyExperience
  ]);
  const [title, setTitle] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [company, setCompany] = useState('');
  const [projects, setProjects] = useState<Project[]>([
    { name: '', definition: '' }
  ]);

  const [keyWords, setKeyWords] = useState('');
  const [education, setEducation] = useState('');
  const [highlight, setHighlight] = useState('');

  const [highlightList, setHighlightList] = useState<string[]>([]);
  const [educationList, setEducationList] = useState<string[]>([]);

  const setProjectName = (name: string, index: number) => {
    const tempProjects = [...projects];
    tempProjects[index] = { ...tempProjects[index], name };
    setProjects(tempProjects);
  };
  const setProjectDefinition = (definition: string, index: number) => {
    const tempProjects = [...projects];
    tempProjects[index] = { ...tempProjects[index], definition };
    setProjects(tempProjects);
  };

  const addHighlight = () => {
    setHighlightList([...highlightList, highlight]);
    setHighlight('');
  };

  const addEducation = () => {
    setEducationList([...educationList, education]);
    setEducation('');
  };

  const saveExperience = (index: number) => {
    const tempExperiences = [...experiences];
    tempExperiences[index] = { title, dateFrom, dateTo, company, projects };
    setExperiences(tempExperiences);
  };
  const inputClass = 'flex m-[2px] p-[2px] border border-dark rounded-[3px]';
  return (
    <div className="w-full h-full mb-[50px] overflow-y-scroll">
      <div className="flex">
        <div>
          <input
            className={inputClass}
            type="text"
            value={resumeTitle}
            onChange={(e) => setResumeTitle(e.target.value)}
            placeholder="Resume title"
          />
        </div>
        <div className="flex">
          {experiences?.map((_experience, i) => (
            <div key={`inputs-experience--${i}`}>
              <input
                className={inputClass}
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Job title"
              />
              <input
                className={inputClass}
                type="text"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                placeholder="Date from"
              />
              <input
                className={inputClass}
                type="text"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                placeholder="date to"
              />
              <input
                className={inputClass}
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Company name"
              />
              <div>
                projects:
                <button
                  onClick={() => setProjects([...projects, emptyProject])}
                >
                  +
                </button>
              </div>
              o
              {projects.map((project, i) => (
                <div key={`inputs-project--${i}`}>
                  <input
                    className={inputClass}
                    type="text"
                    value={project.name}
                    onChange={(e) => setProjectName(e.target.value, i)}
                    placeholder="Project name"
                  />
                  <input
                    className={inputClass}
                    type="text"
                    value={project.definition}
                    onChange={(e) => setProjectDefinition(e.target.value, i)}
                    placeholder="Project definition"
                  />
                </div>
              ))}
              <button onClick={() => saveExperience(i)}>Save experience</button>
            </div>
          ))}
        </div>
        <div>
          <input
            className={inputClass}
            type="text"
            value={keyWords}
            onChange={(e) => setKeyWords(e.target.value)}
            placeholder="Key Words"
          />
          <input
            className={inputClass}
            type="text"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            placeholder="education"
          />
          <button onClick={addEducation}>add education</button>
        </div>
        <div>
          <input
            className={inputClass}
            type="text"
            value={highlight}
            onChange={(e) => setHighlight(e.target.value)}
            placeholder="highlights"
          />
          <button onClick={addHighlight}>add highlight</button>
        </div>
      </div>

      <div className="relative w-fit h-fit">
        <img src="src/assets/alten-header.png" />
        <div className="absolute bottom-[5px] left-[80px] text-white font-bold">
          {resumeTitle}
        </div>
      </div>
      <div className="h-[460px] pt-[16px] mx-auto border border-dark border-t-0">
        <div className="flex">
          <div className="mx-[30px] basis-3/4">
            {experiences.map((experience, i) => (
              <div key={`fields-experience--${i}`} className="italic text-blue">
                {experience.dateFrom}-{experience.dateTo}:{' '}
                <span className="font-bold">{experience.title} </span>
                <span className="font-bold text-blue">
                  ({experience.company})
                </span>
                <div className="mb-[16px]">
                  {experience.projects.map((project, i) => (
                    <div
                      className="text-[14px]"
                      key={`experience-project--${i}`}
                    >
                      <span className="font-bold">{project.name}</span> -{' '}
                      {project.definition}
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div className="ml-[2px] text-blue-dark font-bold">KEY WORDS</div>
            <div className="pl-[4px] w-full min-h-[30px] bg-grey-dark text-white italic text-[12px]">
              {keyWords}
            </div>
            <div className="ml-[2px] text-blue-dark font-bold">
              EDUCATION AND TRAINING
            </div>
            <ul className="w-full pl-[30px] min-h-[30px] bg-grey-light text-blue-dark italic text-[12px] list-disc">
              {educationList.map((education, i) => (
                <li key={`education-element--${i}`}>{education}</li>
              ))}
            </ul>
          </div>
          <div className="basis-auto">
            <div className="relative w-fit h-fit">
              <img src="src/assets/alten-highlights.png" alt="" />
              <div className="absolute w-[167px] h-[101px] bottom-[18px] left-[9px] bg-grey-light rotate-[12.2deg]">
                <div className="w-fit mx-auto font-bold text-blue-dark">
                  Highlights
                </div>
                <ul className="pl-[20px] text-blue-dark text-[12px] list-disc leading-[14px]">
                  {highlightList.map((highlight, i) => (
                    <li key={`highlight--${i}`}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-fit mx-auto mb-[10px] text-[20px] font-bold text-blue-dark">
              Companies
            </div>
            <img src="src/assets/yanchware.png" />
            <div className="w-fit mx-auto mt-[24px] mb-[4px] text-[20px] font-bold text-blue-dark">
              Languages
            </div>
            <div className="ml-[54px]">
              <div>
                <span className="font-bold">French: </span> Native
              </div>
              <div>
                <span className="font-bold">English: </span> C2
              </div>
              <div>
                <span className="font-bold">Italian: </span> C1
              </div>
              <div>
                <span className="font-bold">Dutch: </span> B1
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortResume;

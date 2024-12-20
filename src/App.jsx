import { useState } from 'react';
import ProjectCard from './components/ProjectCard';
import ThemeToggle from './components/ThemeToggle';
import './index.css';

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const projects = [
    {
      name: 'To Do List App',
      description: 'A simple To-Do List app where users can add, edit, and delete tasks with priorities and deadlines. It features notifications, a dark/light mode toggle, and a clean, modern design.',
      images: ['/images/image2.png', '/images/image3.png', '/images/image1.png'],
      liveLink: 'https://Avatar501.github.io/ToDo',
      repoLink: 'https://github.com/Avatar501/ToDo',
    },
  ];

  return (
    <div className={`app ${theme}`}>
      <header>
        <h1>My Portfolio</h1>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </header>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default App;

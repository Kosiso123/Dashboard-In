 
import React, { useState } from 'react';
import './Dashboard.css'; // Import CSS file for styling

// Import images for interns
import kosiImg from './images/kosi.jpg';
import lovethImg from './images/daramola.jpg';
import henryImg from './images/ola.jpg';
import emekaImg from './images/emeka.jpeg';
import joshuaImg from './images/Odeyingbe.jpeg';
import adeolaImg from './images/juliet.jpeg';
import tappiImg from './images/ola.jpg';
import graciousImg from './images/justin.jpeg';
import happinessImg from './images/kosi.jpg';
import chidinmaImg from './images/chidmma.jpg';
import favourImg from './images/daramola.jpg';
import ikechiImg from './images/emeka.jpeg';
import justinImg from './images/justin.jpeg';

const Dashboard = () => {
  const [activePath, setActivePath] = useState(null);

  // Interns data for each path
  const interns = {
    frontend: [
      { name: 'Kosi', picture: kosiImg, learningPath: 'Frontend Development', grades: {
        task1: 9,
        task2: 8,
        task3: 7,

      } },
      { name: 'Loveth', picture: lovethImg, learningPath: 'Frontend Development', grades:{ 
        task1:8,
        task2: 6,
        task3: 8 }
      },
      { name: 'Henry', picture: henryImg, learningPath: 'Frontend Development', grades:{ 
        task1:10,
        task2: 6,
        task3: 8 } },
      { name: 'Emeka', picture: emekaImg, learningPath: 'Frontend Development', grades:{ 
        task1:6,
        task2: 4,
        task3: 8 }},
      { name: 'Joshua', picture: joshuaImg, learningPath: 'Frontend Development', grades:{ 
        task1:8,
        task2: 7,
        task3: 8 } },
    ],
    backend: [
      { name: 'Emeka ', picture: emekaImg, learningPath: 'Backend Development', grades:{ 
        task1:9,
        task2: 5,
        task3: 8 } },
      { name: 'Adeola ', picture: adeolaImg, learningPath: 'Backend Development', grades:{ 
        task1:5,
        task2: 6,
        task3: 8 }},
      { name: 'Tappi ', picture: tappiImg, learningPath: 'Backend Development', grades:{ 
        task1:9,
        task2: 5,
        task3: 7 } },
      { name: 'Gracious ', picture: graciousImg, learningPath: 'Backend Development', grades:{ 
        task1:9,
        task2: 8,
        task3: 8 } },
      { name: 'Happiness ', picture: happinessImg, learningPath: 'Backend Development', grades:{ 
        task1:8,
        task2: 6,
        task3: 8 } },
    ],
    productDesign: [
      { name: 'Chidinma ', picture: chidinmaImg, learningPath: 'Product Design', grades:{ 
        task1:6,
        task2: 7,
        task3: 8 }},
      { name: 'Favour ', picture: favourImg, learningPath: 'Product Design', grades:{ 
        task1:8,
        task2: 8,
        task3: 8 } },
      { name: 'Ikechi ', picture: ikechiImg, learningPath: 'Product Design', grades:{ 
        task1:10,
        task2: 9,
        task3: 8 } },
      { name: 'Justin ', picture: justinImg, learningPath: 'Product Design', grades:{ 
        task1:10,
        task2: 6,
        task3: 8 } },
    ],
  };

  // Function to handle path click
  const handleClick = (path) => {
    setActivePath(path === activePath ? null : path);
  };

  return (
    <div className="dashboard-container">
      <h1>Intern Dashboard</h1>
      <div className="paths">
        <div className={`path ${activePath === 'frontend' ? 'active' : ''}`} onClick={() => handleClick('frontend')}>
          Frontend
        </div>
        <div className={`path ${activePath === 'backend' ? 'active' : ''}`} onClick={() => handleClick('backend')}>
          Backend
        </div>
        <div className={`path ${activePath === 'productDesign' ? 'active' : ''}`} onClick={() => handleClick('productDesign')}>
          Product Design
        </div>
      </div>
      <div className="interns-list">
        {activePath && interns[activePath].map(intern => (
          <div key={intern.name} className="intern-item">
            <div className="img">
              <img src={intern.picture} alt={intern.name} />
            </div>
            <div className="info">
              <div className="name">{intern.name}</div>
              <div className="learning-path">Learning Path: {intern.learningPath}</div>
              <div className="grades">
                Grades: 
              {Object.entries(intern.grades).map(([task, grade]) => (
                <div key={task}>
                  {task}: {grade}
                </div>
              ))}</div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
 }
export default  Dashboard


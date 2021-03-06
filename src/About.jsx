import { useState } from 'react';
import List from './List';

const About = () => {

    const [skills, setSkills] = useState([
        { title: 'HTML', qualifier: 'Skill', description: 'Junior', id: 1 },
        { title: 'CSS', qualifier: 'Skill', description: 'Junior', id: 2 },
        { title: 'JavaScript', qualifier: 'Skill', description: 'Junior', id: 3 },
        { title: 'NodeJS', qualifier: 'Skill', description: 'Junior', id: 4 },
        { title: 'React', qualifier: 'Skill', description: 'Junior', id: 5 },
        { title: 'Bootstrap', qualifier: 'Skill', description: 'Junior', id: 6 }
    ]);

    const [experience, setExperience] = useState([
        { title: 'Rater', qualifier: 'Where', description: 'Telus Int.', id: 3 }
    ])

    const [studies, setStudies] = useState([
        { title: 'Full Stack Developer', qualifier: 'Where', description: 'Digital House', id: 1 },
        { title: 'UX Designer', qualifier: 'Where', description: 'Google', id: 2 },
    ])

    return (
        <div className="home">
            <List items={experience} title='Experience'/>
            <List items={skills} title='Skills'/>
            <List items={studies} title='Studies'/>
        </div>
    );
}

export default About;
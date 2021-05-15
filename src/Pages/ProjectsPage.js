import React from 'react';
import PageTitle from "../Components/PageTitle";
import Categories from "../Components/Categories";
import MenuItems from "../Components/MenuItems";
import projects from '../Components/AllProjects';
import {useState} from 'react';

const allCategories = ['All', ...new Set(projects.map(item => item.category))];

function ProjectsPage() {
    const [categories, setCategories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(projects);

    const filter = (category) => {
        if (category === 'All') {
            setMenuItems(projects);
            return;
        }
        const filteredData = projects.filter((item) => {
            return item.category === category;
        });
        setMenuItems(filteredData);
    }

    return (
        <div className="ProjectsPage">
            <div className="title">
                <PageTitle title={'Projects'} span={'Projects'}/>
            </div>
            <div className="projectsData">
                <Categories filter={filter} categories={categories}/>
                <MenuItems menuItem={menuItems}/>
            </div>
        </div>
    )
}

export default ProjectsPage;
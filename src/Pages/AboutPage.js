import React from 'react';
import PageTitle from "../Components/PageTitle";
import ImageSection from "../Components/imageSection";
import SkillsSection from "../Components/skillsSection";

function AboutPage() {
    return (
        <div className="AboutPage">
            <PageTitle title={'About Me'} span={'About Me'} />
            <ImageSection />
            <PageTitle title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Javascript'} />
                <SkillsSection skill={'Java'} />
                <SkillsSection skill={'C#'} />
                <SkillsSection skill={'C++'} />
                <SkillsSection skill={'Python'} />
                <SkillsSection skill={'React'} />
                <SkillsSection skill={'ASP .NET'} />
                <SkillsSection skill={'.NET'} />
                <SkillsSection skill={'SQL'} />
                <SkillsSection skill={'Version Control'} />
                <SkillsSection skill={'Agile Methodologies'} />
                <SkillsSection skill={'Object-Oriented Programming'} />
            </div>
        </div>
    )
}

export default AboutPage;
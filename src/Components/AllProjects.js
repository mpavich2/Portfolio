import React from 'react';
import Pathfinding from '../img/projectImages/Pathfinding.png';
import Macaw from '../img/projectImages/macaw.png';
import OfficeWebsite from '../img/projectImages/OfficeWebsite.png';

const projects = [
    {
        id: 1,
        category: 'Javascript',
        link: 'https://github.com/mpavich2/AlgorithmVisualizer',
        image: Pathfinding,
        title: 'Algorithm Visualizer',
        description: 'This project was originally started to get a better understanding of javascript and jqeury. I also was interested in different types of pathfinding algorithms and wanted to be able to better visualize how they work. Once I finished getting some basic pathfinding algorithms I decided I wanted to see how different sorting algorithms worked too.'
    },
    {
        id: 2,
        category: 'C#',
        link: 'https://github.com/mpavich2/Imagely',
        image: Macaw,
        title: 'Imagely',
        description: 'This project was my first side project intended to manipulate images in many ways. There is image triangulation, steganography, abstract triangle art, and abstract circle art. I wish to return to implement recreating images with circles as I do with triangles.'
    },
    {
        id: 3,
        category: 'C#',
        link: 'https://github.com/mpavich2/OfficeEcommerceWebsite',
        image: OfficeWebsite,
        title: 'Office E-commerce Website',
        description: 'A simple e-commerce website I built using ASP.NET core MVC and bootstrap that has office products. It contains all the features that one would typically expect of a small e-commerce company. This project was great to improve my skills using ASP.NET with bootstrap.'
    }
];

export default projects;
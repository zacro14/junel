import Seo from 'components/seo'
import Image from 'next/image'
import React from 'react'
import { projects } from 'data/projects'
import { ProjectItem } from 'components/Projects'

const Projects = () => {
    return (
        <div>
            <Seo title="Junel Sacro | Projects" />
            <div className="grid  md:grid-cols-2 gap-2">
                {projects.map((props, index) => (
                    <ProjectItem key={index} {...props} />
                ))}
            </div>
        </div>
    )
}

export default Projects

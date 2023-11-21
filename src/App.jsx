import { useState } from 'react'
import Header from "./components/Header.jsx";
import PortraitPath from './img/portrait.png'
import ImageProjectPath from './img/project.png'
import ImageNominaPath from './img/nomina.png'
import styled from "@emotion/styled";
import Project from "./components/Project.jsx";
import Skill from "./components/Skill.jsx";
import {getProjects} from './data/projects.js'
import {getSkills} from './data/skills.js'
import {getCertifications} from './data/certifications.js'
import Certification from "./components/Certification.jsx";
import Contacto from "./components/Contacto.jsx";


const Container = styled.div`
  width: 100%;
`



function App() {
  const projects = getProjects()
  const skills = getSkills()
  const certifications = getCertifications()

  return (
    <Container>
        <Header/>
        <main className="m-auto">
            <section id="proyectos" className="m-auto mt-20 w-3/4 space-y-10 text-center">
                <h2 className="font-bold text-3xl mb-10 underline">
                    Proyectos
                </h2>

                {projects.map(project => (
                    <Project
                        project={project}
                    />
                ))}
            </section>

            <section id="skill" className="m-auto mt-20 w-full space-y-5 text-black text-center bg-white">
                <h2 className="font-bold text-4xl mb-10 underline">
                    Skills
                </h2>

                <div className="space-y-5">
                    <div className="p-8">
                        <h3 className="text-3xl">
                            Hard Skills
                        </h3>

                        <div className="grid lg:grid-cols-4 grid-cols-2 grid-rows-4 gap-2">
                            {skills.hard.map(skill => (
                                <Skill
                                    skill={skill}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="bg-black text-white p-20">
                        <h3 className="text-3xl mb-5">
                            Soft Skills
                        </h3>

                        <ul>
                        {skills.soft.map(skill => (
                            <li>
                                {skill.name}
                            </li>
                        ))}
                        </ul>

                        <h3 className="text-3xl my-5">
                            Hobbies
                        </h3>
                        <ul>
                            <li>
                                Tocar Guitarra
                            </li>
                            <li>
                                Disfrutar de la naturaleza
                            </li>
                            <li>
                                Pasear a mis perros
                            </li>
                            <li>
                                Jugar videojuegos
                            </li>
                        </ul>

                        <h3 className="text-3xl my-5">
                            Experiencia
                        </h3>
                        <ul>
                            <li>
                                Becario de la Unidad de Computo Académico (UNICA) en la Faculta de Ingeniería por 1 año
                            </li>
                        </ul>
                    </div>
                </div>

            </section>

            <section id="certificaciones"
                     className="m-auto p-20 space-y-5 text-center bg-white text-black bg-gray-100"
            >
                <h2 className="font-bold text-3xl mb-10 underline">
                    Certificaciones
                </h2>

                <div className="flex justify-center gap-10">
                    {certifications.map(certification => (
                        <Certification
                            certification={certification}
                        />
                    ))}
                </div>
            </section>

            <section className="flex justify-center">
                <Contacto />
            </section>
        </main>
    </Container>
  )
}

export default App

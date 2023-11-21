export function getProjects(){
    return [
        {
            id: 1,
            name: "Sistema de Administración del Servicio Social",
            image: 'project.png',
            description: "Creación de un sistema que permite a un alumno llevar el proceso completo del servicio social, desde que se ingresan los documentos, generación de reportes y liberación del servicio. La parte de administración es llevada a cabo por cada jefe de departamento de UNICA.",
            technologies: ["Laravel", "PHP", "PostgreSQL 15", "TailwindCSS"],
        },
        {
            id: 2,
            name: "On Tune",
            image: 'project.png',
            description: "Página Fullstack enfocada a cursos musicales en la cual persona se puede registrar y disfrutar de las funcionalidades implementadas para disfrutar cada recurso. Mi rol en el proyecto fue la creación de la API REST encargada de la autenticación y disposición de cada recurso de una base de datos MySQL.",
            technologies: ["ExpressJS", "MySQL 8", "React", "SASS"],
        },
        {
            id: 3,
            name: "Nomina",
            image: 'project.png',
            description: "Proyecto Fullstack para la implementación de un sistema de nomina de una base de datos.",
            technologies: ["ExpressJS", "Oracle 19c Enterprise", "React", "TailwindCSS"],
        }
    ]

}
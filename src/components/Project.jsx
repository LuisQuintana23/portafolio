
import styled from "@emotion/styled";

const Image = styled.img`
    max-width: 500px;
`
const Project = ({project}) => {
    const pathToImageDirectory = '..'
    const {image, name, description, technologies} = project

    return (
        <div className="flex lg:flex-row flex-col justify-center items-center gap-8">
            <Image src={`/img/${image}`} alt={`${name} image`} class="lg:w-1/3 w-full"/>

            <div className="lg:w-1/3 w-full flex flex-col items-start gap-10 text-left">
                <h3 className="font-bold text-2xl">
                    {name}
                </h3>
                <p>
                    {description}
                </p>
                <p>

                    Tecnologias: {technologies.map((tech, i) => {
                        if (i !== technologies.length - 1) {
                            return <span>{`${tech}, `}</span>
                        }
                        return <span>{`${tech}`}</span>
                    })}
                </p>
            </div>
        </div>
    );
};

export default Project;
import styled from "@emotion/styled";

const Image = styled.img`
  max-width: 200px;
  max-height: 100px;
`
const Skill = ({skill}) => {
    const {image, name} = skill

    return (
        <div className="flex flex-col justify-center items-center text-left">
            <Image src={`/img/${image}`} alt={`${name} image`} class="w-1/2"/>
        </div>
    );
};

export default Skill;

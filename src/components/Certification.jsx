import styled from "@emotion/styled";

const Image = styled.img`
  max-width: 200px;
`
const Certification = ({certification}) => {
    const {image, name, date, description, url} = certification

    return (
        <div className="flex flex-col justify-center items-center text-left bg-white rounded-xl border-2 shadow-md w-1/4 p-10">
            <Image src={`/img/${image}`} alt={`${name} image`} class="w-1/2"/>
            <p>
                {description}
            </p>
        </div>
    );
};

export default Certification;

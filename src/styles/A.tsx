import tw from "tailwind-styled-components";

const A = tw.a`
    transition-colors duration-300 
    text-icon hover:text-white 
    flex flex-col justify-center items-center
    group
    transition duration-500 ease-in-out bg-blue-500 hover:bg-red-500 transform hover:-translate-y-1 hover:scale-110
`;

export default A;

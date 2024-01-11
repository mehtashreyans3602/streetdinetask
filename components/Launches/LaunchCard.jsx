"use-client"

const SpaceXLaunchCard = ({ launch, index }) => {
    return (
        <>
            <td className='border-r-2 border-white'>{index + 1}</td>
            <td className=''>{launch.name}</td>
        </>
    );
};

export default SpaceXLaunchCard;

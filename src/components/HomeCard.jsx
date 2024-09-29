import { GrSelect } from 'react-icons/gr';
import { IoBookOutline } from 'react-icons/io5';
import { TbListDetails } from 'react-icons/tb';

const HomeCard = ({ icon, title, description, bgColor, iconColor }) => {

    return (
        <div className="flex flex-col w-64 p-6 bg-white rounded-lg ">
            <div className={`w-12 h-12 ${bgColor} flex items-center justify-center rounded-full mb-4`}>
                {icon === 'GrSelect' ?
                    <GrSelect color={iconColor} size={18}/> :
                    icon === 'IoBookOutline' ? <IoBookOutline color={iconColor} size={18}/> :
                        <TbListDetails color={iconColor} size={18}/>
                }
            </div>
            <h3 className="text-lg text-left poppins-regular mb-2">{title}</h3>
            <p className="text-sm text-secondary poppins-light text-left w-48">{description}</p>
        </div>
    );
}

export default HomeCard;

const HomeCard = ({ icon, title, description, bgColor }) => {

    return (
        <div className="flex flex-col w-64 p-6 bg-white rounded-lg ">
            <div className={`w-12 h-12 ${bgColor} flex items-center justify-center rounded-full mb-4`}>
                {icon}
            </div>
            <h3 className="text-lg text-left poppins-regular mb-2">{title}</h3>
            <p className="text-sm text-secondary poppins-light text-left w-48">{description}</p>
        </div>
    );
}

export default HomeCard;

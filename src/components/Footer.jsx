import Logo from "../assets/Logo.png";

const Footer = () => {

    return (
        <footer className='py-1 px-4 border-2 md:px-8 lg:px-16'>
            <div className='container mx-auto'>
                <div className='flex justify-between items-center'>
                    <img src={Logo} alt="logo" className='w-20 md:w-28'/>
                    <div className='text-xs md:text-sm'>Developed by Vinidu Minsara with ❤️</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;

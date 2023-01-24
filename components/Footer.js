import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-16 text-gray-400 px-[28px] sm:px-[36px] md:px-[48px] lg:px-[60px] flex justify-between flex-wrap gap-6 sm:gap-0">
        <div className="flex gap-6 mt-auto">
            <FaYoutube className="w-4 h-4"/>
            <FaTwitter className="w-4 h-4"/>
            <FaFacebookF className="w-4 h-4"/>
            <FaInstagram className="w-4 h-4"/>
        </div>

        <div className="text-[12px] md:text-sm ">
            <h4 className="mb-2 md:mb-1">© 2023 WarnerMediaDirect, LLC. Todos los derechos reservados.</h4>
            <div className="flex md:justify-end justify-start gap-4">
                <div>Privacidad</div>
                <div>Términos</div>
                <div>Ayuda</div>
                <div>Dispositivos</div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
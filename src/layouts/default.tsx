import { GithubIcon, InstagramIcon, TwitterIcon } from "@/components/icons";
import { Navbar } from "@/components/navbar";
import { siteConfig } from "@/config/site";
import { Link } from "@heroui/link";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">   
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        {/* Add the footer here */}
        <div className="text-center">
          <p className="text-sm text-gray-500 hover:text-[#c0172b] cursor-pointer">
            &copy; {new Date().getFullYear()} Kumiho Esports. Todos los derechos reservados.
          </p>
          <div className="flex justify-center space-x-4 mt-2 ">
            <Link
              href="#"
              className="text-gray-500 hover:text-[#c0172b] cursor-pointer"
            >
              Política de privacidad
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-[#c0172b] cursor-pointer"
            >
              Términos de servicio
            </Link>
            <Link isExternal href={siteConfig.links.twitter} title="Twitter">
              <TwitterIcon className="text-default-500 hover:text-[#c0172b]" />
            </Link>

            <Link
              isExternal
              href={siteConfig.links.instagram}
              title="Instagram"
            >
              <InstagramIcon className="text-default-500 hover:text-[#c0172b]" />
            </Link>

            <Link isExternal href={siteConfig.links.github} title="GitHub">
              <GithubIcon className="text-default-500 hover:text-[#c0172b]" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

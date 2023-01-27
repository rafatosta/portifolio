import Image from "next/image";
import Link from "next/link";
import LogoIcon from "../../public/assets/logo.svg";
import { MenuButton } from "./MenuButton";

export const navigation = [
  { name: "Home", href: "/" },
  { name: "Sobre", href: "/#about" },
  { name: "Habilidades", href: "/#skills" },
  { name: "Projetos", href: "/#projects" },
  { name: "Contato", href: "/#contact" },
];

export function Navbar() {
  return (
    <nav className="fixed p-8 tracking-wide flex flex-row gap-x-8 justify-end w-full">
     
      <div className="sm:flex flex-1 gap-x-8 justify-end hidden">
        {navigation.map((item) => (
          <Link key={item.name} href={item.href}>
            <p className="font-mono text-sm hover:font-extrabold text-gray-200 hover:text-secondary hover:scale-110">
              {item.name}
            </p>
          </Link>
        ))}
      </div>

      <div className="sm:hidden inline-block">
        <MenuButton />
      </div>
    </nav>
  );
}

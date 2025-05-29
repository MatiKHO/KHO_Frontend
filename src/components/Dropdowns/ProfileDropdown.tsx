import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/dropdown";
import { Avatar } from "@heroui/avatar";
import { useAuth } from "@/hooks/useAuth";
import { ProfileIcon } from "../icons";
// import { useAuth } from "@/context/AuthContext";

type ProfileDropdownProps = {
    onRegister: () => void;
    onLogin: () => void;
  }


export const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ onRegister, onLogin }) => {
    const { isLoggedIn, logout } = useAuth();
  
    return (
      <Dropdown
        backdrop="blur"
        onOpenChange={(isOpen) => {
          if (!isOpen) {
            document.getElementById("focusableElement")?.focus();
          }
        }}
      >
        <DropdownTrigger>
          <Avatar
            classNames={{
              base: "bg-[#c0172b]",
              icon: "text-[#f0f0f0]",
            }}
            icon={<ProfileIcon />}
            size="sm"
            className="cursor-pointer"
          />
        </DropdownTrigger>
  
        <DropdownMenu aria-label="User Menu">
          {isLoggedIn ? (
            <>
              <DropdownItem key="profile" textValue="Perfil" href="/profile">
                Perfil
              </DropdownItem>
              <DropdownItem key="logout" textValue="Cerrar sesión" color="danger" onPress={logout} className="hidden lg:flex">
                Cerrar sesión
              </DropdownItem>
            </>
          ) : (
            <>
              <DropdownItem key="register" textValue="Regístrate" onPress={onRegister}>
                Regístrate
              </DropdownItem>
              <DropdownItem key="login" textValue="Iniciar sesión" onPress={onLogin}>
                Iniciar sesión
              </DropdownItem>
            </>
          )}
        </DropdownMenu>
      </Dropdown>
    );
  };
  

  


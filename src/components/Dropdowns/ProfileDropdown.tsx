import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/dropdown";
import { Avatar } from "@heroui/avatar";
import { useAuth } from "@/hooks/useAuth";
import { ProfileIcon } from "../icons";

type ProfileDropdownProps = {
    onRegister: () => void;
    onLogin: () => void;
  }

export const ProfileDropdown: React.FC<ProfileDropdownProps> = (props: ProfileDropdownProps) => {
    const { onRegister, onLogin } = props;
    const { isLoggedIn, logout } = useAuth();
  
    return (
      <Dropdown
        backdrop="blur"
        onOpenChange={(isOpen: boolean) => {
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





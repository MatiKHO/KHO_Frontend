import { Input } from "@heroui/input";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/modal";
import { ClosedEye, MailIcon, OpenEye } from "../icons";
import { Checkbox } from "@heroui/checkbox";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";

type LoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onOpenRegisterModal: () => void;
};

export const LoginModal = ({
  onOpenRegisterModal,
  isOpen,
  onClose,
}: LoginModalProps) => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const bgColor = "#c0172b";

  const handleLogin = async () => {
    try {
      await login({ email, password });
      onClose();
    } catch (error) {
      console.error("Login fallido:", error);
      setError("Credenciales incorrectas o error de servidor");
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      placement="top-center"
      onOpenChange={(open: boolean) => {
        if (!open) onClose();
      }}
      backdrop="blur"
    >
      <ModalContent>
        {(onClose: () => void) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Iniciar sesión
            </ModalHeader>
            <ModalBody>
              <Input
                endContent={
                  <MailIcon className="text-2xl text-[#c0172b] pointer-events-none flex-shrink-0" />
                }
                label="Email"
                placeholder="Introduce tu email"
                variant="flat"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
              />
              <Input
                endContent={
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? (
                      <OpenEye className="text-xl text-[#c0172b]" />
                    ) : (
                      <ClosedEye className="text-xl text-[#c0172b]" />
                    )}
                  </span>
                }
                label="Password"
                placeholder="Introduce tu contraseña"
                type="password"
                variant="flat"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
              />
              <div className="flex py-2 px-1 justify-between">
                <Checkbox
                  classNames={{
                    label: "text-small",
                  }}
                >
                  Recuérdame
                </Checkbox>
                <Link
                  href="#"
                  style={{ color: bgColor, transition: "opacity 0.3s" }}
                  size="sm"
                  onPress={async () => {
                    onClose();
                    // Wait for modal close animation (adjust timeout as needed)
                    await new Promise((resolve) => setTimeout(resolve, 300));
                    onOpenRegisterModal();
                  }}
                >
                  Olvidé mi contraseña
                </Link>
              </div>
              {error && (
                <div className="text-[#c0172b] text-sm text-center mt-2">
                  {error}
                </div>
              )}
            </ModalBody>
            <ModalFooter>
              <Button
                style={{ color: "#f0f0f0", backgroundColor: bgColor }}
                variant="flat"
                onPress={onClose}
              >
                Cerrar
              </Button>
              <Button
                type="submit"
                variant="shadow"
                style={{ backgroundColor: "white", color: "#c0172b" }}
                className="hover:animate-pulse"
                onPress={handleLogin}
              >
                Continuar
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

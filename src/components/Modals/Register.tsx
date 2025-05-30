import { Input } from "@heroui/input";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  //   useDisclosure,
} from "@heroui/modal";
import { useState } from "react";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { LockIcon, MailIcon, UserIcon } from "../icons";
// import { useAuth } from "@/context/AuthContext";

type RegisterModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onOpenLoginModal: () => void;
};

export const RegisterModal = ({
  onOpenLoginModal,
  isOpen,
  onClose,
}: RegisterModalProps) => {
  //   const { registerUser } = useAuth();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showLoginLink, setShowLoginLink] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número."
      );
      return;
    }

    setError("");

    // const userData = { fullName, email, password, age: parseInt(age, 10)};

    try {
      //   const result = await registerUser(userData);
      //   console.log("Usuario registrado exitosamente:", result);
      onClose();
      onOpenLoginModal();
    } catch (error: any) {
      setError(error.message || "Error al registrar el usuario");
    }
  };

  const bgColor = "#c0172b"; // Color for the button

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
              ¡Únete a la madriguera!
            </ModalHeader>
            <ModalBody>
              <form onSubmit={handleSubmit} className="flex flex-col gap-1">
                <Input
                endContent={<UserIcon className="text-xl text-[#c0172b] pointer-events-none flex-shrink-0" />}
                  type="text"
                  value={fullName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFullName(e.target.value)}
                  required
                  label="Nombre completo"
                  variant="flat"
                ></Input>
                <Input
                endContent={<MailIcon className="text-xl text-[#c0172b] pointer-events-none flex-shrink-0" />
                }
                  type="email"
                  required
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  label="Email"
                  variant="flat"
                />
                <Input
                endContent={<LockIcon className="text-xl text-[#c0172b] pointer-events-none flex-shrink-0" />
                }
                  type="password"
                  required
                  value={password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                  label="Contraseña"
                  variant="flat"
                />
                <Input
                
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
                  placeholder="Repite tu contraseña"
                  variant="flat"
                />
                <div className="flex py-2 px-1 justify-between">
                  <Link
                    style={{color: bgColor}}
                    href="#"
                    size="sm"
                    onPress={() => setShowLoginLink(true)}
                  >
                    Ya tienes una cuenta?
                  </Link>
                  {showLoginLink && (
                    <div
                      style={{
                        opacity: showLoginLink ? 1 : 0,
                        transition: "opacity 0.3s ease-in-out",
                      }}
                    >
                        <Link
                          href="#"
                          style={{ color: bgColor, transition: "opacity 0.3s" }}
                          size="sm"
                          onPress={async () => {
                            onClose();
                            // Wait for modal close animation (adjust timeout as needed)
                            await new Promise((resolve) => setTimeout(resolve, 300));
                            onOpenLoginModal();
                          }}
                        >
                          Inicia sesión
                        </Link>
                    </div>
                  )}
                </div>
                <ModalFooter>
                  <Button variant="shadow"  style={{backgroundColor: bgColor, color: "#f0f0f0"  }} onPress={onClose}>
                    Cerrar
                  </Button>
                  <Button type="submit" variant="shadow" style={{ backgroundColor: "white", color: "#c0172b" }} className="hover:animate-pulse">
                    Registrarse
                  </Button>
                  {error && (
                    <div className="text-[#c0172b] text-sm text-center">
                      {error}
                    </div>
                  )}
                </ModalFooter>
              </form>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

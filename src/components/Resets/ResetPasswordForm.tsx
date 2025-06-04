import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader } from "@heroui/card";

export const ResetPasswordForm = () => {
  const [params] = useSearchParams();
  const token = params.get("token");
  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const bgColor = "#c0172b";

  const handleSubmit = async () => {
    setError("");
    setSuccess("");

    if (!newPassword || !confirmPassword) {
      return setError("Completa todos los campos");
    }

    if (newPassword !== confirmPassword) {
      return setError("Las contraseñas no coinciden");
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/reset-password`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token, newPassword }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Error al restablecer la contraseña");
      }

      setSuccess("Contraseña actualizada con éxito");
      setTimeout(() => navigate("/login"), 3000);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-neutral-100">
      <Card className="w-full max-w-md">
        <CardHeader className="text-lg font-semibold text-center text-[#c0172b]">
          Restablecer contraseña
        </CardHeader>
        <CardBody className="space-y-4">
          <Input
            label="Nueva contraseña"
            placeholder="Introduce tu nueva contraseña"
            type="password"
            variant="flat"
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <Input
            label="Confirmar contraseña"
            placeholder="Repite tu nueva contraseña"
            type="password"
            variant="flat"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}
          {success && (
            <div className="text-green-600 text-sm text-center">{success}</div>
          )}

          <Button
            className="w-full"
            style={{ backgroundColor: bgColor, color: "white" }}
            onPress={handleSubmit}
          >
            Restablecer contraseña
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

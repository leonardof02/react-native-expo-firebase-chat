export const firebaseAuthErrorMessages: Record<string, string> = {
  "auth/user-not-found": "Usuario no encontrado. Verifica tu email.",
  "auth/wrong-password":
    "Contraseña incorrecta. Por favor, inténtalo de nuevo.",
  "auth/email-already-in-use":
    "El email ya está en uso. Usa otro o inicia sesión.",
  "auth/weak-password": "La contraseña debe tener al menos 6 caracteres.",
  "auth/invalid-email": "Email no válido. Verifica el formato.",
  "auth/invalid-credential":
    "Credenciales no válidas. Verifica el correo electrónico y la contraseña.",
};

export const getFirebaseAuthErrorMessage = (errorCode: string) => {
  return (
    firebaseAuthErrorMessages[errorCode] ??
    "Ha ocurrido un error. Intenta nuevamente."
  );
};

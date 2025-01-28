
const PASSWORD_REQUIREMENTS = {
    minLength: 8,
    mustHaveUppercase: true,
    mustHaveNumber: true,
    mustHaveSpecialChar: false, 
  };
  
  export const validatePassword = (password: string): { isValid: boolean; errors: string[] } => {
    const errors: string[] = [];
  
    if (password.length < PASSWORD_REQUIREMENTS.minLength) {
      errors.push(`A senha deve ter pelo menos ${PASSWORD_REQUIREMENTS.minLength} caracteres.`);
    }
  
    
    if (PASSWORD_REQUIREMENTS.mustHaveUppercase && !/[A-Z]/.test(password)) {
      errors.push('A senha deve conter pelo menos uma letra maiúscula.');
    }
  
    
    if (PASSWORD_REQUIREMENTS.mustHaveNumber && !/\d/.test(password)) {
      errors.push('A senha deve conter pelo menos um número.');
    }
  
    if (PASSWORD_REQUIREMENTS.mustHaveSpecialChar && !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      errors.push('A senha deve conter pelo menos um caractere especial.');
    }
  
    return {
      isValid: errors.length === 0,
      errors,
    };
  };
  
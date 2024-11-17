export const checkValidData = (name, email, password) => {
  const nameRegex = /^[a-zA-Z\s.'-]{1,50}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!nameRegex.test(name)) {
    if (name.trim() === "") return "Name cannot be empty.";
    if (name.length > 50) return "Name cannot exceed 50 characters.";
    return "Name can only contain letters, spaces, periods, apostrophes, and hyphens.";
  }

  if (!emailRegex.test(email)) {
    if (email.trim() === "") return "Email cannot be empty.";
    return "Please enter a valid email address (e.g., user@example.com).";
  }

  if (!passwordRegex.test(password)) {
    if (password.trim() === "") return "Password cannot be empty.";
    if (password.length < 8)
      return "Password must be at least 8 characters long.";
    if (!/[A-Z]/.test(password))
      return "Password must contain at least one uppercase letter.";
    if (!/[a-z]/.test(password))
      return "Password must contain at least one lowercase letter.";
    if (!/\d/.test(password))
      return "Password must contain at least one digit.";
    if (!/[@$!%*?&]/.test(password))
      return "Password must contain at least one special character (@$!%*?&).";
    return "Password contains invalid characters.";
  }

  return null;
};

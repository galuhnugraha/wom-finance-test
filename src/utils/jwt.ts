// src/utils/jwt.ts
export const generateToken = (email: string): string => {
  const payload = {
    email,
    exp: Date.now() + 60 * 60 * 1000,
  };
  return JSON.stringify(payload);
};

export const isTokenExpired = (token: string): boolean => {
  try {
    const decoded = JSON.parse(token);
    return Date.now() > decoded.exp;
  } catch {
    return true;
  }
};
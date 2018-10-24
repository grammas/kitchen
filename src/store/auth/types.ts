export interface EmailPassword {
  email: string;
  password: string;
}

export interface Registration extends EmailPassword {
  confirmPassword: string;
}

export interface TokenData {
  token: string;
  tokenId: string;
}

export interface PasswordTokenData extends TokenData {
  password: string;
}

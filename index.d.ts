export class InvalidTokenError extends Error {}

export interface JwtDecodeOptions {
  header?: boolean;
}

interface  jwtResponseType {
  data: object,
  iat: number,
  exp: number,
}

export default function jwtDecode(token: string, options?: JwtDecodeOptions): jwtResponseType;

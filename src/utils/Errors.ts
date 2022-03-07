import { AxiosError } from 'axios';

export function getErrorText(error: AxiosError, fallbackErrorMessage?: string): string {
  const fallback = fallbackErrorMessage || 'not found';

  if (!error.response) return fallback;

  const { data } = error.response;

  const dataMessage = data?.error || (data?.errors?.length && data?.errors[0]) || data?.message;

  return dataMessage || fallback;
}

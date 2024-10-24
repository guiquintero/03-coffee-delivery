import { z } from "zod";

export const checkoutSchema = z.object({
  cep: z.string().min(8).max(8),
  rua: z.string(),
  numero: z.string(),
  bairro: z.string(),
  cidade: z.string(),
  uf: z.string().min(2).max(2),
  complemento: z.string().optional(),
  paymentMethod: z.string(),
});

export type CheckoutZodProps = z.infer<typeof checkoutSchema>;

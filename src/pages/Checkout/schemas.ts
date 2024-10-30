import { z } from "zod";

export const checkoutSchema = z.object({
  cep: z.string().min(8, "CEP inválido").max(8, "CEP inválido"),
  rua: z.string(),
  numero: z.string(),
  bairro: z.string(),
  cidade: z.string(),
  uf: z.string().min(2,"UF inválido").max(2,"UF inválido"),
  complemento: z.string().optional(),
  paymentMethod: z.string(),
});

export type CheckoutZodProps = z.infer<typeof checkoutSchema>;

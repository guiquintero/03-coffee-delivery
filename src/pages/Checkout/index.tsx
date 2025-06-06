import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  checkoutSchema as schema,
  CheckoutZodProps as ZodProps,
} from "./schemas";
import { useState } from "react";
import { useCart } from "../../contexts/CartContext";
import {
  AddressForms,
  AddressInput,
  Button,
  ButtonSelect,
  ContainerLeft,
  ContainerRight,
  DisplayCheckout,
  FinalizingOrder,
  FinalizingOrderPrice,
  OrderSummary,
  Title,
} from "./styles";
import Local from "/src/assets/icons/local.svg";
import Dollar from "/src/assets/icons/dollar.svg";
import CreditCard from "/src/assets/icons/creditCard.svg";
import Bank from "/src/assets/icons/bank.svg";
import Money from "/src/assets/icons/money.svg";
import { CardsCheckout } from "../../components/CardsCheckout";
import { itemCartInterface } from "../../interfaces/itemCartInterface";

interface CheckBoxProps {
  icon: string;
  text: string;
  id: string;
  register: any;
}

function CheckBox({ icon, text, id, register }: CheckBoxProps) {
  return (
    <ButtonSelect>
      <input type="radio" id={id} {...register("paymentMethod")} />
      <label htmlFor={id}>
        <img src={icon} alt="" />
        {text.toUpperCase()}
      </label>
    </ButtonSelect>
  );
}

interface OrderSummary {
  id: string;
  address: {
    cep: string;
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
    uf: string;
    complemento?: string;
  };
  paymentMethod: string;
  items: itemCartInterface[];
}

export function Checkout() {
  const { register, handleSubmit, watch, reset, formState } = useForm<ZodProps>({
    resolver: zodResolver(schema),
    defaultValues:{
      cep: "",
      rua: "",
      numero: "",
      bairro: "",
      cidade: "",
      uf: "",
      complemento: "",
      paymentMethod: "",
    }
  });

  const { cart } = useCart();
  const [orderSummary, setOrderSummary] = useState<OrderSummary | null>(null);

  let isSubmitDisabled = !(
    watch("cep") &&
    watch("rua") &&
    watch("numero") &&
    watch("bairro") &&
    watch("cidade") &&
    watch("uf") &&
    watch("paymentMethod")
  );

  function handleOrder(data: ZodProps) {
    console.log(data);

    const newOrderSummary: OrderSummary = {
      id: String(new Date().getTime()),
      address: {
        cep: data.cep,
        rua: data.rua,
        numero: data.numero,
        bairro: data.bairro,
        cidade: data.cidade,
        uf: data.uf,
        complemento: data.complemento,
      },
      paymentMethod: data.paymentMethod,
      items: cart,
    }
    setOrderSummary(newOrderSummary);
    reset();
    isSubmitDisabled = false;
  }

  return (
    <DisplayCheckout onSubmit={handleSubmit(handleOrder)}>
      <FinalizingOrder>
        <Title>Complete seu pedido</Title>
        <ContainerLeft>
          <div>
            <img src={Local} alt="" />
            <div>
              <h3>Endereço de entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>
          <AddressForms>
            <AddressInput
              type="text"
              placeholder="CEP"
              id="Input1"
              {...register("cep")}
            />
            <span>{formState.errors.cep?.message}</span>
            <AddressInput
              type="text"
              placeholder="Rua"
              id="Input2"
              {...register("rua")}
            />
            <AddressInput
              type="text"
              placeholder="Número"
              id="Input3"
              {...register("numero")}
            />
            <AddressInput
              type="text"
              placeholder="Complemento"
              id="Input4"
              {...register("complemento")}
            />
            <AddressInput
              type="text"
              placeholder="Bairro"
              id="Input5"
              {...register("bairro")}
            />
            <AddressInput
              type="text"
              placeholder="Cidade"
              id="Input6"
              {...register("cidade")}
            />
            <AddressInput
              type="text"
              placeholder="UF"
              id="Input7"
              {...register("uf")}
            />
            <span>{formState.errors.uf?.message}</span>
          </AddressForms>
        </ContainerLeft>
        <ContainerLeft>
          <div>
            <img src={Dollar} alt="" />
            <div>
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>
          <div>
            <CheckBox
              icon={CreditCard}
              text="crédito"
              id="1"
              register={register}
            />
            <CheckBox icon={Bank} text="débito" id="2" register={register} />
            <CheckBox icon={Money} text="dinheiro" id="3" register={register} />
          </div>
        </ContainerLeft>
      </FinalizingOrder>
      <OrderSummary>
        <Title>Cafés selecionados</Title>
        <ContainerRight>
          <section>
          {cart.map((item, index) => (
              <CardsCheckout
                key={index}
                image={item.image}
                name={item.name}
                price={item.price.toFixed(2)}
                quantity={item.quantity}
              />
            
            ))}
          </section>
          <FinalizingOrderPrice>
          <div>
              <span>Total de itens</span>
              <span>R$ {cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <div>
              <h4>Total</h4>
              <h4>R$ {(cart.reduce((total, item) => total + item.price * item.quantity, 0) + 3.50).toFixed(2)}</h4>
            </div>
          </FinalizingOrderPrice>
          <Button type="submit" disabled={isSubmitDisabled}>
            CONFIRMAR PEDIDO
          </Button>
        </ContainerRight>
      </OrderSummary>
    </DisplayCheckout>
  );
}

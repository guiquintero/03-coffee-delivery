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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import {
  checkoutSchema as schema,
  CheckoutZodProps as ZodProps,
} from "./schemas";

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

export function Checkout() {
  const { register, handleSubmit, watch, reset } = useForm<ZodProps>({
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
            <CardsCheckout
              image="./src/assets/cafes/Americano.png"
              name="Americano"
              price="9.90"
              quantity={2}
            />
            <CardsCheckout
              image="./src/assets/cafes/Americano.png"
              name="Americano"
              price="9.90"
              quantity={2}
            />
            <CardsCheckout
              image="./src/assets/cafes/Americano.png"
              name="Americano"
              price="9.90"
              quantity={2}
            />
          </section>
          <FinalizingOrderPrice>
            <div>
              <span>Total de itens</span>
              <span>R$ 20,00</span>
            </div>
            <div>
              <span>Entraga</span>
              <span>R$ 3,50</span>
            </div>
            <div>
              <h4>Total</h4>
              <h4>R$ 23,50</h4>
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

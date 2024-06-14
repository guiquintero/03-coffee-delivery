import {
  AddressForms,
  AddressInput,
  AddressPayment,
  ButtonSelect,
  DisplayCheckout,
  FinalizingOrder,
  OrderSummary,
  PaymentOptionsDisplay,
  Title,
} from "./styles";

import Local from "/src/assets/icons/local.svg";
import Dollar from "/src/assets/icons/dollar.svg";
import CreditCard from "/src/assets/icons/creditCard.svg";
import Bank from "/src/assets/icons/bank.svg";
import Money from "/src/assets/icons/money.svg";
interface CheckBoxProps {
  icon: string;
  text: string;
  id: string;
}

function CheckBox({ icon, text, id }: CheckBoxProps) {
  return (
    <ButtonSelect>
      <input type="checkbox" id={id} />
      <label htmlFor={id}>
        <img src={icon} alt="" />
        {text.toUpperCase()}
      </label>
    </ButtonSelect>
  );
}

export function Checkout() {
  return (
    <DisplayCheckout>
      <FinalizingOrder>
        <Title>Complete seu pedido</Title>
        <AddressPayment>
          <div>
            <img src={Local} alt="" />
            <div>
              <h3>Endereço de entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>
          <AddressForms>
            <AddressInput type="text" placeholder="CEP" id="Input1" />
            <AddressInput type="text" placeholder="Rua" id="Input2" />
            <AddressInput type="text" placeholder="Número" id="Input3" />
            <AddressInput type="text" placeholder="Complemento" id="Input4" />
            <AddressInput type="text" placeholder="Bairro" id="Input5" />
            <AddressInput type="text" placeholder="Cidade" id="Input6" />
            <AddressInput type="text" placeholder="UF" id="Input7" />
          </AddressForms>
        </AddressPayment>
        <AddressPayment>
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
            <CheckBox icon={CreditCard} text="cartão de crédito" id="1"/>
            <CheckBox icon={Bank} text="cartão de débito" id="2"/>
            <CheckBox icon={Money} text="dinheiro" id="3"/>
          </div>
        </AddressPayment>
      </FinalizingOrder>
      <OrderSummary>
        <Title>Cafés selecionados</Title>
      </OrderSummary>
    </DisplayCheckout>
  );
}

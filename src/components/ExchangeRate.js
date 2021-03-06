import { RateTable } from "./RateTable";
import { CurrencyCodePicker } from "./CurrencyCodePicker";
import { AmountField } from "./AmountField";

import { useSelector } from "react-redux";

import { getAmount, getCurrencyData } from "../store/rates";
import { getCurrencyCode } from "../store/rates";

export function ExchangeRate() {
  const amount = useSelector(getAmount);
  const currencyCode = useSelector(getCurrencyCode);
  const currencyData = useSelector(getCurrencyData);
  // const [currencyData, setCurrencyData] = useState({ USD: 1.0 });

  // fetch the exchange rates the first time...
  // useEffect(() => {
  //   dispatch(changeCurrencyCode(currencyCode));
  // }, []);

  return (
    <>
      <section>
        <h1 className="ExchangeRate-header">
          Exchange Rates
          <CurrencyCodePicker currencyCode={currencyCode} />
        </h1>
      </section>
      <section>
        <AmountField amount={amount} />
      </section>
      <section>
        <RateTable currencyData={currencyData} amount={amount} />
      </section>
    </>
  );
}

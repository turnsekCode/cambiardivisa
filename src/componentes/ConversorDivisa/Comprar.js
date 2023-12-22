import React, { useEffect, useState } from "react";
import styles from "./estilosConversor.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function NuevoConversor2({ ciudad, setSelectDivisa, selectDivisa }) {
  const nombreCiudad = ciudad?.acf?.ciudad_oro;
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromAcronimo, setFromAcronimo] = useState("");
  const [nombreDivisa, setNombreDivisa] = useState("");
  const [exchangeRate, setExchangeRate] = useState("");
  const [amount, setAmount] = useState("");
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
  const [select, setSelect] = useState(null);
  const precioDividido2 = 1 / exchangeRate;
  let toAmount, fromAmount;
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = (amount * exchangeRate).toFixed(2);
  } else {
    toAmount = amount;
    fromAmount = (amount / exchangeRate).toFixed(2);
  }
  useEffect(() => {
    fetch(`https://panel.quickgold.es/archivos-cache/Fixing${nombreCiudad}.txt`)
      .then((res) => res.json())
      .then((data) => {
        setCurrencyOptions(data?.result?.Tarifas?.Divisas_Compra.reverse());
      });
  }, []);
  function handleFromAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  }
  function handleToAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  }
  function onChangeCurrency2(e) {
    setNombreDivisa(e.target.dataset.nombre);
    setExchangeRate(e.target.dataset.precio);
    setFromAcronimo(e.target.dataset.acronimo);
    setSelectDivisa(false);
  }
  return (
    <div className={styles.contenedorCalculadora}>
      <div className={styles.bloqueCalculadora}>
        <p className={styles.bloqueCalculadoraTextoSup}>
          Selecciona divisa para ver el tipo de cambio
        </p>
        <div
          className={styles.select}
          onClick={() => {
            setSelect(!select);
          }}
        >
          {selectDivisa ? (
            <>
              <p>Seleccione Divisa</p>
              <KeyboardArrowDownIcon />
            </>
          ) : (
            <>
              {fromAcronimo} | {nombreDivisa}
              <KeyboardArrowDownIcon />
            </>
          )}
          <div
            className={
              select
                ? `${styles.select_monedas} ${styles.select_activo}`
                : `${styles.select_monedas}`
            }
          >
            {currencyOptions
              ?.filter(
                (currency) =>
                  currency.Name !== "HRK" &&
                  currency.Name !== "DKK" &&
                  currency.Name !== "RUB" &&
                  currency.Name !== "NOK" &&
                  currency.Name !== "ILS" &&
                  currency.Name !== "SEK"
              )
              .map((data, i) =>
                select ? (
                  <div
                    key={i}
                    className={styles.contenedor_list}
                    data-acronimo={data?.Productos[0].Acronimo}
                    data-nombre={data?.Productos[0].Nombre}
                    data-precio={(data?.Productos[0].Precio / 1000).toFixed(4)}
                    onClick={(e) => {
                      onChangeCurrency2(e);
                    }}
                  >
                    <div
                      data-acronimo={data?.Productos[0].Acronimo}
                      data-nombre={data?.Productos[0].Nombre}
                      data-precio={(data?.Productos[0].Precio / 1000).toFixed(
                        4
                      )}
                      className={styles.bandera}
                      onClick={(e) => {
                        onChangeCurrency2(e);
                      }}
                    >
                      <img
                        onClick={(e) => {
                          onChangeCurrency2(e);
                        }}
                        width={35}
                        height={23}
                        src={`/assets/${data?.Productos[0].Acronimo}.png`}
                        data-acronimo={data?.Productos[0].Acronimo}
                        data-nombre={data?.Productos[0].Nombre}
                        data-precio={(data?.Productos[0].Precio / 1000).toFixed(
                          4
                        )}
                        alt={data?.Productos[0].Acronimo}
                      />
                    </div>
                    <div
                      data-acronimo={data?.Productos[0].Acronimo}
                      data-nombre={data?.Productos[0].Nombre}
                      data-precio={(data?.Productos[0].Precio / 1000).toFixed(
                        4
                      )}
                      className={styles.moneda}
                      onClick={(e) => {
                        onChangeCurrency2(e);
                      }}
                    >
                      <p
                        className={styles.acronimo}
                        onClick={(e) => {
                          onChangeCurrency2(e);
                        }}
                        data-acronimo={data?.Productos[0].Acronimo}
                        data-nombre={data?.Productos[0].Nombre}
                        data-precio={(data?.Productos[0].Precio / 1000).toFixed(
                          4
                        )}
                      >
                        {data?.Productos[0].Acronimo}
                      </p>
                      <span
                        onClick={(e) => {
                          onChangeCurrency2(e);
                        }}
                        className={styles.nombre}
                        data-acronimo={data?.Productos[0].Acronimo}
                        data-nombre={data?.Productos[0].Nombre}
                        data-precio={(data?.Productos[0].Precio / 1000).toFixed(
                          4
                        )}
                      >
                        | {data?.Productos[0].Nombre}
                      </span>
                    </div>
                  </div>
                ) : (
                  ""
                )
              )}
          </div>
        </div>
        <div className={styles.contenedorTipoCambio}>
          <div className={styles.tipoCambioIzq}>
            {selectDivisa ? (
              <p>-</p>
            ) : (
              <p>
                1 {fromAcronimo} = <span>{exchangeRate} €</span>
              </p>
            )}
          </div>
          <div className={styles.tipoCambioDer}>
            {selectDivisa ? (
              <p>-</p>
            ) : (
              <p>
                1 EUR ={" "}
                <span>
                  {precioDividido2.toFixed(4)} {fromAcronimo}
                </span>
              </p>
            )}
          </div>
        </div>
        <div className={styles.contenedorInputs}>
          <div className={styles.contenedorInputSuperior}>
            {selectDivisa ? (
              <p>-</p>
            ) : (
              <p className={styles.acronimoTexto}>{fromAcronimo}</p>
            )}
            {selectDivisa ? (
              <input
                type="number"
                className={styles.inputSuperior}
                value=""
                disabled
                placeholder="Cantidad"
              />
            ) : (
              <input
                className={styles.inputSuperior}
                type="number"
                value={fromAmount}
                onChange={handleFromAmountChange}
                placeholder="Cantidad"
              />
            )}
          </div>
          <div className={styles.contenedorInputSuperior}>
            {selectDivisa ? (
              <p>-</p>
            ) : (
              <p className={styles.acronimoTexto}>EUR</p>
            )}
            {selectDivisa ? (
              <input
                className={styles.inputInferior}
                value=""
                placeholder="Cantidad"
                disabled
                type="number"
              />
            ) : (
              <input
                type="number"
                className={styles.inputInferior}
                value={toAmount}
                onChange={handleToAmountChange}
                placeholder="Cantidad"
              />
            )}
          </div>
        </div>
      </div>
      <div className={styles.bloqueBotonLamar}>
        <p className={styles.bloqueBotonLamarTexto}>
          ¿Sabías que hacemos <br></br>
          <strong>mejoras de precio por cantidad</strong>?.
          <br></br>
          <br></br>¡LLÁMANOS!
        </p>
        <a
          title={`Llamar a Quickgold ${ciudad?.acf?.ciudad_landing}`}
          href={`tel:${ciudad?.acf?.telefono}`}
          className={styles.botonLlamarTienda}
        >
          LLAMA GRATIS
        </a>
      </div>{" "}
      <p className={styles.bloqueDivisaHabitualTexto}>
        Cambios de divisa más habituales
      </p>
      <div className={styles.bloqueDivisaHabitual}>
        <div className={styles.contenedorDivisaHabitual}>
          <p
            onClick={(e) => onChangeCurrency2(e)}
            data-nombre={currencyOptions[0]?.Productos[0].Nombre}
            data-acronimo={currencyOptions[0]?.Productos[0].Acronimo}
            data-precio={(
              currencyOptions[0]?.Productos[0].Precio / 1000
            ).toFixed(4)}
            className={styles.bloqueDivisaHabitual1}
          >
            Libra a Euro
          </p>
          <p
            onClick={(e) => onChangeCurrency2(e)}
            data-nombre={currencyOptions[1]?.Productos[0].Nombre}
            data-acronimo={currencyOptions[1]?.Productos[0].Acronimo}
            data-precio={(
              currencyOptions[1]?.Productos[0].Precio / 1000
            ).toFixed(4)}
            className={styles.bloqueDivisaHabitual2}
          >
            Dólar USA a Euro
          </p>
          <p
            onClick={(e) => onChangeCurrency2(e)}
            data-nombre={currencyOptions[5]?.Productos[0].Nombre}
            data-acronimo={currencyOptions[5]?.Productos[0].Acronimo}
            data-precio={(
              currencyOptions[5]?.Productos[0].Precio / 1000
            ).toFixed(4)}
            className={styles.bloqueDivisaHabitual3}
          >
            Franco Suizo a Euro
          </p>
        </div>
        <div className={styles.contenedorDivisaHabitual}>
          <p
            onClick={(e) => onChangeCurrency2(e)}
            data-nombre={currencyOptions[12]?.Productos[0].Nombre}
            data-acronimo={currencyOptions[12]?.Productos[0].Acronimo}
            data-precio={(
              currencyOptions[12]?.Productos[0].Precio / 1000
            ).toFixed(4)}
            className={styles.bloqueDivisaHabitual4}
          >
            Real brasileño a Euro
          </p>
          <p
            onClick={(e) => onChangeCurrency2(e)}
            data-nombre={currencyOptions[15]?.Productos[0].Nombre}
            data-acronimo={currencyOptions[15]?.Productos[0].Acronimo}
            data-precio={(
              currencyOptions[15]?.Productos[0].Precio / 1000
            ).toFixed(4)}
            className={styles.bloqueDivisaHabitual5}
          >
            Corona checa a Euro
          </p>
          <p
            onClick={(e) => onChangeCurrency2(e)}
            data-nombre={currencyOptions[19]?.Productos[0].Nombre}
            data-acronimo={currencyOptions[19]?.Productos[0].Acronimo}
            data-precio={(
              currencyOptions[19]?.Productos[0].Precio / 1000
            ).toFixed(4)}
            className={styles.bloqueDivisaHabitual6}
          >
            Peso chileno a Euro
          </p>
        </div>
      </div>
    </div>
  );
}

export default NuevoConversor2;

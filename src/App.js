import { useState } from "react";
export default function App() {
  return (
    <div>
      <ShareCalculator></ShareCalculator>
    </div>
  );
}

function ShareCalculator() {
  const [amount, setAmount] = useState("");
  const [percentage1, setPercentage1] = useState();
  const [percentage2, setPercentage2] = useState();

  const youPay = (percentage1 / 100) * amount;
  const friendPay = amount - youPay;

  return (
    <div>
      <Bill amount={amount} onSetAmount={setAmount}></Bill>
      <SharePercentage onSelelct={setPercentage1} percentage={percentage1}>
        How much did you like it?
      </SharePercentage>
      <SharePercentage onSelelct={setPercentage2} percentage={percentage2}>
        How much did your friend like it?
      </SharePercentage>
      <Output amount={amount} youPay={youPay} friendPay={friendPay}></Output>
      <Reset></Reset>
    </div>
  );
}

function Bill({ amount, onSetAmount }) {
  return (
    <div>
      <h3>How much was the bill</h3>
      <input
        type="text"
        value={amount}
        onChange={(e) => onSetAmount(Number(e.target.value))}
      />
    </div>
  );
}

function SharePercentage({ percentage, onSelelct, children }) {
  return (
    <div>
      <span>{children}</span>
      <select
        value={percentage}
        onChange={(e) => onSelelct(Number(e.target.value))}
      >
        <option value="5">Disatisfied</option>
        <option value="10">Not too bad!</option>
        <option value="50">I like it</option>
        <option value="80">It's Amazing</option>
      </select>
    </div>
  );
}

function Output({ amount, youPay, friendPay }) {
  return (
    <h3>
      In total ${amount} , your pay {youPay} & your friend pay {friendPay}{" "}
    </h3>
  );
}

function Reset() {
  return <button>Reset</button>;
}

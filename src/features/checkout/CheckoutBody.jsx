import CheckoutForm from "./CheckoutForm";
import CheckoutSummary from "./CheckoutSummary";

export default function CheckoutBody() {
  return (
    <div className="flex flex-row ">
      <div className="w-full flex justify-end ">
        <CheckoutForm />
      </div>
      <hr />
      <CheckoutSummary />
    </div>
  );
}

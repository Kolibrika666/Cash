import { CashType } from "../../../api/cashApi";

function IncomeItem({ date, target, cash }: CashType) {
  return (
    <>
      <div className="table">
        <p>{date}</p>
        <p>{target}</p>
        <p>{cash}</p>
      </div>
      <hr />
    </>
  );
}
export default IncomeItem;

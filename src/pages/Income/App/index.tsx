import { useAppSelector } from "../../../store";
import IncomeForm from "../Components/IncomeForm";
import IncomeItem from "../Components/IncomeItem";

function Income() {
  const incomeList = useAppSelector((store) => store.cash.cashList);
  return (
    <>
      <IncomeForm />
      <IncomeItem date="Дата" cash="Сумма" target="Источник" />
      {incomeList.map((item) => (
        <IncomeItem date={item.date} cash={item.cash} target={item.target} />
      ))}
    </>
  );
}

export default Income;

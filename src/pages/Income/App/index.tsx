import IncomeForm from "../Components/IncomeForm";
import IncomeItem from "../Components/IncomeItem";

function Income() {
  return (
    <>
      <IncomeForm />
      <IncomeItem date="Дата" cash={100} target="Источник" />
    </>
  );
}

export default Income;

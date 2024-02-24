import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../store";
import { getIncome, getIncomeData } from "../../../api/cashApi";
import { setIncomeList } from "../../../store/cash/cashSlice";

function IncomeForm() {
  const [cash, setCash] = useState(0);
  const [target, setTarget] = useState("");
  const dispatch = useAppDispatch();

  const getIncomeList = async () => {
    const data = await getIncomeData();
    dispatch(setIncomeList(data));
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    getIncome(cash, target);
    getIncomeList();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setTarget(e.target.value)}
        placeholder="Источник"
      />
      <input
        type="text"
        onChange={(e) => setCash(+e.target.value)}
        placeholder="Сумма"
      />
      <button type="submit">Создать</button>
    </form>
  );
}
export default IncomeForm;

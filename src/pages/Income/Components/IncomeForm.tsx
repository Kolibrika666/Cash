import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../store";
import { getIncome, getIncomeData } from "../../../api/cashApi";
import { setCashList, setCashSum } from "../../../store/cash/cashSlice";

function IncomeForm() {
  const [cash, setCash] = useState(0);
  const [target, setTarget] = useState("");

  const getIncomeList = async () => {
    const data = await getIncomeData();

    dispatch(setCashList(data));
  };

  useEffect(() => {
    getIncomeList();
  }, []);

  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    getIncome(cash, target);
    dispatch(setCashSum(cash));
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

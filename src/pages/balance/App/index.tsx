import { useAppSelector } from "../../../store";

function Balance() {
  const sumExpenses = useAppSelector((store) => store.cash.totalExpenses);
  const sumIncome = useAppSelector((store) => store.cash.totalIncome);

  return (
    <section>
      <article>
        Доходы за всё время <span>{sumIncome}</span>
      </article>
      <article>
        Расходы за всё время
        <span>{sumExpenses}</span>
      </article>
      <article>
        Итог <span>{sumIncome + sumExpenses}</span>
      </article>
    </section>
  );
}

export default Balance;

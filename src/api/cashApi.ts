export type CashType = {
  id?: string;
  date: string;
  target: string;
  cash: number | string;
};

export const getIncome = async (cash: number, target: string) => {
  const response = await fetch(
    "https://finanse-7029e-default-rtdb.europe-west1.firebasedatabase.app/income.json",
    {
      method: "POST",
      body: JSON.stringify({
        date: new Date().toLocaleDateString(),
        cash,
        target,
      }),
    }
  );
  if (response.status === 200) return "success";
  throw new Error("fetch error");
};

export const getIncomeData = async () => {
  const response = await fetch(
    "https://finanse-7029e-default-rtdb.europe-west1.firebasedatabase.app/income.json"
  );

  if (response.status !== 200) throw new Error("fetch error");
  const data = await response.json(); //type
  const correctData: CashType[] = [];
  for (const item in data) {
    correctData.push({
      id: item,
      ...data[item],
    });
  }
  return correctData;
};

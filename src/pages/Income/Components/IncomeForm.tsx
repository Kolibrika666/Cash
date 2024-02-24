function IncomeForm() {
  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value="" onChange={() => {}} placeholder="Источник" />
      <input type="text" value="" onChange={() => {}} placeholder="Сумма" />
      <button type="submit">Создать</button>
    </form>
  );
}

export default IncomeForm;

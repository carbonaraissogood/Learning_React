function Food() {
  const food1 = 'orange';
  const food2 = 'grapes';

  return (
    <ul>
      <li>{food1}</li>
      <li>{food2.toUpperCase()}</li>
      <li>Apple</li>
    </ul>
  );
};

export default Food;
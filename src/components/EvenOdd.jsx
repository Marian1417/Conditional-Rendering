function EvenOdd({ number }) {
  const isEven = number % 2 === 0;

  return <div>{isEven ? <p>{number} is even</p> : <p>{number} is odd</p>}</div>;
}

export default EvenOdd;

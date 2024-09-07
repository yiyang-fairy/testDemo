export default function B() {
  const getData = () => {
    // return ["a", "b", "c"];
    return "";
  };
  const data = getData();

  const lis = data.map((item: any, index: number) => (
    <li key={index}>{item}</li>
  ));
  return <div className="bg-pink-100 p-3">{lis}</div>;
}

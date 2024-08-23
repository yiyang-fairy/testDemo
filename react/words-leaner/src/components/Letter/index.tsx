export default function Letter({
  letter,
  visible,
}: {
  letter: string;
  visible: boolean;
}) {
  return <div>{visible ? letter : "_"}</div>;
}

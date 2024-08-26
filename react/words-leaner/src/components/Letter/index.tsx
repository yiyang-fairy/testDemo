export default function Letter({
  letter,
  visible,
  correct,
}: {
  letter: string;
  visible: boolean;
  correct: boolean;
}) {
  return (
    <div className={"text-5xl " + (correct ? "text-green-600" : "")}>
      {visible ? letter : "_"}
    </div>
  );
}

export default function Letter({
  letter,
  visible,
  correct,
}: {
  letter: string;
  visible: boolean;
  correct: true | false | "";
}) {
  return (
    <div
      className={
        "text-5xl m-3 text-black " +
        (correct ? "text-green-600" : "text-red-600")
      }
    >
      {visible ? letter : "_"}
    </div>
  );
}

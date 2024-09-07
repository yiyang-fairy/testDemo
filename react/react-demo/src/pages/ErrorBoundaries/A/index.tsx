import B from "../B";
import ErrorBoundary from "../ErrorBoundary";
export default function A() {
  return (
    <div className="bg-pink-100 p-3">
      A
      <ErrorBoundary fallback={<h1>应用出错了</h1>}>
        <B></B>
      </ErrorBoundary>
    </div>
  );
}

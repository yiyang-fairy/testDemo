export default function B({ name }: { name: string }) {
  return (
    <div>
      <div>
        子组件 B：
        <p>名字：{name}</p>
      </div>
    </div>
  );
}

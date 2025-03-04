import Chart from "./components/Side/Chart";

export default function TagBasedUsage() {
  return (
    <div className="space-y-6">
      <div className="card">
        <Chart title="Total Spend Per Tag" />
      </div>

      <div className="card">
        <Chart title="Daily Spend Per Tag" />
      </div>
    </div>
  );
}

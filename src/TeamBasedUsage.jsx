import Chart from "./components/Side/Chart";

export default function TeamBasedUsage() {
  return (
    <div className="space-y-6">
      <div className="card">
        <Chart title="Total Spend Per Team" />
      </div>

      <div className="card">
        <Chart title="Daily Spend Per Team" />
      </div>
    </div>
  );
}

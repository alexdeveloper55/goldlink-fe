"use client"

import { UserData } from "./data/UserData"
import PieChart from "./components/PieChart"

export default function Home() {
  const userData = {
    labels: UserData.map((data) => data.strategy),
    datasets: [
      {
        label: "Lending Allocations",
        data: UserData.map((data) => data.allocation),
        backgroundColor: ["#855CF8", "#E289F2", "#7879F1", "#B085FF"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  }
  return (
    <main className="mx-auto width-max background">
      <div className="card-container flex mx-auto w-11/12 py-8 ">
        <div className="bg-white drop-shadow-md w-1/3 mx-8">
          <PieChart chartData={userData} />
        </div>

        <div className=" bg-white drop-shadow-md card w-2/3 ">
          <h1>Strategy Performance</h1>
          <table className="w-11/12 mx-auto mt-12">
            <thead>
              <tr className="border-4 h-12">
                <th>Strategy</th>
                <th>TVL</th>
                <th>Volatility</th>
                <th>Collateral</th>
                <th>PNL</th>
              </tr>
            </thead>
            <tbody>
              {UserData.map((data) => (
                <tr key={data.id} className="border-4 h-12">
                  <td>{data.strategy}</td>
                  <td>{data.tvl}</td>
                  <td
                    className={`${
                      data.volatility === "Low" ? "v-low" : data.volatility === "Medium" ? "v-medium" : "v-high"
                    } pill text-center`}
                  >
                    {data.volatility}
                  </td>
                  <td>{data.collateral}</td>
                  <td className={data.pnl > 0 ? "pnl-green" : "pnl-red"}>{data.pnl}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}

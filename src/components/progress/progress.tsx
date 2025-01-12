export interface progressProps {
    id: string,
    label: string,
    percent: number
}

export default function Progress({ label, percent }: progressProps) {

    const color = percent > 89 ? "#3CF369" : percent > 69 ? "#3879E9" : percent > 49 ? "#F16529" : "#F33C51"

  return (
          <div className="w-full flex flex-col gap-2 py-4">
            <p>{label}</p>
            <div style={{ color }} className="flex gap-6 items-center justify-between">
              <div style={{ backgroundColor: color + "20"}} className="rounded-full w-full">
                <p style={{ backgroundColor: color, width: percent + "%" }} className="rounded-full p-1"></p>
              </div>
              <p className="font-bold">{percent}%</p>
            </div>
          </div>
  );
}

import { CircleCheck } from "lucide-react";

export default function AtcivitiesDetails() {
  return (
    <div className="space-y-8">
      <div className="space-y-2.5">
        <div className="flex gap-2 items-baseline">
          <span className="text-zinc-300 text-3xl font-semibold">Dia 17</span>
          <span className="text-zinc-500 text-sm">Sábado</span>
        </div>
        <p className="text-zinc-500 text-sm">
          Nenhuma atividade cadastrada nessa data
        </p>
      </div>

      <div className="space-y-2.5">
        <div className="flex gap-2 items-baseline">
          <span className="text-zinc-300 text-3xl font-semibold">Dia 18</span>
          <span className="text-zinc-500 text-sm">Sábado</span>
        </div>
        <div className="space-y-2.5">
          <div className="bg-zinc-900 shadow-shape px-4 py-4 flex items-center justify-between rounded-xl">
            <div className="flex items-center gap-2">
              <CircleCheck size={24} className="text-lime-300" />
              <span className="text-zinc-300">Academia em grupo</span>
            </div>
            <span className="text-zinc-400">08:00h</span>
          </div>
        </div>
        <div className="space-y-2.5">
          <div className="bg-zinc-900 shadow-shape px-4 py-4 flex items-center justify-between rounded-xl">
            <div className="flex items-center gap-2">
              <CircleCheck size={24} className="text-lime-300" />
              <span className="text-zinc-300">Academia em grupo</span>
            </div>
            <span className="text-zinc-400">08:00h</span>
          </div>
        </div>
        <div className="space-y-2.5">
          <div className="bg-zinc-900 shadow-shape px-4 py-4 flex items-center justify-between rounded-xl">
            <div className="flex items-center gap-2">
              <CircleCheck size={24} className="text-lime-300" />
              <span className="text-zinc-300">Academia em grupo</span>
            </div>
            <span className="text-zinc-400">08:00h</span>
          </div>
        </div>
      </div>
    </div>
  );
}

import { CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";

export default function GuestList() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl text-zinc-300">Convidados</h2>

      <div className="space-y-5">
        <div className="flex justify-between items-center gap-4">
          <div className="space-y-1.5 flex flex-col flex-1">
            <span className="text-zinc-300">Jessica White</span>
            <span className="text-zinc-400 text-xs truncate">
              jessica@emial.com
            </span>
          </div>
          <CircleDashed size={24} className="text-zinc-400" />
        </div>
        <div className="flex justify-between items-center gap-4">
          <div className="space-y-1.5 flex flex-col flex-1">
            <span className="text-zinc-300">Jessica White</span>
            <span className="text-zinc-400 text-xs truncate">
              jessica@emial.com
            </span>
          </div>
          <CircleDashed size={24} className="text-zinc-400" />
        </div>
      </div>

      <Button
        /* onClick={closeGuestInput} */
        variant="secondary"
        size="full"
      >
        <UserCog size={20} className="text-zinc-200" />
        Gerenciar Convidados
      </Button>
    </div>
  );
}

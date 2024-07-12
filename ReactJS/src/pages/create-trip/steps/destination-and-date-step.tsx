import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";
import { Button } from "../../../components/button";

interface DestinationAndDateStepProps {
  isGuestInputOpen: boolean;
  openGuestInput: () => void;
  closeGuestInput: () => void;
}

export default function DestinationAndDateStep({
  isGuestInputOpen,
  openGuestInput,
  closeGuestInput,
}: DestinationAndDateStepProps) {
  return (
    <div className="h-16 bg-zinc-900 rounded-xl flex items-center shadow-shape px-4">
      <div className="flex items-center gap-2 flex-1">
        <MapPin size={24} className="text-zinc-300" />
        <input
          type="text"
          placeholder="Para onde quer ir?"
          className="bg-transparent text-lg placeholder-zinc-400 text-zinc-400
              focus:outline-none"
        />
      </div>

      <div className="flex items-center gap-2 flex-1">
        <Calendar size={24} className="text-zinc-300" />
        <input
          type="text"
          placeholder="Quando?"
          className="bg-transparent text-lg placeholder-zinc-400 text-zinc-400 w-20
              focus:outline-none"
        />
      </div>

      {isGuestInputOpen ? (
        <Button onClick={closeGuestInput} variant="secondary" size="default">
          Alterar local/data
          <Settings2 size={20} className="text-zinc-200" />
        </Button>
      ) : (
        <Button onClick={openGuestInput} variant="primary" size="default">
          Continuar
          <ArrowRight size={20} className="text-lime-950" />
        </Button>
      )}
    </div>
  );
}

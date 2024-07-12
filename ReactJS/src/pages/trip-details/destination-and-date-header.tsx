import { MapPin, Calendar, Settings2 } from "lucide-react";
import { Button } from "../../components/button";

export default function DestinationAndDateHeader() {
  return (
    <div className="px-4 h-16 rounded-lg bg-zinc-900 shadow-shape flex items-center justify-between">
      <div className="flex items-center gap-2">
        <MapPin size={24} className="text-zinc-400" />
        <span className="text-zinc-400">Lisboa, Portugal</span>
      </div>

      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <Calendar size={24} className="text-zinc-400" />
          <span className="text-zinc-400">13 a 23 de Agosto</span>
        </div>

        <Button variant="secondary">
          Alterar local/data
          <Settings2 size={20} className="text-zinc-200" />
        </Button>
      </div>
    </div>
  );
}

import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/button";

export default function ImportantLinks() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl text-zinc-300">Links Importantes</h2>

      <div className="space-y-5">
        <div className="flex justify-between items-center gap-4">
          <div className="space-y-1.5 flex flex-col flex-1">
            <span className="text-zinc-300">Reserva do airbnb</span>
            <a
              href="/"
              className="text-zinc-400 text-xs truncate hover:text-zinc-200"
            >
              https://links-asiudhauichduiashdcasiuhcdausidchsaicdyausdauydgasuydga
            </a>
          </div>
          <Link2 size={24} className="text-zinc-400" />
        </div>
        <div className="flex justify-between items-center gap-4">
          <div className="space-y-1.5 flex flex-col flex-1">
            <span className="text-zinc-300">Reserva do airbnb</span>
            <a
              href="/"
              className="text-zinc-400 text-xs truncate hover:text-zinc-200"
            >
              https://links-asiudhauichduiashdcasiuhcdausidchsaicdyausdauydgasuydga
            </a>
          </div>
          <Link2 size={24} className="text-zinc-400" />
        </div>
      </div>

      <Button
        /* onClick={closeGuestInput} */
        variant="secondary"
        size="full"
      >
        <Plus size={20} className="text-zinc-200" />
        Cadastrar novo link
      </Button>
    </div>
  );
}

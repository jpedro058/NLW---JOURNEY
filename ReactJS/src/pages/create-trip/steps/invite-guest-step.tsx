import { ArrowRight, UserRoundPlus } from "lucide-react";
import { Button } from "../../../components/button";

interface InviteGuestStepProps {
  openModal: () => void;
  openConfirmTrip: () => void;
  emailsToInvite: string[];
}

export default function InviteGuestStep({
  openModal,
  openConfirmTrip,
  emailsToInvite,
}: InviteGuestStepProps) {
  return (
    <div className="h-16 bg-zinc-900 rounded-xl flex items-center shadow-shape px-4">
      <div onClick={openModal} className="flex items-center gap-2 flex-1">
        <UserRoundPlus size={24} className="text-zinc-300" />
        {emailsToInvite.length ? (
          <span className="text-zinc-300">
            {emailsToInvite.length} convidados
          </span>
        ) : (
          <span className="text-zinc-400">Convide seus amigos</span>
        )}
      </div>
      <Button onClick={openConfirmTrip} variant="primary" size="default">
        Confirmar Viagem
        <ArrowRight size={20} className="text-lime-950" />
      </Button>
    </div>
  );
}

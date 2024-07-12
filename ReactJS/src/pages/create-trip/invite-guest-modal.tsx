import { AtSign, Plus, X } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../components/button";

interface InviteGuestModalProps {
  closeModal: () => void;
  addNewEmail: (event: FormEvent<HTMLFormElement>) => void;
  removeEmail: (email: string) => void;
  emailsToInvite: string[];
}

export default function InviteGuestModal({
  addNewEmail,
  closeModal,
  emailsToInvite,
  removeEmail,
}: InviteGuestModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-zinc-900 w-[640px] rounded-lg p-4 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-zinc-300 text-xl font-medium">
            Selecionar convidados
          </h2>
          <X
            size={24}
            className="text-zinc-300 cursor-pointer"
            onClick={closeModal}
          />
        </div>
        <p className="text-zinc-500 text-sm">
          Os convidados irão receber e-mails para confirmar a participação na
          viagem
        </p>
        <div className="flex flex-wrap gap-2">
          {emailsToInvite?.map((email) => (
            <div className="flex items-center justify-between gap-4 py-1.5 px-2.5 rounded-md bg-zinc-800">
              <span className="text-zinc-300">{email}</span>
              <X
                size={16}
                className="text-zinc-300 cursor-pointer"
                onClick={() => removeEmail(email)}
              />
            </div>
          ))}
        </div>

        <div className="w-full bg-zinc-800 h-px"></div>

        <form
          onSubmit={addNewEmail}
          className="p-2.5 bg-zinc-950 border border-zinc-900 rounded-lg flex items-center gap-2"
        >
          <AtSign size={20} className="text-zinc-400 ms-2" />
          <input
            type="email"
            name="email"
            placeholder="Convide seus amigos por e-mail"
            className="bg-transparent text-md placeholder-zinc-400 text-zinc-400 flex-1
              focus:outline-none"
          />
          <Button type="submit" variant="primary" size="default">
            Convidar
            <Plus size={20} className="text-lime-950" />
          </Button>
        </form>
      </div>
    </div>
  );
}

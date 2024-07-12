import { Plus, User, X } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../components/button";

interface ConfirmTripModalProps {
  closeConfirmTrip: () => void;
  createTrip: (event: FormEvent<HTMLFormElement>) => void;
}

export default function ConfirmTripModal({
  closeConfirmTrip,
  createTrip,
}: ConfirmTripModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-zinc-900 w-[640px] rounded-lg p-4 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-zinc-300 text-xl font-medium">
            Confirmar criação de viagem
          </h2>
          <X
            size={24}
            className="text-zinc-300 cursor-pointer"
            onClick={closeConfirmTrip}
          />
        </div>
        <p className="text-zinc-500 text-sm">
          Para concluir a criação da viagem para{" "}
          <span className="font-semibold text-zinc-100">Lisboa</span> nas datas
          de <span className="font-semibold text-zinc-100">17/01/02</span>
          preencha os campos abaixo
        </p>

        <form
          onSubmit={createTrip}
          className="flex items-start flex-col gap-2 w-full"
        >
          <div className="flex gap-2 items-center py-4 p-2.5 bg-zinc-950 border border-zinc-900 rounded-lg flex-1 min-w-full">
            <User size={20} className="text-zinc-400 ms-2" />
            <input
              type="text"
              name="name"
              placeholder="Seu nome completo"
              className="bg-transparent text-md placeholder-zinc-400 text-zinc-400 flex-1
                  focus:outline-none"
            />
          </div>
          <div className="flex gap-2 items-center py-4 p-2.5 bg-zinc-950 border border-zinc-900 rounded-lg flex-1 min-w-full">
            <User size={20} className="text-zinc-400 ms-2" />
            <input
              type="email"
              name="email"
              placeholder="Seu email pessoal"
              className="bg-transparent text-md placeholder-zinc-400 text-zinc-400 flex-1
                  focus:outline-none"
            />
          </div>
          <Button type="submit" size="full" variant="primary">
            Confirmar Criação de Viagem
            <Plus size={20} className="text-lime-950" />
          </Button>
        </form>
      </div>
    </div>
  );
}

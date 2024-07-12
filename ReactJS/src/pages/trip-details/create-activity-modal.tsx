import { Calendar, Tag, X } from "lucide-react";
import { Button } from "../../components/button";
import { FormEvent } from "react";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";

interface CreateActivityModalProps {
  closeCreateActivityModal: () => void;
}

export function CreateActivityModal({
  closeCreateActivityModal,
}: CreateActivityModalProps) {
  const { tripId } = useParams();

  async function createActivity(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const title = data.get("title")?.toString();
    const occurs_at = data.get("occurs_at")?.toString();

    await api.post(`/trips/${tripId}/activities`, {
      title,
      occurs_at,
    });

    closeCreateActivityModal();
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-zinc-900 w-[640px] rounded-lg p-4 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-zinc-300 text-xl font-medium">
            Cadastrar Atividade
          </h2>
          <X
            size={24}
            className="text-zinc-300 cursor-pointer"
            onClick={closeCreateActivityModal}
          />
        </div>
        <p className="text-zinc-500 text-sm">
          Todos os convidados irão receber notificações sobre essa atividade
        </p>

        <form
          onSubmit={createActivity}
          className="flex items-start flex-col gap-2 w-full"
        >
          <div className="flex gap-2 items-center py-4 p-2.5 bg-zinc-950 border border-zinc-900 rounded-lg flex-1 min-w-full">
            <Tag size={20} className="text-zinc-400 ms-2" />
            <input
              type="text"
              name="title"
              required
              placeholder="Qual atividade deseja fazer?"
              className="bg-transparent text-md placeholder-zinc-400 text-zinc-400 flex-1
                        focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-2 min-w-full">
            <div className="flex gap-2 items-center py-4 p-2.5 bg-zinc-950 border border-zinc-900 rounded-lg w-full">
              <Calendar size={20} className="text-zinc-400 ms-2" />
              <input
                type="datetime-local"
                name="occurs_at"
                placeholder="Data e hora"
                required
                className="bg-transparent text-md placeholder-zinc-400 text-zinc-400 flex-1 [color-scheme:dark] w-full
                  focus:outline-none"
              />
            </div>
          </div>

          <Button size="full" variant="primary" type="submit">
            Salvar atividade
          </Button>
        </form>
      </div>
    </div>
  );
}

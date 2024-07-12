import { Plus } from "lucide-react";
import { useState } from "react";
import { CreateActivityModal } from "./create-activity-modal";
import ImportantLinks from "./important-links";
import GuestList from "./guest-list";
import AtcivitiesDetails from "./activities-details";
import DestinationAndDateHeader from "./destination-and-date-header";

export default function TripDetailsPage() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
    useState(false);

  function openCreateActivityModal() {
    setIsCreateActivityModalOpen(true);
  }

  function closeCreateActivityModal() {
    setIsCreateActivityModalOpen(false);
  }

  return (
    <div className="max-w-[1100px] px-6 py-10 mx-auto space-y-8">
      <DestinationAndDateHeader />

      <main className="flex gap-16 px-4">
        <div className="flex-1 space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-zinc-300 text-3xl font-medium">Atividades</h2>
            <button
              onClick={openCreateActivityModal}
              type="submit"
              className="bg-lime-300 text-lime-950 rounded-lg py-2 px-4 font-medium flex items-center justify-center gap-2 hover:bg-lime-400"
            >
              <Plus size={20} className="text-lime-950" />
              Cadastrar atividade
            </button>
          </div>

          <AtcivitiesDetails />
        </div>

        <div className="w-80 space-y-6">
          <ImportantLinks />

          <div className="w-full bg-zinc-700 h-px"></div>

          <GuestList />
        </div>
      </main>

      {isCreateActivityModalOpen && (
        <CreateActivityModal
          closeCreateActivityModal={closeCreateActivityModal}
        />
      )}
    </div>
  );
}

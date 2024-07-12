import { ArrowRight, Calendar, MapPin, Settings2, X } from "lucide-react";
import { Button } from "../../../components/button";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

interface DestinationAndDateStepProps {
  isGuestInputOpen: boolean;
  openGuestInput: () => void;
  closeGuestInput: () => void;
  setDestination: (destination: string) => void;
  setEventDate: (eventDate: DateRange | undefined) => void;
  eventDate: DateRange | undefined;
}

export default function DestinationAndDateStep({
  isGuestInputOpen,
  openGuestInput,
  closeGuestInput,
  setDestination,
  eventDate,
  setEventDate,
}: DestinationAndDateStepProps) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  function openDatePicker() {
    setIsDatePickerOpen(true);
  }

  function closeDatePicker() {
    setIsDatePickerOpen(false);
  }

  const displayDate =
    eventDate && eventDate.from && eventDate.to
      ? format(eventDate.from, "d 'de' LLL'.'").concat(
          " a ",
          format(eventDate.to, "d 'de' LLL'.'")
        )
      : "Selecione a data";

  return (
    <div className="h-16 bg-zinc-900 rounded-xl flex items-center shadow-shape px-4">
      <div className="flex items-center gap-2 flex-1">
        <MapPin size={24} className="text-zinc-300" />
        <input
          type="text"
          placeholder="Para onde quer ir?"
          className="bg-transparent text-lg placeholder-zinc-400 text-zinc-400
              focus:outline-none"
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>

      <button
        onClick={openDatePicker}
        disabled={isGuestInputOpen}
        className="flex items-center gap-2 flex-1 text-left"
      >
        <Calendar size={24} className="text-zinc-300" />
        <span
          className=" text-sm text-zinc-400 w-180 flex
"
        >
          {displayDate}
        </span>
      </button>

      {isDatePickerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-zinc-900  rounded-lg p-4 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-zinc-300 text-xl font-medium">
                Selecione a data
              </h2>
              <X
                size={24}
                className="text-zinc-300 cursor-pointer"
                onClick={closeDatePicker}
              />
            </div>

            <DayPicker
              className="text-zinc-300 min-w-full"
              mode="range"
              selected={eventDate}
              onSelect={setEventDate}
            />
          </div>
        </div>
      )}

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

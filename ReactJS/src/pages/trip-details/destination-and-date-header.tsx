import { MapPin, Calendar, Settings2 } from "lucide-react";
import { Button } from "../../components/button";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { useEffect, useState } from "react";
import { format } from "date-fns";

interface Trip {
  id: string;
  destination: string;
  starts_at: string;
  ends_at: string;
  is_confirmed: boolean;
}

export default function DestinationAndDateHeader() {
  const { tripId } = useParams();
  const [trip, setTrip] = useState<Trip | undefined>();

  useEffect(() => {
    async function fetchTrip() {
      const response = await api.get(`/trips/${tripId}`);
      setTrip(response.data.trip);
    }

    fetchTrip();
  }, [tripId]);

  const displayDate =
    trip && trip.starts_at && trip.ends_at
      ? format(trip.starts_at, "d 'de' LLL'.'").concat(
          " a ",
          format(trip.ends_at, "d 'de' LLL'.'")
        )
      : "Selecione a data";

  return (
    <div className="px-4 h-16 rounded-lg bg-zinc-900 shadow-shape flex items-center justify-between">
      <div className="flex items-center gap-2">
        <MapPin size={24} className="text-zinc-400" />
        <span className="text-zinc-400">
          {trip?.destination || "Carregando..."}
        </span>
      </div>

      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <Calendar size={24} className="text-zinc-400" />
          <span className="text-zinc-400">
            {displayDate || "Carregando..."}
          </span>
        </div>

        <Button variant="secondary">
          Alterar local/data
          <Settings2 size={20} className="text-zinc-200" />
        </Button>
      </div>
    </div>
  );
}

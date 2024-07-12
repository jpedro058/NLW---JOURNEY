import { CircleCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface Activity {
  id: string;
  date: string;
  activities: {
    id: string;
    title: string;
    occurs_at: string;
  }[];
}

export default function AtcivitiesDetails() {
  const { tripId } = useParams();
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    async function fetchTrip() {
      const response = await api.get(`/trips/${tripId}/activities`);
      console.log(response.data.activities);
      setActivities(response.data.activities);
    }

    fetchTrip();
  }, [tripId, setActivities]);

  return (
    <div className="space-y-8">
      {activities.map((activity) => (
        <div key={activity.id} className="space-y-2.5">
          <div className="flex flex-col gap-2 items-baseline">
            <div className="flex items-baseline gap-2">
              <span className="text-zinc-300 text-3xl font-semibold">
                Dia {format(activity.date, "d")}
              </span>
              <span className="text-zinc-500 text-sm">
                {format(activity.date, "EEEE", { locale: ptBR })}
              </span>
            </div>
            {activity.activities.length === 0 && (
              <span className="text-zinc-500 text-sm">
                Nenhuma atividade cadastrada nessa data
              </span>
            )}
          </div>
          {activity.activities.map((activity) => (
            <div
              key={activity.id}
              className="bg-zinc-900 shadow-shape px-4 py-4 flex items-center justify-between rounded-xl"
            >
              <div className="flex items-center gap-2">
                <CircleCheck size={24} className="text-lime-300" />
                <span className="text-zinc-300">{activity.title}</span>
              </div>
              <span className="text-zinc-400">
                {format(new Date(activity.occurs_at), "HH:mm")}h
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

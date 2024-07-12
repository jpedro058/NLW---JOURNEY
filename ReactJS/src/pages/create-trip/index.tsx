import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import InviteGuestModal from "./invite-guest-modal";
import ConfirmTripModal from "./confirm-trip-modal";
import DestinationAndDateStep from "./steps/destination-and-date-step";
import InviteGuestStep from "./steps/invite-guest-step";
import { DateRange } from "react-day-picker";
import { api } from "../../lib/axios";

export default function CreateTripPage() {
  const navigate = useNavigate();

  const [isGuestInputOpen, setIsGuestInputOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([]);
  const [isConfirmTrip, setIsConfirmTrip] = useState(false);

  const [destination, setDestination] = useState("");
  const [owner, setOwner] = useState("");
  const [ownerEmail, setOwnerEmail] = useState("");
  const [eventDate, setEventDate] = useState<DateRange | undefined>();

  function openGuestInput() {
    setIsGuestInputOpen(true);
  }

  function closeGuestInput() {
    setIsGuestInputOpen(false);
  }

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  function addNewEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const email = data.get("email") as string;

    if (emailsToInvite.includes(email)) {
      return;
    }

    setEmailsToInvite([...emailsToInvite, email]);
  }

  function removeEmail(email: string) {
    setEmailsToInvite(emailsToInvite.filter((e) => e !== email));
  }

  function openConfirmTrip() {
    setIsConfirmTrip(true);
  }

  function closeConfirmTrip() {
    setIsConfirmTrip(false);
  }

  async function createTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log({
      destination,
      owner,
      ownerEmail,
      eventDate,
      emailsToInvite,
    });

    if (
      !destination ||
      !owner ||
      !ownerEmail ||
      !eventDate?.from ||
      !eventDate?.to ||
      emailsToInvite.length === 0
    ) {
      return;
    }

    const response = await api.post("/trips", {
      destination,
      starts_at: eventDate?.from,
      ends_at: eventDate?.to,
      owner_name: owner,
      owner_email: ownerEmail,
      emails_to_invite: emailsToInvite,
    });

    console.log(response.data);

    const { tripId } = response.data;

    navigate(`/trips/${tripId}`);
  }

  return (
    <div className="bg-zinc-900 h-screen flex justify-center items-center bg-pattern bg-no-repeat bg-center ">
      <div className="max-w-3xl w-full px-4 space-y-10 ">
        <div className="flex items-center flex-col gap-2">
          <img src="/logo.svg" alt="" />
          <p className="text-zinc-300 text-xl text-center">
            Convide seus amigos e planeie a sua viagem
          </p>
        </div>

        <div className="space-y-4">
          <DestinationAndDateStep
            isGuestInputOpen={isGuestInputOpen}
            openGuestInput={openGuestInput}
            closeGuestInput={closeGuestInput}
            setDestination={setDestination}
            setEventDate={setEventDate}
            eventDate={eventDate}
          />

          {isGuestInputOpen && (
            <InviteGuestStep
              openModal={openModal}
              openConfirmTrip={openConfirmTrip}
              emailsToInvite={emailsToInvite}
            />
          )}
        </div>

        {isModalOpen && (
          <InviteGuestModal
            emailsToInvite={emailsToInvite}
            removeEmail={removeEmail}
            addNewEmail={addNewEmail}
            closeModal={closeModal}
          />
        )}

        {isConfirmTrip && (
          <ConfirmTripModal
            closeConfirmTrip={closeConfirmTrip}
            createTrip={createTrip}
            setOwner={setOwner}
            setOwnerEmail={setOwnerEmail}
          />
        )}

        <p className="text-zinc-500 text-sm text-center">
          Ao planear a sua viagem pela plann.er você automaticamente concorda{" "}
          <br />
          com os nossos{" "}
          <a href="" className="text-zinc-300 underline">
            termos de uso{" "}
          </a>{" "}
          e{" "}
          <a href="" className="text-zinc-300 underline">
            política de privacidade
          </a>
          .
        </p>
      </div>
    </div>
  );
}

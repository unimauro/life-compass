import { useState, useEffect } from "react";

interface Helpline {
  country: string;
  phone: string;
  organization: string;
}

const helplinesByCountry: Record<string, Helpline> = {
  PE: { country: "Peru", phone: "113", organization: "Linea 113 - MINSA" },
  US: { country: "USA", phone: "988", organization: "988 Suicide & Crisis Lifeline" },
  CA: { country: "Canada", phone: "988", organization: "988 Suicide Crisis Helpline" },
  MX: { country: "Mexico", phone: "800-290-0024", organization: "SAPTEL" },
  AR: { country: "Argentina", phone: "135", organization: "Centro de Asistencia al Suicida" },
  CL: { country: "Chile", phone: "*4141", organization: "Linea de la Vida" },
  CO: { country: "Colombia", phone: "106", organization: "Linea 106" },
  BR: { country: "Brazil", phone: "188", organization: "CVV" },
  UY: { country: "Uruguay", phone: "0800-0767", organization: "Ultimo Recurso" },
  EC: { country: "Ecuador", phone: "171", organization: "Linea 171" },
  BO: { country: "Bolivia", phone: "800-10-0639", organization: "Linea de la Vida" },
  PY: { country: "Paraguay", phone: "(021) 220-418", organization: "Linea de Prevencion" },
  VE: { country: "Venezuela", phone: "0-800-AYUDA-0", organization: "Linea de Ayuda" },
  CR: { country: "Costa Rica", phone: "2272-3774", organization: "Colegio de Profesionales" },
  PA: { country: "Panama", phone: "169", organization: "Linea 169" },
  DO: { country: "Dominican Republic", phone: "(809) 920-0674", organization: "Linea de Crisis" },
  GT: { country: "Guatemala", phone: "1546", organization: "Linea Nacional" },
  HN: { country: "Honduras", phone: "2232-1314", organization: "CPTPS" },
  SV: { country: "El Salvador", phone: "2251-3000", organization: "Linea de Emergencia" },
  NI: { country: "Nicaragua", phone: "2277-1010", organization: "Centro de Ayuda" },
  CU: { country: "Cuba", phone: "838-8388", organization: "Linea Confidencial" },
  ES: { country: "Spain", phone: "024", organization: "Linea 024" },
  GB: { country: "UK", phone: "116 123", organization: "Samaritans" },
  FR: { country: "France", phone: "3114", organization: "Numero National" },
  DE: { country: "Germany", phone: "0800-111-0-111", organization: "Telefonseelsorge" },
  IT: { country: "Italy", phone: "800-274-274", organization: "Telefono Amico" },
  AU: { country: "Australia", phone: "13 11 14", organization: "Lifeline" },
  JP: { country: "Japan", phone: "0120-783-556", organization: "Inochi no Denwa" },
  KR: { country: "South Korea", phone: "1393", organization: "Crisis Counseling" },
  CN: { country: "China", phone: "010-82951332", organization: "Beijing Crisis Center" },
  IN: { country: "India", phone: "9820466726", organization: "iCall" },
  RU: { country: "Russia", phone: "8-800-2000-122", organization: "Phone of Trust" },
};

const defaultHelpline: Helpline = {
  country: "International",
  phone: "988",
  organization: "Crisis Lifeline",
};

export function useCountryHelpline() {
  const [helpline, setHelpline] = useState<Helpline>(defaultHelpline);
  const [countryCode, setCountryCode] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const detectCountry = async () => {
      try {
        const cachedCountry = sessionStorage.getItem("user_country");
        if (cachedCountry && helplinesByCountry[cachedCountry]) {
          setHelpline(helplinesByCountry[cachedCountry]);
          setCountryCode(cachedCountry);
          setLoading(false);
          return;
        }

        const response = await fetch("https://ipapi.co/json/", { signal: AbortSignal.timeout(5000) });
        const data = await response.json();
        const code = data.country_code;

        if (code && helplinesByCountry[code]) {
          setHelpline(helplinesByCountry[code]);
          setCountryCode(code);
          sessionStorage.setItem("user_country", code);
        }
      } catch {
        // fallback to default
      } finally {
        setLoading(false);
      }
    };

    detectCountry();
  }, []);

  return { helpline, countryCode, loading };
}

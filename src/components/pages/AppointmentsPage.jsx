import PageIntro from "./PageIntro";

export default function AppointmentsPage({ t }) {
  return (
    <>
      <PageIntro
        t={t}
        eyebrow={t("PATIENT SERVICES", "मरीज सेवाएं")}
        title={t("Your health,", "आपका स्वास्थ्य,")}
        highlight={t("your next step.", "आपका अगला कदम।")}
        description={t(
          "Request a visit with the PJMC care team. Our coordinator will contact you to confirm the department, doctor, and time.",
          "पीजेएमसी टीम के साथ अपनी यात्रा का अनुरोध करें। हमारा कोऑर्डिनेटर विभाग, डॉक्टर और समय की पुष्टि के लिए आपसे संपर्क करेगा।",
        )}
      />
      <section className="page-content container appointment-page-grid">
        <form
          className="appointment-form-card"
          onSubmit={(event) => event.preventDefault()}
        >
          <label>
            {t("Full name", "पूरा नाम")}
            <input
              required
              placeholder={t("e.g. Maya Chen", "जैसे: माया चेन")}
            />
          </label>
          <label>
            {t("Phone number", "फोन नंबर")}
            <input required placeholder="+91 00000 00000" />
          </label>
          <label>
            {t("Department", "विभाग")}
            <select defaultValue="">
              <option value="" disabled>
                {t("Choose a department", "विभाग चुनें")}
              </option>
              <option>{t("Heart & vascular", "हृदय एवं रक्त वाहिका")}</option>
              <option>{t("Neurology", "न्यूरोलॉजी")}</option>
              <option>{t("Orthopedics", "हड्डी एवं जोड़")}</option>
              <option>{t("Women's health", "महिला स्वास्थ्य")}</option>
            </select>
          </label>
          <label>
            {t("Preferred date", "पसंदीदा तारीख")}
            <input required type="date" />
          </label>
          <button className="button" type="submit">
            {t("Request appointment", "अपॉइंटमेंट का अनुरोध करें")}
          </button>
        </form>
        <div className="appointment-page-note">
          <h2>{t("Need urgent help?", "तुरंत मदद चाहिए?")}</h2>
          <p>
            {t(
              "For emergencies, please visit the hospital emergency department or call the emergency desk.",
              "आपातकाल में अस्पताल के आपातकालीन विभाग में जाएं या आपातकालीन डेस्क पर कॉल करें।",
            )}
          </p>
          <strong>+1 (800) 555-0199</strong>
        </div>
      </section>
    </>
  );
}

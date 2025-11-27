import React, { useState } from "react";

export default function ReservationForm() {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState(1);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  // Exemple de générateur d'horaires disponibles
  const times = [
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !date || !time) {
      alert("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    setConfirmed(true);
  };

  return (
    <div style={styles.container}>
      <h2>Réservation - Little Lemon 🍋</h2>

      {!confirmed ? (
        <form onSubmit={handleSubmit} style={styles.form}>
          <label>
            Nom complet :
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Votre nom"
              required
              style={styles.input}
            />
          </label>

          <label>
            Nombre de personnes :
            <input
              type="number"
              min="1"
              max="20"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              style={styles.input}
            />
          </label>

          <label>
            Date :
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              style={styles.input}
            />
          </label>

          <label>
            Heure :
            <select
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
              style={styles.input}
            >
              <option value="">Sélectionnez une heure</option>
              {times.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </label>

          <button type="submit" style={styles.button}>
            Réserver
          </button>
        </form>
      ) : (
        <div style={styles.confirmBox}>
          <h3>🎉 Réservation confirmée !</h3>
          <p><strong>Nom :</strong> {name}</p>
          <p><strong>Personnes :</strong> {guests}</p>
          <p><strong>Date :</strong> {date}</p>
          <p><strong>Heure :</strong> {time}</p>

          <button onClick={() => setConfirmed(false)} style={styles.button}>
            Faire une autre réservation
          </button>
        </div>
      )}
    </div>
  );
}

// Styles simples
const styles = {
  container: {
    width: "350px",
    margin: "auto",
    padding: "20px",
    borderRadius: "10px",
    background: "#fffbe6",
    border: "1px solid #ffd84d",
    marginTop: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    width: "100%",
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    background: "#f4ce14",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  confirmBox: {
    textAlign: "center",
  },
};

import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <h1>Welcome To Miki Photobooth!</h1>
      <p>
      Kamu sudah punya <strong>3 detik</strong> untuk setiap bidikan – tidak ada pengulangan! <br />
      Photobooth ini menangkap <strong>4 Foto</strong> berturut-turut, jadi tunjukkan pose terbaikmu dan bersenang-senanglah!
      </p>
      <p>
      Setelah sesi, <span style={{ color: "pink" }}></span> unduh salinan digital Anda dan bagikan kesenangannya!
      </p>
      <button onClick={() => navigate("/photobooth")}>START</button>
    </div>
  );
};

export default Welcome;

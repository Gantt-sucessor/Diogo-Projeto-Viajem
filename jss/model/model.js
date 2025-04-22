const API_URL = "https://65f2497c034bdbecc7648b04.mockapi.io/api/v1/alimentos";

const Model = {
  async fetchViagens() {
    try {
      const res = await fetch(API_URL);
      return await res.json();
    } catch (error) {
      alert("Erro ao buscar viagens");
      return [];
    }
  },

  async addViagem(viagem) {
    const body = {
      driver: viagem.motorista,
      passenger: viagem.passageiro,
      oringin_address: viagem.origem,
      destination_addres: viagem.destino,
      fee: viagem.taxa
    };

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(viagem)
      });
      return await res.json();
    } catch (error) {
      alert("Erro ao adicionar viagem");
    }
  },

  async removeViagem(id) {
    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    } catch (error) {
      alert("Erro ao remover viagem");
    }
  }
};

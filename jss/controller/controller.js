const Controller = {
    async init() {
      const viagens = await Model.fetchViagens();
      View.renderViagens(viagens);
  
      document.getElementById("travel-form").addEventListener("submit", async (e) => {
        e.preventDefault();
        const dadosFormulario = View.getFormData();
  
      
        if (Object.values(dadosFormulario).some(val => !val && val !== 0)) {
          alert("Preencha todos os campos corretamente!");
          return;
        }
  
        const novaViagem = {
          driver: dadosFormulario.motorista,
          passenger: dadosFormulario.passageiro,
          oringin_address: dadosFormulario.origem,
          destination_addres: dadosFormulario.destino,
          fee: dadosFormulario.taxa
        };
  
        await Model.addViagem(novaViagem);
        await this.atualizarTabela();
        View.limparFormulario();
      });
    },
  
    async removerViagem(id) {
      await Model.removeViagem(id);
      await this.atualizarTabela();
    },
  
    async atualizarTabela() {
      const viagens = await Model.fetchViagens();
      View.renderViagens(viagens);
    }
  };
  
  window.addEventListener("DOMContentLoaded", () => {
    Controller.init();
  });
  
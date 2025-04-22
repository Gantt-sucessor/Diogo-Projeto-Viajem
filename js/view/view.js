const View = {
    renderViagens(viagens) {
      const tbody = document.getElementById("table-travel");
      tbody.innerHTML = "";
  
      viagens.forEach(viagem => {
        const row = document.createElement("tr");
  
        row.innerHTML = `
          <td>${viagem.driver}</td>
          <td>${viagem.passenger}</td>
          <td>${viagem.oringin_address}</td>
          <td>${viagem.destination_addres}</td>
          <td>R$ ${viagem.fee}</td>
          <td><button data-id="${viagem.id}" class="btn-remover">Remover</button></td>
        `;
  
        tbody.appendChild(row);
      });
  
      document.querySelectorAll(".btn-remover").forEach(btn => {
        btn.addEventListener("click", async (e) => {
          const id = e.target.dataset.id;
          await Controller.removerViagem(id);
        });
      });
    },
  
    getFormData() {
      return {
        motorista: document.getElementById("motorista").value.trim(),
        passageiro: document.getElementById("passageiro").value.trim(),
        origem: document.getElementById("origem").value.trim(),
        destino: document.getElementById("destino").value.trim(),
        taxa: parseFloat(document.getElementById("taxa").value.trim())
      };
    },
  
    limparFormulario() {
      document.getElementById("viagem-form").reset();
    }
  };
  
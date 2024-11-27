import { Component } from "@angular/core";
import { SugestionForm } from "./sugestionForm";
import { FormsModule } from "@angular/forms";
import axios from "axios";

@Component({
  selector: "app-sugestions",
  imports: [FormsModule],
  templateUrl: "./sugestions.component.html",
  styleUrl: "./sugestions.component.scss",
})
export class SugestionsComponent {
  newSugestion: SugestionForm = {
    name: "",
    email: "",
    cep: "",
    street: "",
    neighborhood: "",
    city: "",
    state: "",
    phone: "",
    message: "",
  };

  submit() {
    const backendURL =
      "https://script.google.com/macros/s/AKfycbyUi8Rgk2ACa2ep9S4jHRJ65XkBHTDhRyl1NvuIzRpmPk6WYa4dEdDROds_bnVPtR1yJg/exec";

    // Criando uma instância de FormData
    const formData = new FormData();

    interface SugestionsForm {
      name: string;
      email: string;
      cep: string;
      street: string;
      neighborhood: string;
      city: string;
      state: string;
      phone: string;
      message: string;
    }

    const newSugestion: SugestionsForm = {
      name: "John Doe",
      email: "john@example.com",
      cep: "12345-678",
      street: "Main Street",
      neighborhood: "Downtown",
      city: "Cityville",
      state: "Stateville",
      phone: "123456789",
      message: "Hello, this is a test message.",
    };


    for (const key in newSugestion) {
      if (Object.prototype.hasOwnProperty.call(newSugestion, key)) {
        formData.append(key, String(newSugestion[key as keyof SugestionsForm]));
      }
    }

    axios
      .post(backendURL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("Formulário enviado com sucesso:", response.data);
      })
      .catch((error) => {
        console.error("Erro ao enviar o formulário:", error);
      });
  }
}

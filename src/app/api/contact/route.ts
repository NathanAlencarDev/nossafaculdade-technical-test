import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    //! Validando campos do formulário.
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Todos os campos são obrigatórios." },
        { status: 400 }
      );
    }

    //! Simulando o envio do e-mail // Caso necessario alterar para um envio real.
    console.log("📨 Simulando envio de e-mail:");
    console.log("De:", name);
    console.log("Email:", email);
    console.log("Mensagem:", message);

    //! Simulando o tempo de espera para envio.
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json(
      { success: true, message: "Mensagem enviada com sucesso." },
      { status: 200 }
    );
  } catch (error) {
    //! Retornando um erro em casos de falha.
    console.error("Erro ao simular envio:", error);
    return NextResponse.json(
      { message: "Erro ao enviar a mensagem." },
      { status: 500 }
    );
  }
}

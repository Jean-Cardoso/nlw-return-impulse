import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

// spies = espiões (garantir que as funções mockadas foram executadas)
const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

// Describe -> Suit de testes
describe('Submit feedback', () => {
  // Criação do serviço e Mock das dependências
  const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy }
  );

  const parameters = {
    type: 'BUG',
    comment: 'example content',
    screenshot: 'data:image/png;base64'
  };

  it('should be able to submit a feedback', async () => {
    // Espera que ao executar a função (expect), 
    // Ela deve ir até o final (resolves)
    // E não gere exceções (not.toThrow())
    const test = {...parameters};
    await expect(submitFeedback.execute(test)).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it('should not be able to submit a feedback without type', async () => {
    let test = {...parameters, type: ""};
    await expect(submitFeedback.execute(test)).rejects.toThrow();
  });

  it('should not be able to submit a feedback without comment', async () => {
    let test = {...parameters, comment: ""};
    await expect(submitFeedback.execute(test)).rejects.toThrow();
  });

  it('should not be able to submit a feedback with an invalid screenshot', async () => {
    let test = {...parameters, screenshot: 'test.jpg'};
    await expect(submitFeedback.execute(test)).rejects.toThrow();
  });
})
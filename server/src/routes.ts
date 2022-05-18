import express from "express";
import { PrismaFeedbacksRepository } from "./repositories/prisma/prisma-feedbacks-repository";
import { SubmitFeedbackUseCase } from "./use-cases/submit-feedback-use-case";
import { NodemailerMailAdapter } from "./adapters/nodemailer/nodemailer-mail-adapter";

export const routes = express.Router();

//#region Inversão de Dependência
const prismaFeedbacksRepository = new PrismaFeedbacksRepository();

const nodemailerMailAdapter = new NodemailerMailAdapter();

const submitFeedbackUseCase = new SubmitFeedbackUseCase(
  prismaFeedbacksRepository,
  nodemailerMailAdapter
);

//#endregion

routes.post("/feedbacks", async (request, response) => {
  const { type, comment, screenshot } = request.body;

  try{
    await submitFeedbackUseCase.execute({ type, comment, screenshot });
    return response.status(201).send();
  }
  catch(err){
    console.error(err);
    return response.status(500).send();
  }

});

import { apiQuestions } from "./apiQuestion";
import { datenbankQuestion } from "./datenbankQuestion";
import { dockerQuestion } from "./dockerQuestion";
import { htmlCssQuestions } from "./htmlCssQuestions";
import { jsQuestions } from "./jsQuestions";
import { reactQuestion } from "./reactQuestions";
import { tsQuestions } from "./tsQuestions";

export const allQuestions = [
  ...apiQuestions,
  ...htmlCssQuestions,
  ...dockerQuestion,
  ...jsQuestions,
  ...reactQuestion,
  ...tsQuestions,
  ...datenbankQuestion,
];

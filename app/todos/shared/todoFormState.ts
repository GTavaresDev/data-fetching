export type TodoFormErrors = {
  id?: string[];
  titulo?: string[];
  descricao?: string[];
};

export type TodoFormValues = {
  id?: string;
  titulo: string;
  descricao: string;
};

export type TodoFormState = {
  message: string;
  errors: TodoFormErrors;
  values: TodoFormValues;
};

export function createTodoFormState(
  values?: Partial<TodoFormValues>,
  message = "",
  errors: TodoFormErrors = {},
): TodoFormState {
  return {
    message,
    errors,
    values: {
      id: values?.id,
      titulo: values?.titulo ?? "",
      descricao: values?.descricao ?? "",
    },
  };
}

export function validateTodoForm(values: TodoFormValues): TodoFormErrors {
  const errors: TodoFormErrors = {};

  if (values.id !== undefined && (!values.id.trim() || Number.isNaN(Number(values.id)))) {
    errors.id = ["Identificador da tarefa invalido."];
  }

  if (!values.titulo.trim()) {
    errors.titulo = ["Informe um titulo para a tarefa."];
  } else if (values.titulo.trim().length < 3) {
    errors.titulo = ["O titulo deve ter pelo menos 3 caracteres."];
  } else if (values.titulo.trim().length > 80) {
    errors.titulo = ["O titulo deve ter no maximo 80 caracteres."];
  }

  if (values.descricao.trim().length > 300) {
    errors.descricao = ["A descricao deve ter no maximo 300 caracteres."];
  }

  return errors;
}

export function hasTodoFormErrors(errors: TodoFormErrors) {
  return Object.values(errors).some((fieldErrors) => fieldErrors?.length);
}

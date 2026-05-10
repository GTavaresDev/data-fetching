"use client";

import { useActionState, useState } from "react";
import {
  createTodoFormState,
  type TodoFormState,
  type TodoFormValues,
  validateTodoForm,
} from "@/app/todos/shared/todoFormState";

interface FormProps {
  action: (
    state: TodoFormState,
    formData: FormData,
  ) => Promise<TodoFormState>;
  initialValues?: {
    id?: string | number;
    titulo?: string;
    descricao?: string | null;
  };
  submitLabel?: string;
  resetLabel?: string;
}

export default function Form({
  action,
  initialValues,
  submitLabel = "Criar Tarefa",
  resetLabel = "Limpar campos",
}: FormProps) {
  const initialState = createTodoFormState({
    id:
      initialValues?.id === undefined ? undefined : String(initialValues.id),
    titulo: initialValues?.titulo ?? "",
    descricao: initialValues?.descricao ?? "",
  });
  const [state, formAction, pending] = useActionState(action, initialState);
  const [values, setValues] = useState<TodoFormValues>(initialState.values);
  const [touched, setTouched] = useState({
    titulo: false,
    descricao: false,
  });

  const clientErrors = validateTodoForm(values);
  const canShowServerError = {
    titulo: values.titulo === state.values.titulo,
    descricao: values.descricao === state.values.descricao,
  };

  const tituloError =
    clientErrors.titulo?.[0] ||
    (canShowServerError.titulo ? state.errors.titulo?.[0] : undefined);
  const descricaoError =
    clientErrors.descricao?.[0] ||
    (canShowServerError.descricao ? state.errors.descricao?.[0] : undefined);

  const tituloHasFeedback = touched.titulo || Boolean(state.errors.titulo?.length);
  const descricaoHasFeedback =
    touched.descricao || Boolean(state.errors.descricao?.length);

  const tituloClasses = tituloError
    ? "border-red-500/70 bg-red-500/5 text-red-50 placeholder-red-200/40 focus:border-red-400 focus:ring-red-500/20"
    : tituloHasFeedback
      ? "border-emerald-500/70 bg-emerald-500/5 focus:border-emerald-400 focus:ring-emerald-500/20"
      : "border-zinc-800 bg-zinc-800 focus:border-indigo-500 focus:ring-indigo-500/20";
  const descricaoClasses = descricaoError
    ? "border-red-500/70 bg-red-500/5 text-red-50 placeholder-red-200/40 focus:border-red-400 focus:ring-red-500/20"
    : descricaoHasFeedback
      ? "border-emerald-500/70 bg-emerald-500/5 focus:border-emerald-400 focus:ring-emerald-500/20"
      : "border-zinc-800 bg-zinc-800 focus:border-indigo-500 focus:ring-indigo-500/20";

  return (
    <form
      action={formAction}
      className="flex w-full max-w-md flex-col gap-5 rounded-2xl bg-zinc-900 p-6 border border-zinc-800 shadow-xl"
    >
      {values.id ? <input type="hidden" name="id" value={values.id} /> : null}

      <div className="flex flex-col gap-2">
        <label
          htmlFor="titulo"
          className="text-sm font-semibold text-zinc-400 ml-1"
        >
          Título
        </label>
        <input
          type="text"
          id="titulo"
          name="titulo"
          required
          value={values.titulo}
          onBlur={() => setTouched((current) => ({ ...current, titulo: true }))}
          onChange={(event) => {
            const titulo = event.target.value;
            setValues((current) => ({ ...current, titulo }));
          }}
          aria-invalid={Boolean(tituloError)}
          aria-describedby={tituloError ? "titulo-error" : "titulo-helper"}
          placeholder="Ex: Finalizar relatório"
          className={`w-full rounded-xl border px-4 py-3 text-zinc-100 placeholder-zinc-500 shadow-sm transition-all focus:outline-none focus:ring-2 ${tituloClasses}`}
        />
        <p
          id={tituloError ? "titulo-error" : "titulo-helper"}
          className={`ml-1 text-xs ${
            tituloError
              ? "text-red-400"
              : tituloHasFeedback
                ? "text-emerald-400"
                : "text-zinc-500"
          }`}
        >
          {tituloError
            ? tituloError
            : tituloHasFeedback
              ? "Titulo valido."
              : "Use entre 3 e 80 caracteres."}
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="descricao"
          className="text-sm font-semibold text-zinc-400 ml-1"
        >
          Descrição
        </label>
        <textarea
          id="descricao"
          name="descricao"
          value={values.descricao}
          onBlur={() =>
            setTouched((current) => ({ ...current, descricao: true }))
          }
          onChange={(event) => {
            const descricao = event.target.value;
            setValues((current) => ({ ...current, descricao }));
          }}
          aria-invalid={Boolean(descricaoError)}
          aria-describedby={
            descricaoError ? "descricao-error" : "descricao-helper"
          }
          placeholder="Descreva os detalhes da tarefa..."
          className={`w-full h-32 rounded-xl border px-4 py-3 text-zinc-100 placeholder-zinc-500 shadow-sm transition-all resize-none focus:outline-none focus:ring-2 ${descricaoClasses}`}
        />
        <p
          id={descricaoError ? "descricao-error" : "descricao-helper"}
          className={`ml-1 text-xs ${
            descricaoError
              ? "text-red-400"
              : descricaoHasFeedback
                ? "text-emerald-400"
                : "text-zinc-500"
          }`}
        >
          {descricaoError
            ? descricaoError
            : descricaoHasFeedback
              ? "Descricao pronta para envio."
              : "Campo opcional com limite de 300 caracteres."}
        </p>
      </div>

      {state.message ? (
        <p
          aria-live="polite"
          className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200"
        >
          {state.message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="mt-2 w-full rounded-xl bg-indigo-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-500/20 transition-all hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-70 active:scale-[0.98]"
      >
        {pending ? "Salvando..." : submitLabel}
      </button>

      <button
        type="button"
        onClick={() => {
          setValues(initialState.values);
          setTouched({
            titulo: false,
            descricao: false,
          });
        }}
        className="text-center text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
      >
        {resetLabel}
      </button>
    </form>
  );
}

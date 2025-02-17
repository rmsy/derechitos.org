export default function Home() {
  return (
    <div>
      <main className="size-full">
        <div className="p-10 sm:p-40 font-[family-name:var(--font-geist-mono)]">
          <h2 className="text-2xl font-light mb-6">
            Usted tiene derechos constitutionales <em>garantizados</em>.
          </h2>
          <ol className="list-decimal list-inside">
            <li className="mb-4">
              <strong>NO ABRA LA PUERTA</strong> si un agente de inmigración
              está tocando la puerta.
            </li>
            <li className="mb-4">
              <strong>NO CONTESTE NINGUNA PREGUNTA</strong> de un agente de
              inmigración si trata de hablar con usted.{" "}
              <em>Usted tiene el derecho a guardar silencio.</em>
            </li>
            <li className="mb-4">
              <strong>NO FIRME NADA</strong> sin antes hablar con un abogado.{" "}
              <em>Usted tiene el derecho de hablar con un abogado.</em>
            </li>
            <li className="mb-4">
              Si usted está fuera de su casa, pregúntele al agente si tiene la
              libertad de irse y si le dice que sí, váyase con tranquilidad.
            </li>
            <li className="mb-4">
              <strong>MUÉSTRALE ESTA TARJETA EL AGENTE.</strong> Si usted está
              dentro de su casa, muestre la tarjeta por la ventana.
            </li>
          </ol>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        {/* define footer */}
      </footer>
    </div>
  );
}

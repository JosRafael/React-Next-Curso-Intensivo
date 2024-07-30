
export default function Primeiro() {
  const raio = 4.5;
  const PI = 3.14159;

  const titulo = (
    <div>
      <h1>Primeiro Componente</h1>
      <h2>Assuntos Importantes para o primeiro componente</h2>
    </div>
  );

  function anoAtual() {
    return new Date().getFullYear();
  }

  function gerarUmaLista() {
    return (
      <ul className="px-6 list-disc flex flex-row space-x-6">
        <li>JOÃO</li>
        <li>MARIA</li>
        <li>JOSE</li>
      </ul>
    );
  }

  return (
      <div>
        {titulo}
        <div className="flex flex-col">
          <span>{1 + 1}</span>
          <span>{Math.random()}</span>
          <span>{anoAtual()}</span>
          <span>{gerarUmaLista()}</span>
          <div>
            <span>{PI * Math.pow(raio, 2)}</span>
          </div>
        </div>
      </div>
  );
}

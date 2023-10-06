import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="ml-[4rem]">
      <div className="flex">
        <div className="my-[10rem]">
          <p className="flex leading-6 font-medium tracking-widest text-purpleLinear1">
            NEWSLETTER EXCLUSIVA
          </p>
          <h1 className="text-[3rem] font-bold">Workspace inspiration</h1>
          <p className="text-gray my-5 text-xl">
            Assine nossa newsletter e transforme seu espaço
            <br /> de trabalho em um oásis de produtividade!
          </p>
          <div className="flex gap-2">
            <Input
              className="w-[18rem] h-[3.5rem] bg-zinc-800"
              type="email"
              placeholder="Digite seu e-mail"
            />
            <Button className="text-sm h-[3.5rem]" variant={'purple'}>
              QUERO RECEBER <ArrowRight />
            </Button>
          </div>
        </div>
        <div>
          <img src="/img/monitor1.png" alt="" className="ml-28" />
          <img src="/img/monitor2.png" alt="" className="ml-28 opacity-30" />
          <img
            src="/img/monitor3.png"
            alt=""
            className="ml-28 opacity-30 fixed"
          />
        </div>
      </div>
      <div className="flex">
        <div className="pr-[2.5rem]">
          <Button className="bg-[url('/rocket.svg')] w-12 h-12 cursor-default mb-4"></Button>
          <h1 className="mb-2">As últimas inovações</h1>
          <p className="text-sm text-gray">
            Mantenha-se atualizado com as mais
            <br /> recentes tecnologias e acessórios que vão
            <br /> revolucionar a forma como você trabalha
          </p>
        </div>
        <div className="pr-[2.5rem]">
          <Button className="bg-[url('/energy.svg')] w-12 h-12 cursor-default mb-4"></Button>
          <h1 className="mb-2">Reviews detalhadas</h1>
          <p className="text-sm text-gray">
            Analisamos os produtos mais populares do
            <br /> mercado para que você possa fazer
            <br /> as escolhas certas.
          </p>
        </div>
        <div className="pr-[2.5rem]">
          <Button className="bg-[url('/tools.svg')] w-12 h-12 cursor-default mb-4"></Button>
          <h1 className="mb-2">Dicas de organização</h1>
          <p className="text-sm text-gray">
            Aumente sua eficiência e proteja sua saúde
            <br /> com conselhos especializados sobre
            <br /> ergonomia e organização.
          </p>
        </div>
        <div className="pr-[2.5rem]">
          <Button className="bg-[url('/gift.svg')] w-12 h-12 cursor-default mb-4"></Button>
          <h1 className="mb-2">Ofertas exclusivas</h1>
          <p className="text-sm text-gray">
            Como membro da nossa comunidade, você
            <br /> terá acesso a descontos e promoções
            <br /> especiais em produtos selecionados.
          </p>
        </div>
      </div>
    </main>
  );
}

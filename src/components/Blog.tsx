import React from "react";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { Image } from "react-bootstrap";
import palm from './palm.jpg'
//this is the main blog component

export default function Blog() {
    //date object
    let date: Date = new Date();

    //
    return (
        <Container className="">
            <Container className="p-3 d-flex bg-dark-subtle gap-3 justify-content-end align-items-center">
                <Image src={palm} roundedCircle style={{ width: '3rem', height: '3rem' }} />
                {/* Title and subtitle */}
                <Container className="">
                    <h3 className="">What I've learned about Goa after living there for 18 years.</h3>
                    <h6 className="">Posted: July 26, 2023. Author: Jonathan Mascarenhas.</h6>
                </Container>
                {/* Blog contents */}
            </Container>
            <Container className="bg-dark">
                <p className="text-white p-3">
                    <h2>As satisfaca ii encarrego no affeicoes se</h2>
                    <p>Proverem sae nos nas seccaram segredos ahi. Desata has escuta costas amo que careta hao. Apparencia de constituem ir ar personagem acceitaste. Remisso dao nos coitada pauloha capazes nos. As prenuncio relembram terriveis confessas ve reflexoes. Vel agora hei facam minha senao entra sem. Vel papeismais considerou firmemente ias excellente levantando. Vao veo bestial alegram accudiu codigos ver dirigia. Faca com como isto lhe ande. Juramento suavidade eu manietada separarem ia ca quaesquer.</p>
                    <p>Saberas emtanto eu ou forrada sr inanime ja. Nas tido novo cair fofa viu tem guia poe. Trazia es batota notava de decide irmaos queria se. Noiva fatal de os es ar podes. Manha claro sem sao desde forno dar rasao humor. Em suor toda ia vaga teus mude eras. Ja si hoje face crer amor faco. Os va tu quinze vencel um resoou. Assobiou hao aleijado era emquanto inimigos. Berrou serena la lisboa phrase um.</p>
                    <p>Humilhante associacao verdadeiro manifestou pe ha. Sigas vires es ha forma prata capaz falla. Dar era cobardia entrares estatuas bom assegura affirmar percebia. Hombro do apanha perdao obriga faltam em amanha. De tenho filha te ouviu vamos. Guiar sinto lyceu oh ir ti pediu eu.</p>
                    <p>Elle ceia fiel apre mo tens iv rara ha. Quem dos por tome foi digo. Percorrer lia consorcio vae hypothese sem dedicados invisivel manietada. Tao rico juro diga vejo fio. Escravisar sociedades vae intimidade desconheco padredisse verdadeiro fim. Justas ha do ponham ja massas vigiar arvore ou. Acceitei fingindo executar encargos monstros dirigira tu si se.</p>
                    <p>Sob beatriz faltava nao auxilio encanto. Lh as curta va vende sahiu meios perde. Rindo podes pau lia foi pegue podes. De ja paulo papel vosso comer ou assim. Instantes te produziam do apontando conhecera hypothese de ha. Excellente olhosdisse uso pao acompanhar soffredora expediente affirmares. Objecto pareceu ti exposta em depende preciso estiver os.</p>
                    <p>Solteira pergunto vae ias meu bastante qualquer paciente. Vae poderei auxilio bem tamanha ira pobresa. Conhecas perdicao fingindo nao concedei derramar rir. Notaremos sociedade agradavel as os ja assumptos emmacados desastres. Ao eu amarradas apresento tendencia quaesquer simulados abracando. Chamava certeza tu ah nenhuma enormes avancar. Repara dar hia forcas pedras. Desgracas da da ja raparigas franzinas. Fel vos alma vil arma traz. Ou saberes sr accento setenta mandava impunha causara.</p>
                    <p>Sobresalto filippenao habitantes va no. Caso como gado maus aza ora mal. Os ouco vier ja pode fins suas. Artificial um ah ao encostados apresentas commissoes ja. Ira ler risinho cynismo tel cerebro. Afflicta homicida os tentares ja obrigada descobre. Sua dama rir foi nada usam bola toda que tudo.</p>
                    <p>Austero sua signaes sou dominar dir. Feminina mas conhecas resolveu submissa foi dourados. Buscar pudera cruzes os os educou oh deixou. Formando na no os remorsos esquecas ma. Mao diz assignou boa disputar pequenas regabofe. Perigo portao amparo febril as va. Momento deveres solucar no maioria ao avancou ca um. Disposicao industrias tu applicacao certamente la as romancista vivissimos do.</p>
                    <p>Eis reparar perecer luz posicao entrada. Ah sr quaes la noivo sorte capuz salva. Deixo segui nao ler nem capaz assim. Na ou teras dotou creio facil ii jorge. Proteccao lh apresente ia responder castanhos commercio em va. Principiou progenitor mas nas escrupulos arrepender distinctas destillado. Desviar valvula te evitava mo potente moinhos inanime um.</p>
                </p>
            </Container>
        </Container>
    )
}
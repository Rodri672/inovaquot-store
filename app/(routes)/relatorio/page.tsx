import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export const revalidate = 0;

const HomePage = async () => {
 
    const billboard = await getBillboard("fb25d12c-00cf-4185-826e-7d6dcdd20b0e");

    return (
        <Container>
            <div className="space-y-10 pb-10 ">
                <Billboard data={billboard} />
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 w-full justify-center items-center">
                    <Accordion type="multiple" className=" w-[50%] " >
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                <div className="flex gap-4">
                                    Historial
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                                    </svg>
                                </div>


                            </AccordionTrigger>
                            <AccordionContent>
                                Formada em 2003 na cidade de Leiria, a INovaQuot depressa se tornou numa das principais escolhas da comunidade online da época, em grande parte devido ao seu fórum que juntou alguns dos utilizadores mais notáveis da área em Portugal - desde reviewers de hardware a overclockers. Com altos índices de satisfação dos seus clientes, o marketing boca a boca - um dos tipos de publicidade mais credíveis - surgiu com naturalidade e foi fundamental para o crescimento da empresa. Crescimento esse que em outubro de 2008 culminou com a abertura da segunda loja NovaQuot, em Lisboa, no Parque das Nações. 6 anos após a abertura da loja na capital e, depois de vários anos com um forte investimento na melhoria de recursos humanos e materiais, a empresa abre finalmente a sua terceira loja, desta vez no norte do país - Porto. Com a abertura desta nova loja em outubro de 2014, a empresa conseguiu tal como até então nas suas duas outras lojas NovaQuot, chegar mais facilmente aos clientes dessa zona do país que privilegiam um contacto mais direto e um atendimento mais personalizado. Em março de 2016, devido ao forte crescimento do mercado na capital, a empresa abre o seu quarto espaço físico para atendimento ao público, na zona de Benfica. Um ano seguinte, em 2017 e, depois de vários anos repletos de pedidos dos seus Clientes, a NovaQuot abre a sua quinta loja, em Braga. Situada num distrito repleto de gamers, entusiastas e amantes de tecnologia, Braga representa desde o primeiro dia uma fatia importante dos Clientes NovaQuot, tornando a abertura desta quinta loja na cidade dos arcebispos um acontecimento já esperado e natural.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>
                                <div className="flex gap-4">
                                    Funcionalidades da Aplicação
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                                        <path d="M8 16.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z" />
                                        <path fill-rule="evenodd" d="M4 4a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4Zm4-1.5v.75c0 .414.336.75.75.75h2.5a.75.75 0 0 0 .75-.75V2.5h1A1.5 1.5 0 0 1 14.5 4v12a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 16V4A1.5 1.5 0 0 1 7 2.5h1Z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                A nossa aplicação tem como funcionalidade o gerenciamento de uma empresa de vendas de equipamentos eletrónicos, tentamos ser o mais compreensíveis possível e tornamos a nossa aplicação o mais acessível que conseguimos para que nenhum utilizador tenha nenhuma dificuldade na sua utilização.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>
                                <div className="flex gap-4">
                                    Diagrama de Contexto
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                                        <path fill-rule="evenodd" d="M1 5.25A2.25 2.25 0 0 1 3.25 3h13.5A2.25 2.25 0 0 1 19 5.25v9.5A2.25 2.25 0 0 1 16.75 17H3.25A2.25 2.25 0 0 1 1 14.75v-9.5Zm1.5 5.81v3.69c0 .414.336.75.75.75h13.5a.75.75 0 0 0 .75-.75v-2.69l-2.22-2.219a.75.75 0 0 0-1.06 0l-1.91 1.909.47.47a.75.75 0 1 1-1.06 1.06L6.53 8.091a.75.75 0 0 0-1.06 0l-2.97 2.97ZM12 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" clip-rule="evenodd" />
                                    </svg>

                                </div></AccordionTrigger>
                            <AccordionContent>
                                <img src="https://res.cloudinary.com/dzb51atg9/image/upload/v1716825050/tpmo4wjp5h2m8lojnq5l.png" alt="" />
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </div>
            </div>
        </Container>
    );
}

export default HomePage;
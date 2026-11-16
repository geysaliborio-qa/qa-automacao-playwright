# Estratégia de testes — Sauce Demo

## Objetivo
Demonstrar automação de fluxos críticos de autenticação e carrinho em ambiente público de demonstração.

## Escopo
- Login válido e inválido
- Usuário bloqueado
- Campos obrigatórios
- Inclusão de item no carrinho

## Fora do escopo
- Performance, acessibilidade, segurança ofensiva e integrações de produção

## Riscos e mitigação
| Risco | Mitigação |
|---|---|
| Mudanças na interface pública | Seletores `data-test` e Page Object Model |
| Instabilidade de rede | Retry limitado no CI e trace de falhas |
| Dependência de dados públicos | Credenciais de demonstração documentadas |

## Critérios de saída
Todos os testes previstos executados; falhas investigadas e registradas; evidências preservadas no relatório.

## Observação
Esta é uma estratégia de portfólio. Não há resultados de execução declarados neste documento.

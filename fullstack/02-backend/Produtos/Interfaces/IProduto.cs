using System;
using System.Collections.Generic;
using System.Text;

namespace Produtos.Interfaces;

internal interface IProduto
{
    string RealizarCompra();
    string VerificarEstoque();
    string EscolherOpcoes();
    string AvaliarProduto();
    double CalcularEstoque();
    double CalcularTotalDaCompra();
    double ExibirValor();

}

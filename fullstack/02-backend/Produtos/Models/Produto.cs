using Produtos.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Produtos.Models;

internal class Produto : IProduto
{
    public string AvaliarProduto()
    {
        return "Produto avaliado com sucesso";
    }

    public double CalcularEstoque()
    {
        throw new NotImplementedException();
    }

    public double CalcularTotalDaCompra()
    {
        throw new NotImplementedException();
    }

    public string EscolherOpcoes()
    {
        throw new NotImplementedException();
    }

    public double ExibirValor()
    {
        throw new NotImplementedException();
    }

    public string RealizarCompra()
    {
        throw new NotImplementedException();
    }

    public string VerificarEstoque()
    {
        throw new NotImplementedException();
    }
}

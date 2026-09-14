using System.Numerics;
using System.Runtime.Serialization;
using System.Transactions;

namespace Calculadora;

internal class Program
{
    static void Main(string[] args)
    {
        int num1 = 30;
        int num2 = 10;

        var soma = num1 + num2;
        var subtracao = num1 - num2;
        var multiplicacao = num1 * num2;
        var divisao = num1 / num2;

        Console.WriteLine(soma);
        Console.WriteLine(subtracao);
        Console.WriteLine(multiplicacao);
        Console.WriteLine(divisao);



    }
}

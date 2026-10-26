Console.WriteLine("Escreva uma palavra ou frase:");
string palavra =
Console.ReadLine().Trim().ToLower().Replace(" "," ");
string palavraInvertida = "";

for (int i = palavra.Length - 1; i >= 0; i--)
{
    palavraInvertida += palavra[i];
}
Console.WriteLine(palavra);

if (palavra == palavraInvertida)
{
    Console.WriteLine("Essa palavra é um palíndromo.");
}
else
{
    Console.WriteLine("Não é um palíndromo!");
}

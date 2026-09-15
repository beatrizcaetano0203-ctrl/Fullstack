using System.Security.Cryptography;

namespace PasswordGeneratorCourse
{
    internal class Program
    {
        static void Main(string[] args)
        {
            static string GeneratePassword(int length, bool useUppercase, bool useSpecialCharacters)
            {
                var characters = "abcdefghijklmnopqrstuvwxyz0123456789";
                if (useUppercase) characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                if (useSpecialCharacters) characters = "!#$%&'()*+,-./:;<=>?@[]^_{|}~`";
                return string.Concat(Enumerable.Range(0, length).Select(_ => characters[RandomNumberGenerator.GetInt32(characters.Length)]));


            }
            Console.WriteLine(GeneratePassword(22, true, true));
        }
    }
}

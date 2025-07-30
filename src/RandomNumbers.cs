using System;
using System.Collections.Generic;

class RandomNumbersGenerator
{
    static void Main()
    {
        List<int> numbers = GenerateUniqueRandomNumbers(100, 1, 1000);

        // Print the numbers using string.Join for cleaner output
        Console.WriteLine(string.Join(", ", numbers));
    }

    static List<int> GenerateUniqueRandomNumbers(int count, int min, int max)
    {
        List<int> allNumbers = new List<int>();
        for (int i = min; i <= max; i++)
        {
            allNumbers.Add(i);
        }

        Random random = new Random();
        // Shuffle the list
        for (int i = allNumbers.Count - 1; i > 0; i--)
        {
            int j = random.Next(i + 1);
            int temp = allNumbers[i];
            allNumbers[i] = allNumbers[j];
            allNumbers[j] = temp;
        }

        // Take the first 'count' numbers
        return allNumbers.GetRange(0, count);
    }
}
}

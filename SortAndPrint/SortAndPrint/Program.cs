using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SortAndPrint
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Reading two files containing a list of names
            List<string> file1Names = File.ReadAllLines("file1.txt").ToList();
            List<string> file2Names = File.ReadAllLines("file2.txt").ToList();

            // Merging the lists and sorting
            List<string> mergedAndSortedNames = MergeAndSortLists(file1Names, file2Names);

            // Printing the document
            PrintDocument(mergedAndSortedNames);
        }

        static List<string> MergeAndSortLists(List<string> list1, List<string> list2)
        {
            List<string> mergedAndSorted = list1.Concat(list2).OrderBy(name => name).ToList();
            return mergedAndSorted;
        }

        static void PrintDocument(List<string> names)
        {
            Console.WriteLine("Sorted Document:");
            foreach (var name in names)
            {
                Console.WriteLine(name);
            }
        }
    }
}


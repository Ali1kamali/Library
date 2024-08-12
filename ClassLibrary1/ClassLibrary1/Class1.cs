using System.Net.Http.Headers;
using System.Runtime.InteropServices;
using System.Text.RegularExpressions;
using System.Linq;

namespace ClassLibrary1
{
    public static class Class1
    {
        //این تابع تعداد ارقام یک عدد را برمیگرداند
        public static int Len(this int num)
        {
            if (num < 10) return 1;
            if (num < 100) return 2;
            if (num < 1000) return 3;
            if (num < 10000) return 4;
            if (num < 100000) return 5;
            if (num < 1000000) return 6;
            if (num < 10000000) return 7;
            if (num < 100000000) return 8;
            if (num < 1000000000) return 9;
            return 0;
        }
        public static int Len(this long num)
        {
            if (num < 1000000000) return (int)num.Len();
            if (num < 10000000000) return 10;
            if (num < 1000000000000) return 12;
            if (num < 10000000000000) return 13;
            if (num < 100000000000000) return 14;
            if (num < 1000000000000000) return 15;
            return 0;
        }
        //این تابع تعداد رقم های یک عدد توان دار بسیار بزرگ را برمیگرداند
        public static int Len(int paye, int tvan)
        {
            return tvan * (int)Math.Log10(paye) + 1;
        }

        public static void Print(this string str)
        {
            Console.WriteLine(str);
        }
        public static void Print(this char str)
        {
            Console.WriteLine(str);
        }
        public static void Print(this int str)
        {
            Console.WriteLine(str);
        }
        public static double[] Equation(string str, int darajeh = 2) 
        {
            if (darajeh == 1)
            {

            }
            else if (darajeh == 2)
            {
                //-b +- sqrt delta / 2a
                //delta = b^2 - 4ac
                Regex regexForA = new Regex(@""),
                      regexForB = new Regex(@""),
                      regexForC = new Regex(@"");

                int a, b, c;

                if (a + b + c == 0) return new double[] {1,c * 1.0 / a};
                if (a + c == b) return new double[] { 0, -1 };

                return new double[] 
                {
                    -b + Math.Sqrt(b*b -4*a*c) / 2*a,
                    -b - Math.Sqrt(b*b -4*a*c) / 2*a
                };
            }
            else if (darajeh == 3)
            {
                int a, b, c;
            }
            return ;
        }
        public static double[] Equation(double a, double b, double c)
        {
            double dlta = b * b - 4 * a * c;
            double[] result = new double[2];
            result[0] = (-b + dlta) / 2 * a;
            result[1] = (-b - dlta) / 2 * a;
            
            return result;
        }

        // ب.م.م تمام اعداد داخل ارایه رو بدست میاره
        public static int GCD(this int[] numbers)
        {
            if (numbers.Length == 0)
            {
                throw new ArgumentException("Array is empty");
            }

            int result = numbers[0];
            for (int i = 1; i < numbers.Length; i++)
            {
                result = GCD(result, numbers[i]);
            }

            return result;
        }
        //ب.م.م دو عدد را بدست می آورد
        public static int GCD(int a, int b)
        {
            while (b != 0)
            {
                int remainder = a % b;
                a = b;
                b = remainder;
            }

            return a;
        }
        public static int ToInt(this string input)
        {
            if (int.TryParse(input, out int result))
            {
                return result;
            }
            else
            {               
                throw new ArgumentException("ورودی نمی‌تواند به عدد صحیح تبدیل شود.");
            }
            
        }
        //این تابع ک.م.م تمام اعداد بین این دو عدد را حساب میکند
        public static int LCM(int a = 1, int b = 20)
        {
            if (a > b) (a , b) = (b , a);

            int lcm = b;
            while (true)
            {
                for (int  i = a; i <= b; i++)
                {
                    if (lcm % i == 0) 
                    {  
                        if (i == b) 
                            return lcm;
                        else
                            continue; 
                    }
                    else
                    {
                        lcm += lcm;
                        break;
                    }   
                }
            }
        }
        // ک.م.م اعداد یک آرایه را برمیگرداند
        public static int LCM(int[] arr)
        {
            //بزرگ ترین عضو ار میابد
            int bigest = 0;
            for (int i = 0; i < arr.Length; i++)
            {
                if (arr[i] > bigest) bigest = arr[i];
            }
            int lcm = bigest;
            while (true)
            {
                for (int i = 0; i < arr.Length; i++)
                {
                    if (lcm % arr[i] == 0)
                    {
                        if (i + 1 == arr.Length)
                            return lcm;
                        else
                            continue;
                    }
                    else
                    {
                        lcm += bigest;
                        break;
                    }
                }
            }
        }
        //بررسی میکند آیا یک عدد اول است یا خیر
        public static bool IsAval(int num)
        {
            if (num < 2) return false;
            double lim = Math.Sqrt(num);
            for (int i = 2; i <= lim ; i++)
            {
                if (num % i == 0) return false;
            }
            return true;
        }
        //این متود بزرگترن فاکتور اول ورودی ار محاسبه میکند و برمیکرداند
        public static int FactorAval(double num)
        {
            Stack<int> list = new Stack<int>();

            int lim = (int)Math.Sqrt(num);

            for (int i = 2; i < lim; i++)
                if (num % i == 0)
                    if (IsAval(i))
                        list.Push(i);

            return list.Peek();
        }
        //این متود ارقام یک عدد را به صورت یک ارایه برمیگرداند
        public static int[] Argham(int num)
        {
            int[] ret = new int[num.Len()];

            for (int i = 0; num >= 1; num /= 10 , i++)
            {
                int aa = num % 10;
                ret[i] = aa;
            }
            return ret;
        }
    }

    public class Electric
    {
        double _voltage;
        public Electric()
        {

        }
        public Electric(double voltage)
        {
            _voltage = voltage;
        }

        //محسابه چند مقاومت موازی
        public double ResistanceTotal(bool series = false ,params double[] resistance)
        {
            if (series)
            {
                double result1 = 0;
                for (int i = 0; i < resistance.Length; i++)
                {
                    result1 += resistance[i];
                }

                return result1;
            }

            double result = 0;
            for (int i = 0; i < resistance.Length; i++)
            {
                result += 1 / resistance[i];
            }

            return result;
        }
        public double ResistanceTotal(double[] seriesResistance, double[] currentResistance)
            => ResistanceTotal(true, seriesResistance) + ResistanceTotal(false , currentResistance);


        public double I(double resistanceTotal, double voltag)
            => voltag / resistanceTotal;

        public double R(double current, double voltag)
            => voltag / current;


        public double V(double resistanceTotal, double current)
            => current * resistanceTotal;
    }
}
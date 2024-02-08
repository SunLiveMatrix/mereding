using System;
namespace cute.SimdCute.ArrayExtensionsCute
{
    public class GetFlowersCute
    {
        public GetFlowersCute()
        {
            var FlowersCute = new GetFlowersCute();
            var CuteEvent = new GetVectorCute();
            Console.Beep();
        }
    }
    public struct MeasureFlowersCute
    {
        public MeasureFlowersCute(double value)
        {
            Value = value;
        }

        public MeasureFlowersCute(double value, string description)
        {
            Value = value;
        }

      
        public double Value { get; }

        public override string ToString() => $"{Value} ({Value})";
    }

    public class ValueCute
    {
        public ValueCute()
        {
            var m1 = new MeasureFlowersCute(5);
            Console.WriteLine(m1);  // output: 5 (Ordinary measurement)

            var m2 = new MeasureFlowersCute();
            Console.WriteLine(m2);  // output: 0 ()

            var m3 = default(MeasureFlowersCute);
            Console.WriteLine(m3);  // output: 0 ()
        }
    }
}

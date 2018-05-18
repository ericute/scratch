/*
A non-empty array A consisting of N non-negative integers is given. Its binarian is defined as:

                pow2(A[0]) + pow2(A[1])+...+
    binarian(A)=pow2(A[N-1)])
    pow2(k)    =2^K

For example, the binarian of array A such that:
    A[0] = 1
    A[1] = 5
    A[2] = 4

    equals 50:

                pow2(A[0]) + pow2(A[1])+...+
    binarian(A)=pow2(A[2)])
               =pow2(1) + pow2(5) + pow2(4)
               =2 + 32 + 16
               =50

Write a function:

    class Solution { public int solution(int[] A); }


that, given an array A consisting of N non-negative integers, returns the length of the shortest array
that has the same binarian as array A.

For example, given array A such that:

    A[0]=1
    A[1]=0
    A[2]=2
    A[3]=0
    A[4]=0
    A[5]=2

the function should return 3 because:
    - the binarian of A is 13,
    - array B such that B[0]=3, B[1]=2, and B[2]=0 also has a binarian of 13,
    there is no shorter array with a binarian of 13.

*/

public class RakutenExam {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[] inputArray = {1,0,2,0,0,2};
		//System.out.println(getTotal(inputArray));
		
		int x = getTotal(inputArray).intValue();
		int power = pow(x);
		
		
		System.out.println("Total: " + x);
		System.out.println("Power: " + pow(x));
		//System.out.println("2 raised to " + Math.pow(2,pow(x)));
		
		int binarian = ((Double)Math.pow(2,power)).intValue();
		while(binarian > x) {
			power--;
			binarian = ((Double)Math.pow(2,power)).intValue();
		}
		System.out.println("Binarian: " + binarian);
	}

	private static Double getTotal(int[] numArray) {	 
		Double total = Double.valueOf(0);		
		for (int i = 0; i < numArray.length; i++) {
			total = total + Math.pow(2, numArray[i]);
		}
		return total;
	}
	
	private static int pow(int x) {
		int count = 0;
		while(x > 0) {
			if (x%2 == 1) {
				count++;
			}
			x = x/2;
		}	
		return count;
	}
	
}

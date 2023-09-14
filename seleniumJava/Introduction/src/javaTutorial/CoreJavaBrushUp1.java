package javaTutorial;

public class CoreJavaBrushUp1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int myNum = 5; 
		String website = "Rahul Shetty Academy";
		char letter = 'r';
		double dec = 5.99;
		boolean myCard = true;
		
		System.out.println(myNum + " is the number stored in myNum variable");
		
		int[] arr = new int[5];
		arr[0] = 1;
		
		int[] arr2 = {1,2,3,4,5};
		
		for(int i = 0 ; i < arr2.length; i++) {
			System.out.println(arr2[i]);
		}
		
		String[] arr3 = {"selenium", "java", "test"};
		
		for(String s: arr3) {
			System.out.println(s);
		}
	}

}

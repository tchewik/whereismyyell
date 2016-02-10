/*  
– В методе main() объявить действительную квадратную матрицу А порядка n. 
Значение n и элементы матрицы передать из командной строки.
     –	Добавить в тот же класс метод, который формирует одномерный целочисленный 
массив В,  b[i] элемент которого равeн 1 тогда и только тогда, когда элементы  
i-ой строки матрицы A образуют возрастающую последовательность, –1 тогда и только тогда, 
когда элементы i-ой строки матрицы A образуют убывающую последовательность, 
и 0 в противном случае.
– Печать массива В оформить в методе main().
*/

package helloworld;
import java.util.Scanner;
public class HelloWorld {
    public static int[][] createB(int size){
        int B[][] = new int[size][size];
        for (int i = 0; i < size; i++)
            for (int j = 0; j < size; j++)
                B[i][j] = 1;
        return B;
    }
    
    public static void printMatr(int[][] matr){
        for (int i = 0; i < matr.length; i++){
            for (int j = 0; j < matr.length; j++){
                System.out.print(matr[i][j]);
                System.out.print(" ");
            }
            System.out.println();
        }        
    }
    
    public static void main(String[] args) {
        System.out.println("Введите размер квадратной матрицы"); //printf()
        Scanner in = new Scanner(System.in);
        int size;
        size = in.nextInt();
        
        // Создание квадратной матрицы размера n
        System.out.println("Введите содержимое матрицы");
        int A[][] = new int[size][size];
        for (int i = 0; i < size; i++)
            for (int j = 0; j < size; j++)
                A[i][j] = in.nextInt();
        
        // Создание матрицы-ответа
        int B[][] = createB(size);
        System.out.println("��������� ������� ���� �� �������:");
        printMatr(B);
    }
}
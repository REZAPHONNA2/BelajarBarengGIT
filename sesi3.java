
    public class sesi3 {
        public static void main(String [] args) {
            int n = 4; // banyaknya tinggi segitiga
    
            for(int i = 1; i <= n; i++) { //fungsi looping untuk baris
                for(int j = 1; j <= i; j++) { //fungsi looping untuk kolom
                    System.out.print("* ");
                }
                System.out.println(); //pindah ke baris berikutnya
            }
        }
    }


n = 4;
m = 20;

function cuadrado(n) {
    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            document.write("*");
        }
        document.write("<br/>")
    }
}

function rectangulo(n, m) {
    for (i = 0; i < n; i++) {
        for (j = 0; j < m; j++) {
            document.write("*");
        }
        document.write("<br/>")
    }
}

function triangulo1(n) {
    for (i = 0; i < n + 1; i++) {
        for (j = (i); j > 0; j--) {
            document.write("*");
        }
        document.write("<br/>")
    }
}

function triangulo2(n) {
    for (i = n; i > 0; i--) {
        for (j = i; j > 0; j--) {
            document.write("*");
        }
        document.write("<br/>");
    }
}

function triangulo3(n) {
    for (i = n - 1; i >= 0; i--) {
        for (j = i, k = i; j >= 0; j--, k = 4 - i) {
            document.write("&nbsp");
            document.write("&nbsp");
        }
        for (s = 0; s < k; s++) {
            document.write("*");
        }
        document.write("<br/>");
    }
}

function triangulo4(n) {
    for (i = n; i >= 0; i--) {
        k = n - i;
        for (j = n + 1 - i; j > 0; j--) {
            document.write("&nbsp");
            document.write("&nbsp");
        }
        for (s = i - 1; s >= 0; s--) {
            document.write("*");
        }
        document.write("<br/>");
    }
}

function separacion(n) {
    for (s = 0; s < n + 1; s++) {
        document.write("*");
    }
    document.write("<br/>");
}

function trianguloCompuesto1() {
    triangulo1(n);
    separacion(n);
    triangulo2(n);
}

function trianguloCompuesto2() {
    triangulo3(n);
    separacion(n);
    triangulo4(n);
}

function trianguloCompuesto3() {
    for (i = 0; i < n; i++) {
        for (m = 4 - i; m >= 0; m--) {
            document.write("&nbsp");
            document.write("&nbsp");
        }
        for (p = (i); p < ((i * 3) + 1); p++) {
            document.write("*");
        }
        document.write("<br/>");
        document.write("<br/>");
    }
}

function trianguloCompuesto4() {
    for (i = 0; i <= n; i++) {
        m=(i*2)+1;
        // j=n-0;
        for (p = m ; p >0; p=p-2) {
            document.write("&nbsp");
        }
        for (m = i-n; m <=( n - i); m++) {
            document.write("*");
            // document.write("&nbsp");
        }
        
        document.write("<br/>");
        document.write("<br/>");
    }
}



//Llamada a funciones
document.write("<br/>");
document.write("Cuadrado");
document.write("<br/>");
cuadrado(n);

document.write("<br/>");
document.write("Rectángulo");
document.write("<br/>");
rectangulo(n, m);

document.write("<br/>");
document.write("Triángulo 1");
document.write("<br/>");
triangulo1(n);

document.write("<br/>");
document.write("Triángulo 2");
document.write("<br/>");
triangulo2(n);

document.write("<br/>");
document.write("Triángulo 3");
document.write("<br/>");
triangulo3(n);

document.write("<br/>");
document.write("Triángulo 4");
document.write("<br/>");
triangulo4(n);

document.write("<br/>");
document.write("Triángulo Compuesto 1");
document.write("<br/>");
trianguloCompuesto1();

document.write("<br/>");
document.write("Triángulo Compuesto 2");
document.write("<br/>");
trianguloCompuesto2();

document.write("<br/>");
document.write("Triángulo Compuesto 3");
document.write("<br/>");
trianguloCompuesto3();

document.write("<br/>");
document.write("Triángulo Compuesto 4");
document.write("<br/>");
trianguloCompuesto4();
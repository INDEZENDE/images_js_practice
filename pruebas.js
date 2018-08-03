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
    for (i = n - 1; i > 0; i--) {
        for (j = i, k = i; j > 0; j--, k = 4 - i) {
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
    for (i = n - 1; i > 0; i--) {
        k = n - i;
        for (j = n - i; j > 0; j--) {
            document.write("&nbsp");
            document.write("&nbsp");
        }
        for (s = i; s > 0; s--) {
            document.write("*");
        }
        document.write("<br/>");
    }
}

function separacion(n) {
    for (s = 0; s < n+1; s++) {
        document.write("*");
    }
    document.write("<br/>");
}

function trianguloCompuesto() {
    triangulo1(n);
    separacion(n);
    triangulo2(n);
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
trianguloCompuesto();